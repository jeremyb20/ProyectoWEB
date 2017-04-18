//Requerimos el modelo  de usuarios
var Carrera = require('./carrera.model.js');
var config = require('../../config/database');


module.exports.save = function(req,res){ //exporta el controlador



        var nuevaCarrera = new Carrera({
          codigoCarrera:req.body.codigoCarrera,
          nombre:req.body.nombre,
          nivel:req.body.nivel
        });

        nuevaCarrera.save(function(err){
          if(err){
            res.json({success:false,msg:'El correo electrónico ya existe.'});
          }else {
            res.json({success:true,msg:'Se ha registrado correctamente.'});
          }
        });



}

module.exports.findAll = function(req,res){
  Carrera.find().then(function(carreras){
    res.send(carreras);
  });
};
//
// module.exports.remove = function(req,res){
//   console.log(req.body.id);
//   User.findByIdAndRemove({_id:req.body.id}).then(function(data){
//     res.json({success:true,msg:'Se ha eliminado correctamente.'});
//   });
//
// }
// module.exports.update = function(req,res){
//   console.log(req.body.id);
//   User.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
//     res.json({success:true,msg:'Se ha actualizado correctamente.'});
//   });
//
// }
