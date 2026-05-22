#!/usr/bin/env bash
set -euo pipefail

OWNER="murilodark"
REPO="NOME_DO_REPOSITORIO_AQUI"
ENV_FILE=".env.git"

if ! command -v gh >/dev/null 2>&1; then
  echo "Erro: GitHub CLI não encontrado. Instale com: sudo apt install gh -y"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Erro: GitHub CLI não autenticado. Execute: gh auth login"
  exit 1
fi

if [ ! -f "$ENV_FILE" ]; then
  echo "Erro: arquivo $ENV_FILE não encontrado."
  exit 1
fi

extract_block() {
  local block_name="$1"

  awk -v block="$block_name" '
    $0 ~ "^" block "[[:space:]]*=\\{" { inside=1; next }
    inside && $0 ~ "^\\}" { inside=0; exit }
    inside {
      gsub(/^[[:space:]]+/, "", $0)
      if ($0 != "") print
    }
  ' "$ENV_FILE"
}

create_environment() {
  local env_name="$1"

  echo "Criando/atualizando environment: $env_name"

  gh api \
    --method PUT \
    -H "Accept: application/vnd.github+json" \
    "/repos/$OWNER/$REPO/environments/$env_name" \
    >/dev/null
}

set_environment_secret() {
  local env_name="$1"
  local secret_name="$2"
  local secret_value="$3"

  echo "Criando/atualizando secret: $secret_name em $env_name"

  printf "%s\n" "$secret_value" | gh secret set "$secret_name" \
    --repo "$OWNER/$REPO" \
    --env "$env_name" \
    --body-file -
}

SECRETS_PRODUCTION_CONTENT="$(extract_block "SECRETS_PRODUCTION")"
SECRETS_HOMOLOG_CONTENT="$(extract_block "SECRETS_HOMOLOG")"

if [ -z "$SECRETS_PRODUCTION_CONTENT" ]; then
  echo "Erro: bloco SECRETS_PRODUCTION vazio ou não encontrado."
  exit 1
fi

if [ -z "$SECRETS_HOMOLOG_CONTENT" ]; then
  echo "Erro: bloco SECRETS_HOMOLOG vazio ou não encontrado."
  exit 1
fi

create_environment "production"
create_environment "homolog"

set_environment_secret "production" "SECRETS_PRODUCTION" "$SECRETS_PRODUCTION_CONTENT"
set_environment_secret "homolog" "SECRETS_HOMOLOG" "$SECRETS_HOMOLOG_CONTENT"

echo "Environments e secrets sincronizados com sucesso."
