const database = require('../models/index.js')

class PessoaController{

    static async pegaTodasAsPessoas(req,res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async pegaUmaPessoa(req,res){
        const id = req.params.id;
        try{
            const umaPessoa = await database.Pessoas.findOne({where:{id:id}});
            return res.status(200).json(umaPessoa);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
    static async editaPessoa(req,res){
        var id = req.params.id;
        try{
            const umaPessoa = await database.Pessoas.findOne({where:{id:Number(id)}});
            umaPessoa.update(req.body,{where:{id:Number(id)}});
            res.status(200).json(umaPessoa);
        }
        catch(error){
            res.status(500).json(error.message);
        }
    }
    static async criaPessoa(req,res){
        const novaPessoa = req.body;
        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            res.status(200).json(novaPessoaCriada);
        }catch(error){
            res.status(500).json(error.message);
        }
    }
    static async deletaPessoa(req,res){
        var id = req.params.id;
        try{
            const removido = await database.Pessoas.destroy({where:{id:id}});
            res.send("REmovido com sucesso");
        }
        catch(erro){
            res.status(500).send("Erro na remoção");
        };
    }
}

module.exports = PessoaController;