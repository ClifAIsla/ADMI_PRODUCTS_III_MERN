const mongoose = require('mongoose');
const SchemaAutor = new mongoose.Schema({
    nameAutor : {type: String,
                required: [true,"El nombre del autor es obligatorio."],
                minlength: [3,"El nombre del autor debe de tener al menos 3 caracteres."]}
})
const Autor = mongoose.model('autores',SchemaAutor);
module.exports = Autor;