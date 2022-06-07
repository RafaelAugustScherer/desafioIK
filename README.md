# Desafio IK

Desafio Técnico IK:

> O desafio consiste em uma aplicação Full-stack para visualização, inclusão e edição de tarefas.

---
## Deploy no Heroku

Deploy da aplicação é feito a partir do GitHub CI em forma de container para o [Heroku](https://www.heroku.com/).

O back-end está disponibilizado em um servidor Node.js a partir do tradicional `npm start`, enquanto o front-end está disponibilizado de forma estática através de um servidor NGINX.

* Front-end disponível em https://desafio-ik.herokuapp.com/
* Back-end disponível em https://desafio-ik-api.herokuapp.com/

---
## Como rodar o projeto

<details>
  <summary>📦Rodar localmente com NPM 📦</summary>

  ## Requisitos

  - [Node.js](https://nodejs.org/)
  - npm (Node Package Manager)

  ## Setup

  Antes de inicializar o projeto, é importante configurar algumas variáveis de ambiente e instalar as dependências do projeto.

  ### Configurar o ambiente (.env)

  * Back-end
    - Acesse o diretório `./api`

    - Altere o arquivo `.env.example` com as suas variáveis de ambiente
      ```
        PS_USERNAME=postgres // Usuário para conexão com o banco
        PS_PASSWORD=YOUR_BD_PASSWORD // Senha para conexão com o banco
        PS_DATABASE=postgres // Nome do banco de dados Postgres
        PS_HOST=localhost // Máquina que está rodando o banco
        PS_PORT=5432 // Porta na qual o banco está rodando (Padrão 5432)
      ```
    - Renomeie o arquivo para `.env`
  
  * Front-end
    - Acesse o diretório `./client`
    - Altere o arquivo `.env.example` com as suas variáveis de ambiente
      ```
        REACT_APP_SERVER=http://localhost:3001 // Servidor no qual a API está rodando
        PORT=3000 // Porta na qual o front-end vai rodar
      ```
    - Renomeie o arquivo para `.env`
  
  ### Instalar dependências
  
  * Rode o comando `npm run install:apps` na raiz do projeto

  ## Inicializar a aplicação

  Inicialize o back-end e o front-end em **terminais separados**

  > Por padrão o back-end inicializa na porta 3001

  > Por padrão o front-end inicializa na porta 3000

  * Back-end:
    - Acesse o diretório `./api`
    - Rode o comando `npm run build`
    - Em seguida rode o comando `npm run db:restart` para popular o banco de dados
    - Por fim rode o comando `npm run dev` para inicializar a aplicação

  * Front-end:
    - Acesse o diretório `./client`
    - Rode o comando `npm start`

  ## Acessar a aplicação

  * Back-end:
    - Você pode testar a aplicação via [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/)
    - Rotas para o Postman estão disponibilizadas [aqui!](/api/desafioIK.postman_collection.json)

  * Front-end:
    - Abra o seu navegador e insira a URL: `localhost:3000`
</details>

<details>
  <summary>🐋 Rodar localmente com o Docker 🐋</summary>

  ## Requisitos

  - [Docker](https://www.docker.com/get-started/)

  ## Setup

  Antes de inicializar o projeto, é importante configurar algumas variáveis de ambiente.

  ### Configurar o ambiente (.env)

  * Back-end
    - Acesse o diretório `./api`

    - Altere o arquivo `.env.example` com as suas variáveis de ambiente
      ```
        PS_USERNAME=postgres // Usuário para conexão com o banco
        PS_PASSWORD=YOUR_BD_PASSWORD // Senha para conexão com o banco
        PS_DATABASE=postgres // Nome do banco de dados Postgres
        PS_HOST=localhost // Máquina que está rodando o banco
        PS_PORT=5432 // Porta na qual o banco está rodando (Padrão 5432)
      ```
    - Renomeie o arquivo para `.env`
  
  * Front-end
    - Acesse o diretório `./client`
    - Altere o arquivo `.env.example` com as suas variáveis de ambiente
      ```
        REACT_APP_SERVER=http://localhost:3001 // Servidor no qual a API está rodando
        PORT=3000 // Porta na qual o front-end vai rodar
      ```
    - Renomeie o arquivo para `.env`

  ## Inicializar a aplicação

  > Por padrão o back-end inicializa na porta 3001

  > Por padrão o front-end inicializa na porta 3000

  - Rode o comando `docker-compose build`
  - Em seguida rode o comando `docker-compose up --env_file ./api/.env` na raiz da aplicação e aguarde a inicialização dos containers.

  ## Acessar a aplicação

  * Back-end:
    - Você pode testar a aplicação via [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/)
    - Rotas para o Postman estão disponibilizadas [aqui!](/api/desafioIK.postman_collection.json)

  * Front-end:
    - Abra o seu navegador e insira a URL: `localhost:3000`
</details>

---

## Tecnologias Utilizadas

* Back-end
  - <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" alt="Node.js Logo" width="15"/> Node.js
    - Express
    - pg (PostgresSQL)
    - Cors
  - <img src="https://www.docker.com/favicon.ico" alt="Docker Logo" width="15"/> Docker

* Front-end
  - <img src="https://reactjs.org/favicon.ico" alt="React Logo" width="15"/> React.js
  - <img src="https://axios-http.com/assets/favicon.ico" alt="Axios Logo" width="15"/> Axios
  - <img src="https://www.docker.com/favicon.ico" alt="Docker Logo" width="15"/> Docker


## Referências a outros projetos

Neste projeto foram utilizados alguns recursos e sintaxe de código inspirados em outros projetos que já havia realizado:

- 🏅 [TrybeRank](https://github.com/RafaelAugustScherer/trybe-rank): Deploy no Heroku

- 🟨 [TodoListChallenge](): Desafio Técnico Fictício da Trybe
