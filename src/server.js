const express = require("express");

const database = require("./services/database")

const mainRoutes = require("./routes/index");
const usuariosRoutes = require("./routes/usuarios");



const server = express();


server.use("/", mainRoutes);

server.use("/usuarios", usuariosRoutes);

server.use(express.json())

try {

   database.authenticate();

  server.listen(3000 , ()=> 
console.log("Servidor rodando na porta 3000")
);
  
}catch (error) {
  console.error('conectado', error);
}





