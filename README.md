  <h1 align="center">Postit API - NestJS</h1>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descrição
Api criada para cadastrar os usuários do app postit. 
## Instalando

```node
npm install
```

## Rodando a api

```npm
npm run start:dev
```

## Abrindo o Swagger
Por padrão a api é aberta na porta [http://localhost:3000](http://localhost:3000), para entrar no [Swagger](https://swagger.io) basta adicionar [http://localhost:3000/swagger/](http://localhost:3000/swagger/) na url.

## Criando as variáveis de ambiente
Crie um arquivo __.env__ na raiz/root do seu projeto, e adicione as seguintes variáveis:

Escolha a sua porta
```js
PORT=3000 
```
Gere o seu JWT para autenticação no site [UUID Generator](https://www.uuidgenerator.net)
```js
JWT_KEY= coloque-seu-jwt-aqui 
```

Coloque true para exibir os comandos SQL no console
```js
DATABASE_LOGGING=false
```