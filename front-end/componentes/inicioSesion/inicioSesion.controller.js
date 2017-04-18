(function(){
  angular
    .module('myEnsamble')
    .controller('inicioSesionController', inicioSesionController);
    function inicioSesionController(inicioSesionService,$state, $scope,administradorService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var inicioSesionCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute

      }init();

      inicioSesionCtrl.profesores = administradorService.getProfesores();
      inicioSesionCtrl.inicioSesion = function(){


        if (inicioSesionCtrl.correo != null && inicioSesionCtrl.contrasenna != null) {
          var nuevoInicio = {
            correo : inicioSesionCtrl.correo,
            contrasenna : inicioSesionCtrl.contrasenna
          }
        }else {
          alert('Favor llenar los espacios en blanco');
        }

      var usuario = inicioSesionService.inicioSesionUsuario(nuevoInicio);

      if (usuario == 'administrador') {
        $state.go('administrador');
      }else if (usuario == 'profesor') {
        $state.go('profesorPerfil');
      }else if (usuario == 'estudiante') {
        $state.go('estudiantePerfil');
      }else if (usuario == 'asistente') {
        $state.go('asistente');
      }

      }
    }
     //se establece un objeto de angular normal

})();
