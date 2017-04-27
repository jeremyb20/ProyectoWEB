var express = require('express');
var	router = express.Router();
var solicitudEstudianteController = require('./solicitudEstudiante.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/solicitudEstudiantes')
  .post(function(req, res){
    solicitudEstudianteController.save(req,res);
 	});

router.route('/solicitudEstudiantes')
  .get(function(req, res){
    solicitudEstudianteController.findAll(req,res);
  });
router.route('/solicitudEstudiantes/:id')
  .delete(function(req, res){
    solicitudEstudianteController.remove(req,res);
 	});



// Se exporta el modulo
module.exports = router;
