# Scripts

Este diretório centraliza scripts responsáveis por automatizar processos de infraestrutura, GitHub, CI/CD, provisionamento de environments e deploys do projeto.

A ideia é transformar toda a configuração operacional em infraestrutura reutilizável e automatizada.

---

# Objetivos

Os scripts deste projeto possuem como foco:

- reduzir configuração manual
- padronizar ambientes
- automatizar GitHub Actions
- automatizar Environments e Secrets
- provisionar VPS
- reutilizar arquitetura em múltiplos projetos
- facilitar onboarding
- criar uma base Full Stack escalável

---

# Estrutura

```txt
scripts/
├── generate-github-environments.sh
├── github-secure-repos.sh
├── bootstrap-vps.sh
├── deploy-homolog.sh
└── deploy-production.sh
```

---

# Pré-requisitos

## GitHub CLI

Instalação Ubuntu/WSL:

```bash
sudo apt update
sudo apt install gh -y
```

---

## Login GitHub CLI

```bash
gh auth login
```

Fluxo recomendado:

```txt
GitHub.com
HTTPS
Login with browser
```

---

# Scripts

---

# generate-github-environments.sh

Responsável por criar automaticamente os environments do GitHub e sincronizar os secrets a partir do arquivo `.env.git`.

---

## O que ele faz

Cria automaticamente:

```txt
Environment:
- homolog
- production
```

E cria/atualiza os secrets:

```txt
SECRETS_HOMOLOG
SECRETS_PRODUCTION
```

Cada secret contém todas as variáveis do ambiente correspondente.

---

## Arquitetura

```txt
.env.git
    ↓
generate-github-environments.sh
    ↓
GitHub Environments
    ↓
GitHub Secrets
    ↓
GitHub Actions
```

---

## Estrutura esperada do .env.git

```env
# =============================================================================
# ENVIRONMENT PRODUCTION
# =============================================================================

SECRETS_PRODUCTION={
    VPS_HOST=
    SSH_PRIVATE_KEY=
    USERNAME=
    CONTAINER_NAME=
    DEPLOY=true
    BRANCH=main
    VITE_APP_NAME=
    VITE_APP_ENV=production
    VITE_API_URL=
    VITE_FRONT_URL=
    VITE_ENABLE_DEVTOOLS=false
    VITE_ENABLE_DEBUG=false
    VITE_ENABLE_LOGS=false
    VITE_REQUEST_TIMEOUT=30000
}

# =============================================================================
# ENVIRONMENT HOMOLOG
# =============================================================================

SECRETS_HOMOLOG={
    VPS_HOST=
    SSH_PRIVATE_KEY=
    USERNAME=
    CONTAINER_NAME=
    DEPLOY=false
    BRANCH=develop
    VITE_APP_NAME=
    VITE_APP_ENV=homolog
    VITE_API_URL=
    VITE_FRONT_URL=
    VITE_ENABLE_DEVTOOLS=true
    VITE_ENABLE_DEBUG=true
    VITE_ENABLE_LOGS=true
    VITE_REQUEST_TIMEOUT=30000
}
```

---

## Configuração do repositório

Edite dentro do script:

```bash
OWNER="murilodark"
REPO="git-public-front"
```

---

## Executar

```bash
chmod +x scripts/generate-github-environments.sh
```

```bash
./scripts/generate-github-environments.sh
```

---

## Resultado no GitHub

### Environment: homolog

```txt
Secrets:
- SECRETS_HOMOLOG
```

---

### Environment: production

```txt
Secrets:
- SECRETS_PRODUCTION
```

---

# github-secure-repos.sh

Responsável por automatizar a configuração de segurança dos repositórios GitHub.

---

## O que ele configura

- repository public
- issues enabled
- wiki disabled
- projects disabled
- branch protection
- block force push
- block delete branch

---

## Execução

```bash
./scripts/github-secure-repos.sh
```

---

# bootstrap-vps.sh

Responsável por preparar uma VPS Ubuntu limpa para deploy.

---

## Instala

- Docker
- Docker Compose
- Git
- Curl
- UFW

---

## Configura

- portas 80/443
- OpenSSH
- Docker Engine

---

## Execução

```bash
sudo ./scripts/bootstrap-vps.sh
```

---

# deploy-homolog.sh

Responsável por executar deploy manual do ambiente homolog.

---

## Execução

```bash
./scripts/deploy-homolog.sh
```

---

# deploy-production.sh

Responsável por executar deploy manual do ambiente production.

---

## Execução

```bash
./scripts/deploy-production.sh
```

---

# Filosofia da Arquitetura

Este projeto utiliza o conceito de:

```txt
Infrastructure as Code
```

e:

```txt
GitHub Environment Provisioning
```

Toda a configuração operacional é transformada em arquivos versionáveis e reutilizáveis.

---

# Objetivo Final

Criar uma arquitetura Full Stack reutilizável contendo:

- React / Vue / Vite
- Docker
- Traefik
- SSL automático
- múltiplos domínios
- CI/CD
- homolog
- production
- GitHub Actions
- VPS automatizada
- deploy automatizado
- environments dinâmicos
- configuração centralizada

---