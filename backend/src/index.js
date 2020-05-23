const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-c2rm9.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(cors())
app.use(express.json());
app.use(routes);


app.listen(3333);







/* 
app.get('/users', (req, res) => {
      console.log(req.query);
      return res.json({ message: 'Hello glr' });
}); */

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametros: 
//Query Params: req.query (Filtros, ordenação, paginação, ....), geralmente usado no get
//Route Params: req.params (Identificar um recurso na alteração ou remoção), geralmente no put e delete, pois quer identificar geralmente por um id
//Body: req.body (Dados para criação ou alteração de um registro) geralmente no put e post, pois é onde preciso saber dos campos do corpo da aplicaçao

//MongoDB: (Não-relacional)

//return res.send('hello');
/*Como vamos usar a estrutura de dados JSON para conectar front com back, substituir .send
por .json, mas o parametro nao pode ser simplesmente uma string, temos que enviar 
um objeto ou um vetor de dentro do javaScript*/

//O express por padrão não entende que vou usar o json