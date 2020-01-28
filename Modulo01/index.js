const express = require('express');

//Instânciar servidor
const server  = express();

// Acessando Rota Localhost:3000/teste
server.get('/teste', (req, res)=>{
// Função para definir o que fazer quando acessar a rota
// req = todos os dados da requisição
// res = todas as informações para retornar para o cliente(front)

// Vai enviar o texto/objeto para o cliente quando acessar a rota /teste
return res.json({message: 'GoStack-10'});


});

// Servidor vai estar escutando a porta 3000 (localhost:3000)
server.listen(3000);