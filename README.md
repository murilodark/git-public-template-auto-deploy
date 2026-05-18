# Git Public Front

Frontend React modular, escalável e reutilizável para projetos com deploy automatizado em VPS utilizando Docker, GitHub Actions, Nginx e Traefik.

Este projeto foi criado para funcionar em conjunto com o backend Laravel:

```txt
https://github.com/murilodark/git-public-api.git
```

O objetivo é fornecer uma estrutura frontend moderna, organizada e preparada para múltiplos ambientes, separação modular, crescimento progressivo do sistema e integração simplificada com APIs REST.

---

# Objetivo do Projeto

Este projeto serve como base frontend para aplicações React que necessitam:

* deploy automatizado;
* homologação e produção separadas;
* arquitetura limpa;
* modularização;
* fácil manutenção;
* reutilização em múltiplos projetos;
* integração com backend Laravel;
* Docker;
* Nginx;
* Traefik;
* SSL automático;
* CI/CD com GitHub Actions.

Inicialmente o projeto possui apenas a estrutura base e uma página principal, porém toda a arquitetura já está preparada para crescimento futuro.

---

# Ambientes

## Homolog

```txt
Frontend:
git-public-front-homolog.olirumcloud.com.br

API:
git-public-api-homolog.olirumcloud.com.br
```

---

## Production

```txt
Frontend:
git-public-front-production.olirumcloud.com.br

API:
git-public-api-production.olirumcloud.com.br
```

---

# Backend Complementar

Este frontend foi pensado para funcionar em conjunto com:

```txt
https://github.com/murilodark/git-public-api.git
```

A API possui dois contextos principais:

```txt
common
admin
```

No frontend a arquitetura foi organizada da seguinte forma:

```txt
API common
↓
modules/site
modules/identity

API admin
↓
modules/admin
```

---

# Arquitetura do Projeto

```txt
src/
├── app/
├── config/
├── core/
├── modules/
│   ├── site/
│   ├── admin/
│   └── identity/
├── common/
├── layouts/
├── assets/
└── styles/
```

A arquitetura foi separada por responsabilidade para evitar acoplamento, duplicação e desorganização.

---

# Estrutura Completa do Projeto

```txt
git-public-front/
├── .github/
│   └── workflows/
│
├── docker/
│   └── nginx/
│       └── conf.d/
│
├── docs/
├── docs-privado/
├── public/
│
├── src/
│   ├── app/
│   ├── assets/
│   ├── common/
│   ├── config/
│   ├── core/
│   ├── layouts/
│   ├── modules/
│   │   ├── admin/
│   │   ├── identity/
│   │   └── site/
│   └── styles/
│
├── .env.example
├── .env.homolog
├── .env.production
├── .gitignore
├── Dockerfile
├── docker-compose.homolog.yml
├── docker-compose.production.yml
├── package.json
├── vite.config.ts
└── README.md
```

---

# Explicação dos Diretórios

# `src/app`

Responsável pela inicialização da aplicação.

Aqui ficam:

* bootstrap da aplicação;
* providers globais;
* router principal;
* configuração base do React;
* inicialização do sistema.

Exemplo futuro:

```txt
app/
├── App.tsx
├── bootstrap/
├── providers/
└── routes/
```

---

# `src/config`

Centraliza configurações da aplicação.

Responsabilidades:

* variáveis de ambiente;
* URLs da API;
* configuração dos endpoints;
* ambiente atual;
* configurações globais.

Exemplo:

```txt
config/
├── env/
└── endpoints/
```

---

# `src/core`

Infraestrutura técnica da aplicação.

Este diretório NÃO deve conter páginas nem regra visual.

Responsabilidades:

* cliente HTTP;
* autenticação base;
* interceptadores;
* tratamento de erros;
* armazenamento local;
* guards de rota;
* serviços técnicos globais.

Exemplo:

```txt
core/
├── auth/
├── errors/
├── guards/
├── http/
└── storage/
```

---

# `src/modules`

Principal diretório de negócio da aplicação.

Cada módulo representa uma área funcional do sistema.

Estrutura:

```txt
modules/
├── site/
├── admin/
└── identity/
```

---

# `src/modules/site`

Área pública/principal do sistema.

Inicialmente será o módulo principal do projeto.

Responsabilidades futuras:

* página inicial;
* landing page;
* páginas institucionais;
* conteúdo público;
* fluxo do usuário comum;
* integração com endpoints common da API.

Estrutura sugerida:

```txt
site/
├── pages/
├── components/
├── services/
└── types/
```

---

# `src/modules/admin`

Área administrativa.

Mesmo sem uso inicial, já existe para suportar crescimento futuro.

Responsabilidades futuras:

* dashboard;
* gestão de usuários;
* permissões;
* relatórios;
* configurações;
* administração do sistema;
* endpoints admin da API.

Estrutura sugerida:

```txt
admin/
├── pages/
├── components/
├── services/
└── types/
```

