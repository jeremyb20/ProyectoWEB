//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var EmpresaSchema = new mongoose.Schema({
  nombre: String,
  cedula: String,
  nombreContacto:String,
  emailContacto: String,
  telefonoContacto:String,
  industria: String,
  descripcion: String,
  estado:String,
  photo:String,
  bio:String


});

module.exports = mongoose.model('Empresa', EmpresaSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
//
