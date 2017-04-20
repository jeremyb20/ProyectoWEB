//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var CarreraSchema = new mongoose.Schema({
  codigoCarrera:{
    type: String,
    unique: true,
    required: true
  },
  nombre: String,
  nivel: String


});

module.exports = mongoose.model('Carrera', CarreraSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
//
