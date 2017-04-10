(function(){
  angular
    .module('myEnsamble')
    .controller('cursoController', cursoController);
    function cursoController(administradorService, $scope, $mdDialog){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var cursoCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        cursoCtrl.carreras = administradorService.getCarreras();
      }init();

      cursoCtrl.save = function (){

          var nuevoCurso = {
            codigo : cursoCtrl.codigo,
            nombre : cursoCtrl.nombre
          }


          administradorService.asignarCurso(nuevoCurso, cursoCtrl.carrera);

      }



    }

})();
