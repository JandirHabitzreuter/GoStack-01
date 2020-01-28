const express = require('express');

//Instânciar servidor
const server  = express();

// Acessando Rota Localhost:3000/teste
//server.get('/teste', (req, res)=>{
// Função para definir o que fazer quando acessar a rota
// req = todos os dados da requisição
// res = todas as informações para retornar para o cliente(front)

// Vai acessar o nome através da rota (Query Params)
//Ex: http://localhost:3000/teste?nome=Jandir
//const nome = req.query.nome;

const users = ['Jandir', 'Trycia', 'Miguel'];

//Route Params - vai acessar o id pela rota
//http://localhost:3000/users/1
server.get('/users/:index', (req, res)=>{

const { index } = req.params;
// Vai enviar o texto/objeto para o cliente quando acessar a rota /teste
return res.json(users[index]);


});

// Servidor vai estar escutando a porta 3000 (localhost:3000)
server.listen(3000);

// Query Params = ?teste=1 vem junto com alguma informação
//Route Params = /users/1 não tem nomenclatura, é a informação que quer acessar
// por exemplo acessar o usuario de ID = 1
// Request = Conteudo em formato de Json que vem no corpo da
//requisição (PUT ou POST) com as informações para criar 
//um usuário, alterar um usuário.