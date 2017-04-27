//Requerimos el modelo  de usuarios
var SolicitudEstudiante = require('./solicitudEstudiante.model.js');
var config = require('../../config/database');


module.exports.save = function(req,res){ //exporta el controlador



        var nuevoEstudiante = new SolicitudEstudiante({
          nombreEstudiante:req.body.nombreEstudiante,
          apellido1Estudiante:req.body.apellido1Estudiante,
          apellido2Estudiante:req.body.apellido2Estudiante,
          genero:req.body.genero,
          emailEstudiante:req.body.emailEstudiante,
          nivelAcademico:req.body.nivelAcademico,
          carreraSeleccionada:req.body.carreraSeleccionada,
          cursoSeleccionado:req.body.cursoSeleccionado,
          foto:req.body.foto,
          urlCurriculum:req.body.urlCurriculum
        }); 


        nuevoEstudiante.save(function(err){
          if(err){
            res.json({success:false,msg:'La solicitud de estudiante ya existe en la aplicación'});
          }else {
            res.json({success:true,msg:'La solicitud de estudiante ' + nuevoEstudiante.nombreEstudiante +' se ha registrado correctamente.'});
          }
        });

}

module.exports.findAll = function(req,res){
  SolicitudEstudiante.find().then(function(solicitudEstudiantes){
    res.send(solicitudEstudiantes);
  });
};
//
module.exports.remove = function(req,res){
  console.log(req.body.id);
   SolicitudEstudiante.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}
// module.exports.update = function(req,res){
//   console.log(req.body.id);
//   User.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
//     res.json({success:true,msg:'Se ha actualizado correctamente.'});
//   });
//
// }
