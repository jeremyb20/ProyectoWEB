//Requerimos el modelo  de usuarios
var Profesor = require('./profesor.model.js');
var config = require('../../config/database');


module.exports.save = function(req,res){ //exporta el controlador



        var nuevoProfesor = new Profesor({
          nombre : req.body.nombre,
          primerApellido : req.body.primerApellido,
          segundoApellido : req.body.segundoApellido,
          email : req.body.email,
          estado : req.body.estado,
          cursos : req.body.cursos,
          especialidad : req.body.especialidad,
          enfasis : req.body.enfasis,
          contrasenna : req.body.contrasenna

        });

        nuevoProfesor.save(function(err){
          if(err){
            res.json({success:false,msg:'El profesor ya existe en el sistema.'});
          }else {
            res.json({success:true,msg:'Nuevo profesor se ha registrado correctamente.'});
          }
        });



}

module.exports.findAll = function(req,res){
  Profesor.find().then(function(profesores){
    res.send(profesores);
  });
};
//
module.exports.remove = function(req,res){
  console.log(req.body.id);
  Profesor.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Profesor se ha eliminado correctamente.'});
  });

}
// module.exports.update = function(req,res){
//   console.log(req.body.id);
//   User.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
//     res.json({success:true,msg:'Se ha actualizado correctamente.'});
//   });
//
// }
