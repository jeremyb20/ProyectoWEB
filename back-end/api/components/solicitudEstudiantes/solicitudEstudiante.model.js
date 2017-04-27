//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var nuevoEstudianteSchema = new mongoose.Schema({
  nombreEstudiante: String,
  apellido1Estudiante: String,
  apellido2Estudiante: String,
  genero:String,
  emailEstudiante: String,
  nivelAcademico: String,
  carreraSeleccionada:String,
  cursoSeleccionado:String,
  foto:String,
  urlCurriculum:String
});

module.exports = mongoose.model('SolicitudEstudiante', nuevoEstudianteSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
//
