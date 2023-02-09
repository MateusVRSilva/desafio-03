const express = require("express");

const usuariosController = require("../controllers/usuarios");
// const usa = require("../models/Usuarios");

const router = express.Router();

router.get("/", usuariosController.getAll);
router.get("/:id", usuariosController.getById);
router.post("/", usuariosController.store);

module.exports = router; 