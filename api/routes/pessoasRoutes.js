const express = require('express');
const router = express.Router();
const PessoaController = require('../controllers/PessoaController.js')

router
    .get("/pessoas",PessoaController.pegaTodasAsPessoas)
    .get("/pessoas/:id",PessoaController.pegaUmaPessoa)
    .post("/pessoas",PessoaController.criaPessoa)
    .put("/pessoas/:id",PessoaController.editaPessoa)
    .delete("/pessoas/:id",PessoaController.deletaPessoa)

module.exports = router;