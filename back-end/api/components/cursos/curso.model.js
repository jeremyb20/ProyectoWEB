//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var CursoSchema = new mongoose.Schema({
  codigoCarrera: String,
  codigoCurso:{
    type: String,
    unique: true,
    required: true
  },
  nombre: String


});

module.exports = mongoose.model('Curso', CursoSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
//
