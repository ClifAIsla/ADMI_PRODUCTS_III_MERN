const express = require('express');

const AutorRouter = express.Router();
const ControladorAutor = require('./../controladores/autorController');

//RUTAS QUE SE CONECTAN CON LA BASE DE DATO AUTORES
AutorRouter.post('/newAutor',ControladorAutor.createAutor);
AutorRouter.get('/allAutores',ControladorAutor.getAllAutores);
AutorRouter.get('/autor/:id',ControladorAutor.getAutor);
AutorRouter.put('/autor/:id', ControladorAutor.updateAutor);
AutorRouter.delete('/autor/:id',ControladorAutor.deleteAutor);

module.exports = AutorRouter;