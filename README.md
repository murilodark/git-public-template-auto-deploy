# Git Public Template Auto Deploy

Template reutilizável para projetos Frontend modernos utilizando GitHub Actions, Docker, Traefik, VPS Ubuntu e deploy automatizado multiambiente.

O objetivo deste projeto é permitir que qualquer desenvolvedor consiga iniciar rapidamente uma arquitetura profissional contendo:

* deploy automatizado
* homolog e production
* múltiplos domínios
* SSL automático
* GitHub Environments
* GitHub Secrets
* Docker
* Traefik
* CI/CD
* provisionamento automatizado

Tudo centralizado em um único template reutilizável.

---

# Objetivo

Este projeto foi criado para eliminar configurações manuais repetitivas em novos projetos Frontend.

A ideia é simples:

```txt
1 arquivo .env.git
+
1 comando
=
Projeto completamente provisionado
```

O template automatiza:

* criação de repositório GitHub
* criação de branches
* proteção de branches
* criação de environments
* sincronização de secrets
* pipelines GitHub Actions
* deploy automatizado
* integração VPS
* configuração multiambiente

---

# Stack

* GitHub Actions
* Docker
* Traefik
* Nginx
* Ubuntu VPS
* SSL Let's Encrypt
* Bash Automation
* CI/CD
* Infrastructure as Code

---

# Estrutura

```txt
git-public-template-auto-deploy/
├── .github/
│   ├── scripts/
│   └── workflows/
├── app/
├── docker/
├── .env.git
├── docker-compose.homolog.yml
├── docker-compose.production.yml
└── README.md
```

---

# Conceito da Arquitetura

O projeto utiliza:

```txt
GitHub Environment Provisioning
```

Toda a infraestrutura operacional é gerenciada através de:

```txt
.env.git
```

O arquivo centraliza:

* informações do GitHub
* branches
* deploys
* VPS
* SSH
* ambientes
* variáveis do frontend

---

# Exemplo .env.git

```env
# =============================================================================
# GITHUB INFO
# =============================================================================

INFO_GIT={
    OWNER="murilodark"
    REPOSITORY="git-public-front"
    MESSAGE="Deploying to production environment - $(date)"
}

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

# Scripts Automatizados

O projeto possui scripts responsáveis por automatizar todo o bootstrap GitHub.

---

## init-git-project.sh

Executa automaticamente:

```txt
- criação do repositório
- criação de branches
- proteção de branches
- criação de environments
- sincronização de secrets
```

---

## generate-github-repository.sh

Cria automaticamente o repositório GitHub.

---

## generate-github-branchs.sh

Cria e sincroniza branches automaticamente.

---

## generate-github-branchs-permissions.sh

Configura permissões e proteções das branches.

---

## generate-github-environments.sh

Cria environments e sincroniza os secrets automaticamente.

---

# Fluxo Completo

```txt
.env.git
    ↓
Scripts GitHub
    ↓
GitHub Repository
    ↓
GitHub Branches
    ↓
GitHub Permissions
    ↓
GitHub Environments
    ↓
GitHub Secrets
    ↓
GitHub Actions
    ↓
Deploy VPS
```

---

# Deploy Automatizado

O projeto suporta:

## homolog

```txt
Branch configurável
Deploy opcional
Container isolado
```

---

## production

```txt
Branch configurável
Deploy automatizado
Container isolado
```

---

# Multi Domínio

Compatível com:

* múltiplos projetos
* múltiplos containers
* múltiplos domínios
* múltiplos ambientes
* múltiplas VPS

Tudo utilizando:

```txt
Traefik + Docker
```

---

# SSL Automático

O projeto utiliza:

```txt
Let's Encrypt
```

integrado ao:

```txt
Traefik
```

Os certificados são gerados automaticamente.

---

# Como Utilizar

## 1. Clone o template

```bash
git clone https://github.com/murilodark/git-public-template-auto-deploy.git
```

---

## 2. Configure o .env.git

Edite:

```txt
.env.git
```

---

## 3. Login GitHub CLI

```bash
gh auth login
```

---

## 4. Execute o bootstrap

```bash
./.github/scripts/init-git-project.sh
```

---

# Resultado

O projeto será provisionado automaticamente contendo:

* repositório GitHub
* branches
* environments
* secrets
* permissões
* pipelines
* deploy automatizado

---

# Compatibilidade

Compatível com:

* React
* Vue
* Vite
* SPA
* Frontends desacoplados

---

# Filosofia

Este projeto segue o conceito de:

```txt
Infrastructure as Code
```

Toda configuração operacional deve ser:

* versionável
* automatizada
* reutilizável
* previsível

---

# Roadmap

* suporte backend Laravel
* suporte múltiplas VPS
* suporte Redis
* suporte workers
* suporte banco de dados
* suporte rollback automático
* suporte blue/green deploy
* suporte monitoramento
* suporte observabilidade

---

# Licença

MIT License.
