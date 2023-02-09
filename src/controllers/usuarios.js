// const Paciente = require("../models/Usuarios");
const pacientes = require("../models/Usuarios");


module.exports = {
    getAll:  async (req, res) => {
       const pacientes = await Paciente.findAll();


       res.json(pacientes);
    },
    getById: async (req, res) => {
const {params: {id}} = req;

        const paciente = await Paciente.findByPk();

        if (paciente) {
        return res.json(paciente);
    }

    res.statusCode = 404;
    res.json({message: 'paciente não encontrado'});
    
}, 
store: async (req, res) => {
    try{
          const {body: { nome,email, idade }} =  req;
          const novoPaciente = await Paciente.create({
            nome, 
            email,
            idade,
          });


          res,json(novoPaciente);
    } catch(error){
      console.log(error.message);
      res 
      .status(500)
      .json({error: "oops, erro"})
    }
},

}