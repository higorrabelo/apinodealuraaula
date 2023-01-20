
const express = require('express');
const pessoaRoute = require('../routes/pessoasRoutes.js')
const bodyParser = require('body-parser');

const router = app=>{

    app.get("/",(req,resp)=>{
        resp.status(200).send({mensagem:"Boas Vindas API"});
    })
    app.use(
        bodyParser.json(),
        express.json(),
        pessoaRoute
    );

}

module.exports = router;
