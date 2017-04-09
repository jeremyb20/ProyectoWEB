(function(){
  angular
    .module('myEnsamble')
    .controller('estudianteController',estudianteController);
    function estudianteController(estudianteService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var estudianteCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
      }init();

       estudianteCtrl.estudiante = estudianteService.getEstudiantes() ;
       var newEstudiante ={
        nombre : estudianteCtrl.nombre
       }
       estudianteService.setEstudiantes(newEstudiante);
       console.log(newEstudiante);


      }
     //se establece un objeto de angular normal

})();
