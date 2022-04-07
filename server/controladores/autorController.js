const { response, request } = require('express');
const Autor = require('./../modelos/autorModel');

//METODOS
const createAutor = (request,response) => {
    const {nameAutor} = request.body;
    const nuevoAutor = {nameAutor};

    Autor.create(nuevoAutor)
        .then( newAutor => {
            return response.status(201).json(newAutor);
        })
        .catch( err => {
            return response.status(400).json(err);
        })
}

const getAllAutores = (request,response) => {
    Autor.find()
        .then( all => {
            return response.status(200).json(all);
        })
        .catch( err => {
            return response.status(400).end();
        })
}

const updateAutor = (request,response) => {
    
    const {nameAutor} = request.body;
    const {id} = request.params;
    const autorActualizar = {nameAutor};

    Autor.findByIdAndUpdate( id, {$set : autorActualizar},{new:true})
        .then( updateOne => {
            return response.status(202).json(updateOne);
        })
        .catch( err => {
            return response.status(400).json(err);
        })
}

const deleteAutor = (request,response) => {
    const {id} = request.params;

    Autor.findByIdAndDelete(id)
        .then(deleteOne =>{
            return response.status(204).json(deleteOne);
        })
        .catch( err => {
            return response.status(404).end();
        })
}

const getAutor = (request,response) => {
    const {id} = request.params;
    Autor.findById(id)
        .then( oneAutor => {
            return response.status(200).json(oneAutor);
        })
        .catch( err => {
            return response.status(404).end();
        })
}

const ControladorAutor = {
    createAutor,
    getAllAutores,
    updateAutor,
    deleteAutor,
    getAutor
}
module.exports = ControladorAutor;