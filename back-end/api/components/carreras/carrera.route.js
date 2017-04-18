var express = require('express');
var	router = express.Router();
var carreraController = require('./carrera.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/carreras')
  .post(function(req, res){
    carreraController.save(req,res);
 	});

router.route('/carreras')
  .get(function(req, res){
    carreraController.findAll(req,res);
  });
// router.route('/carreras/:id')
//   .delete(function(req, res){
//     carreraController.remove(req,res);
//  	});
// router.route('/carreras')
//   .put(function(req, res){
//     carreraController.update(req,res);
//  	});




// Se exporta el modulo
module.exports = router;
