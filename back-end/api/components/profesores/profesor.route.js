var express = require('express');
var	router = express.Router();
var profesorController = require('./profesor.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/profesores')
  .post(function(req, res){
    profesorController.save(req,res);
 	});

router.route('/profesores')
  .get(function(req, res){
    profesorController.findAll(req,res);
  });
// router.route('/profesores/:id')
//   .delete(function(req, res){
//     profesorController.remove(req,res);
//  	});
// router.route('/profesores')
//   .put(function(req, res){
//     profesorController.update(req,res);
//  	});




// Se exporta el modulo
module.exports = router;
