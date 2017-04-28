var express = require('express');
var	router = express.Router();
var empresasController = require('./empresa.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/empresas')
  .post(function(req, res){
    empresasController.save(req,res);
 	});

router.route('/empresas')
  .get(function(req, res){
    empresasController.findAll(req,res);
  });
router.route('/empresas/:id')
  .delete(function(req, res){
    empresasController.remove(req,res);
 });
router.route('/empresas')
  .put(function(req, res){
    empresasController.update(req,res);
 	});




// Se exporta el modulo
module.exports = router;