---

# `src/modules/identity`

Módulo responsável por identidade do usuário.

Separado para evitar duplicação entre `site` e `admin`.

Responsabilidades futuras:

* login;
* logout;
* autenticação;
* sessão;
* perfil do usuário;
* permissões;
* recuperação de senha.

Estrutura sugerida:

```txt
identity/
├── auth/
├── permissions/
├── profile/
└── session/
```

---

# `src/common`

Recursos reutilizáveis da aplicação.

Este diretório NÃO deve conter regra de negócio específica.

Responsabilidades:

* componentes compartilhados;
* hooks reutilizáveis;
* helpers;
* constants;
* validators;
* types globais.

Estrutura:

```txt
common/
├── components/
├── constants/
├── helpers/
├── hooks/
├── types/
└── validators/
```

---

# `src/layouts`

Layouts principais da aplicação.

Responsável pela estrutura visual global das áreas.

Exemplo:

```txt
layouts/
├── AdminLayout/
└── SiteLayout/
```

---

# `src/assets`

Arquivos estáticos.

Responsabilidades:

* imagens;
* ícones;
* fontes;
* logos;
* ilustrações.

Estrutura:

```txt
assets/
├── fonts/
├── icons/
└── images/
```

---

# `src/styles`

Centralização dos estilos globais.

Responsabilidades:

* variáveis globais;
* tema;
* reset;
* estilos globais;
* tokens visuais.

Estrutura:

```txt
styles/
├── globals/
├── theme/
└── variables/
```

---

# `docs`

Documentação pública do projeto.

Pode conter:

* diagramas;
* instruções;
* arquitetura;
* fluxos;
* tutoriais.

---

# `docs-privado`

Documentação interna e privada.

Pode conter:

* anotações internas;
* estratégias;
* observações técnicas;
* informações sensíveis não públicas.

---

# `docker`

Arquivos relacionados à infraestrutura Docker.

Estrutura esperada:

```txt
docker/
└── nginx/
    └── conf.d/
```

Aqui ficarão:

* configurações Nginx;
* configurações homolog;
* configurações production.

---

# `.github/workflows`

Pipelines do GitHub Actions.

Responsabilidades:

* deploy homolog;
* deploy production;
* automação CI/CD.

Estrutura futura:

```txt
workflows/
├── deploy-homolog.yml
└── deploy-production.yml
```

---

# Variáveis de Ambiente

O projeto utiliza múltiplos ambientes:

```txt
.env.example
.env.homolog
.env.production
```

---

# Exemplo Homolog

```env
VITE_APP_ENV=homolog
VITE_API_BASE_URL=https://git-public-api-homolog.olirumcloud.com.br
```

---

# Exemplo Production

```env
VITE_APP_ENV=production
VITE_API_BASE_URL=https://git-public-api-production.olirumcloud.com.br
```

---

# Fluxo Git

Estratégia utilizada:

```txt
develop → homolog
main    → production
```

Branches recomendadas:

```txt
main
develop
feature/*
hotfix/*
```

---

# Deploy Automatizado

Fluxo esperado:

```txt
GitHub
↓
GitHub Actions
↓
VPS Linux
↓
Docker
↓
Nginx
↓
Traefik
↓
SSL automático
```

---

# Infraestrutura

Arquitetura de deploy:

```txt
React
↓
Vite Build
↓
Nginx
↓
Docker
↓
Traefik
↓
HTTPS automático
```

---

# Tecnologias

## Frontend

```txt
React
TypeScript
Vite
React Router
Axios
```

---

## Infraestrutura

```txt
Docker
Docker Compose
Nginx
Traefik
GitHub Actions
```

---

# Princípios Arquiteturais

Este projeto foi desenvolvido seguindo:

* modularidade;
* separação de responsabilidade;
* baixo acoplamento;
* reutilização;
* escalabilidade;
* facilidade de manutenção;
* organização;
* compatibilidade com múltiplos projetos.

---

# Organização Conceitual

```txt
app      → inicialização
config   → ambiente e endpoints
core     → infraestrutura técnica
modules  → negócio
common   → reutilização
layouts  → estrutura visual
assets   → arquivos estáticos
styles   → estilos globais
```

---

# Primeira Etapa do Projeto

Inicialmente o sistema terá apenas:

```txt
modules/site/pages/Home
```

Essa página será responsável por validar a comunicação com a API correspondente ao ambiente configurado.

Mesmo começando simples, toda a estrutura já está preparada para crescimento futuro.

---

# Objetivo Final

O objetivo deste projeto é servir como uma base frontend moderna, organizada e reutilizável para aplicações React profissionais utilizando:

* Laravel;
* React;
* Docker;
* VPS;
* GitHub Actions;
* Traefik;
* CI/CD automatizado.

---

# Licença

Projeto público criado para estudo, padronização e automação de deploy utilizando React, Laravel, Docker e GitHub Actions.
