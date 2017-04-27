(function(){
  angular
    .module('myEnsamble')
    .controller('estadoEstudianteController', estadoEstudianteController);
    function estadoEstudianteController(administradorService,$scope, $mdDialog){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var estadoEstudianteCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
       //estadoEstudianteCtrl.estadoEstudiantes = administradorService.getEstadoEstudiante();
     //  estadoEstudianteCtrl.cambiosEstadoEstudiantes = administradorService.getCambiosEstadoEstudiantes();
       solicitudEstudianteService.getSolicitudEstudiantes().success(function(data){estadoEstudianteCtrl.solicitudEstudiantes = data; });
      }init();

      estadoEstudianteCtrl.solicitudEstudiantes =

      estadoEstudianteCtrl.aceptar = function(pobjEstado){
        pobjEstado.estado = 'aceptado';
        administradorService.setSolicitudEstudianteAceptado(pobjEstado);
      }
      estadoEstudianteCtrl.rechazado = function(pobjEstado){
        pobjEstado.estado = 'rechazado';
        administradorService.setSolicitudEstudianteRechazado(pobjEstado);
      }
      
     //se establece un objeto de angular normal
       }
})();

