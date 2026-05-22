
# Git Public Front

Frontend React modular preparado para integração com APIs Laravel utilizando Docker, Vite e deploy automatizado.

---

# Objetivo

Este repositório contém exclusivamente a aplicação frontend da arquitetura.

Responsabilidades:

- frontend React;
- arquitetura modular;
- integração com APIs;
- ambientes separados;
- build frontend;
- deploy automatizado;
- estrutura desacoplada.

A documentação completa da infraestrutura está centralizada no repositório âncora:

```txt
laravel-vps-multidomain-deploy
````

---

# Stack Frontend

* React
* TypeScript
* Vite
* Docker
* Docker Compose
* GitHub Actions

---

# Estrutura do Projeto

```txt
.
├── src/
├── public/
├── .github/
├── docker-compose.local.yml
├── docker-compose.homolog.yml
├── docker-compose.production.yml
└── README.md
```

---

# Arquitetura Frontend

```txt
src/
├── app/
├── assets/
├── common/
├── config/
├── core/
├── layouts/
├── modules/
└── styles/
```

---

# Estrutura dos Diretórios

## App

```txt
src/app
```

Responsável por:

* bootstrap;
* providers;
* rotas;
* inicialização da aplicação.

---

## Assets

```txt
src/assets
```

Responsável por:

* imagens;
* ícones;
* fontes;
* arquivos estáticos.

---

## Common

```txt
src/common
```

Responsável por:

* componentes reutilizáveis;
* hooks;
* helpers;
* constantes;
* validações;
* tipagens globais.

---

## Config

```txt
src/config
```

Responsável por:

* variáveis de ambiente;
* endpoints;
* configurações globais.

---

## Core

```txt
src/core
```

Responsável por:

* autenticação;
* HTTP client;
* guards;
* storage;
* tratamento de erros.

---

## Layouts

```txt
src/layouts
```

Responsável pelos layouts globais da aplicação.

---

## Modules

```txt
src/modules
```

Responsável pela separação modular das features da aplicação.

---

## Styles

```txt
src/styles
```

Responsável por:

* temas;
* variáveis;
* estilos globais.

---

# Ambientes

## Local

```txt
docker-compose.local.yml
```

---

## Homologação

```txt
docker-compose.homolog.yml
```

Deploy automático pela branch:

```txt
develop
```

---

## Produção

```txt
docker-compose.production.yml
```

Deploy automático pela branch:

```txt
main
```

---

# Fluxo de Deploy

```txt
develop -> homologação
main    -> produção
```

---

# Variáveis de Ambiente

Arquivos:

```txt
.env.local
.env.homolog
.env.production
```

Responsáveis por:

* URL da API;
* URL frontend;
* ambiente;
* logs;
* debug;
* timeout;
* configurações globais.

---

# Subindo Ambiente Local

## Copiar variáveis

```bash
cp .env.local .env
```

---

## Subir containers

```bash
docker compose -f docker-compose.local.yml up -d --build
```

---

## Instalar dependências

```bash
npm install
```

---

## Executar aplicação

```bash
npm run dev
```

---

# Estrutura Modular

A aplicação utiliza arquitetura modular desacoplada.

Exemplo:

```txt
src/modules/
├── admin/
├── identity/
└── site/
```

Cada módulo pode conter:

```txt
components/
pages/
services/
types/
```

---

# Comunicação com Backend

API oficial:

```txt
git-public-api
```

A comunicação é realizada via:

```txt
src/core/http
```

E os endpoints são centralizados em:

```txt
src/config/endpoints
```

---

# Estrutura de Deploy

## Homologação

```txt
git-public-front-homolog.olirumcloud.com.br
```

---

## Produção

```txt
git-public-front-production.olirumcloud.com.br
```

---

# Deploy Automático

Os deploys utilizam:

* GitHub Actions;
* SSH;
* RSync;
* Docker Compose.

O pipeline executa:

* sincronização dos arquivos;
* rebuild dos containers;
* restart automático;
* atualização do frontend.

---

# Docker

O frontend é executado via containers Docker.

Responsabilidades:

* build da aplicação;
* isolamento do ambiente;
* padronização do deploy;
* integração com Traefik.

---

# Traefik

A instalação do Traefik NÃO está neste repositório.

Toda a documentação da infraestrutura está centralizada em:

```txt
laravel-vps-multidomain-deploy
```

Diretório:

```txt
infra/traefik
```

---

# Recursos Implementados

* arquitetura modular;
* múltiplos ambientes;
* deploy automatizado;
* integração com Laravel;
* Docker;
* CI/CD;
* frontend desacoplado;
* escalabilidade frontend.

---

# Roadmap

* SSR;
* autenticação avançada;
* internacionalização;
* PWA;
* cache inteligente;
* otimizações de performance;
* testes automatizados;
* observabilidade frontend.

---

# Backend Oficial

```txt
git-public-api
```

---

# Repositório Âncora

Documentação completa da infraestrutura:

```txt
laravel-vps-multidomain-deploy
```

---

# Topics GitHub

```txt
react
vite
typescript
frontend
docker
docker-compose
deployment
github-actions
ci-cd
vps
modular-architecture
```

---

# Autor

Murilo Dark