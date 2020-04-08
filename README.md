<h1 align="center">
  <img alt="FastFeet" height="215" title="FastFeet" src=".github/logo.svg" />
</h1>

<p align="center">Este codigo representa a minha solução do desafio do Bootcamp GoStack 10.0</p>

<p align="center">
 <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#computer-instalação-execução-e-desenvolvimento">Instalação, execução e desenvolvimento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-como-contribuir">Como contribuir</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=FastFeet&uri=https%3A%2F%2Fraw.githubusercontent.com%2FEliasGcf%2Ffastfeet%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<strong>Links dos desafios:</strong>

- [Etapa 1](https://github.com/EliasGcf/fastfeet/blob/master/server/ETAPA_01.md)
- [Etapa 2](https://github.com/EliasGcf/fastfeet/blob/master/server/ETAPA_02.md)
- [Etapa 3](https://github.com/EliasGcf/fastfeet/blob/master/web/ETAPA_03.md)
- [Etapa 4](https://github.com/EliasGcf/fastfeet/blob/master/mobile/ETAPA_04.md)

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://github.com/expressjs/express)
- [Redis](https://redis.io/)
- [Bee-Queue](https://github.com/bee-queue/bee-queue)

## :computer: Instalação, execução e desenvolvimento

Importe o arquivo `Insomnia.json` no Insomnia ou clique no botão [Run in Insomnia](#insomniaButton)

### Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

**Faça um clone desse repositório**

### Backend

- A partir da raiz do projeto, entre na pasta rodando `cd server`;
- Rode `yarn` para instalar sua dependências;
- Rode `cp .env.example .env` e preencha o arquivo `.env` com SUAS variáveis ambiente;
- Rode `docker-compose up -d` para montar o ambiente;
- Rode `yarn sequelize db:migrate` para executar as migrations;
- Para executar somente a migration de `admin-user` rode o comando `yarn sequelize db:seed --seed 20200212180839-admin-user.js`
- Importe o arquivo `Insomnia.json` desse repositório no Insomnia;

### Web

_ps: Antes de executar, lembre-se de iniciar o backend deste projeto_

- A partir da raiz do projeto, entre na pasta do frontend web rodando `cd web`;
- Rode `yarn` para instalar as dependências;
- Rode `yarn start` para iniciar o client web;

### Mobile

Obs.: Esse projeto mobile foi testado apenas no **Android**.

_ps: Antes de executar, lembre-se de iniciar o backend deste projeto_

- A partir da raiz do projeto, entre na pasta do frontend mobile rodando `cd mobile`;
- Rode `yarn` para instalar as dependências;
- Edite o arquivo `mobile/src/services/api.js`, alterando `baseURL` para o IP correspondente a máquina que estiver executando o `backend`;
- Abra o emulador do Android ou conecte seu dispositivo via USB, em seguida, rode `yarn react-native run-android`;

## 🤔 Como contribuir

- **Faça um fork deste repositório**

```bash
# Fork via GitHub official command line
# Caso não tenha o GitHub CLI, realize o fork pelo site.

$ gh repo fork EliasGcf/fastfeet
```

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd fastfeet

# Crie uma branch com sua feature
$ git checkout -b minha-feature

# Faça o commit das suas alterações
$ git commit -m 'feat: Minha nova feature'

# Faça o push para a sua branch
$ git push origin minha-feature
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

---

Feito com 💜 by [EliasGcf](https://www.linkedin.com/in/eliasgcf/)
