//Requerimos el modelo  de usuarios
var Empresa = require('./empresa.model.js');
var config = require('../../config/database');


module.exports.save = function(req,res){ //exporta el controlador
    var nuevaEmpresa = new Empresa({
      nombre:req.body.nombre,
      cedula:req.body.cedula,
      nombreContacto:req.body.nombreContacto,
      emailContacto:req.body.emailContacto,
      telefonoContacto:req.body.telefonoContacto,
      industria:req.body.industria,
      descripcion:req.body.descripcion,
      estado:req.body.estado,
      photo:req.body.photo,
      bio:req.body.bio
    });

    nuevaEmpresa.save(function(err){
      if(err){
        res.json({success:false,msg:'La empresa ya existe en el sistema.'});
      }else {
        res.json({success:true,msg:'Gracias por enviar la solicitud. Pronto nos pondremos en contacto'});
      }
    });
}
    //Extraer datos
    module.exports.findAll = function(req, res){
      Empresa.find().then(function(empresas){
        res.send(empresas);
      });
    };



