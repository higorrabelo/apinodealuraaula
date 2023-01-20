const express = require('express');
const routes = require('./routes/index.js');
const app = express();
const port = 3000;

routes(app);

app.listen(port,()=>{
    console.log("Servidor rodando na porta número: ", port)
})

module.exports = app;

//npx sequelize-cli init para criar modelo basico com modelos e conexão com o banco de dados