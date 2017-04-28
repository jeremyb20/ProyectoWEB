//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var ProfesorSchema = new mongoose.Schema({
  nombre : String,
  primerApellido : String,
  segundoApellido : String,
  email : {
    type: String,
    unique: true,
    required: true
  },
  estado : String,
  cursos : [String],
  especialidad : String,
  enfasis : [String],
  contrasenna : String
});

module.exports = mongoose.model('Profesor', ProfesorSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
//
