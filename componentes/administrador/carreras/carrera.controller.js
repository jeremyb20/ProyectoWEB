(function(){
  angular
    .module('myEnsamble')
    .controller('carreraController', carreraController);
    function carreraController(administradorService, $scope, $mdDialog){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var carreraCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        carreraCtrl.carreras = administradorService.getCarreras();
      }init();


      carreraCtrl.save = function (){
        var encontrarCursoIndex = administradorService.getCarreraCodigoIndex(carreraCtrl.codigoCarrera);

        if (encontrarCursoIndex == -1) {
          var nuevaCarrera = {
            codigoCarrera : carreraCtrl.codigoCarrera,
            nombre : carreraCtrl.nombre,
            nivel : carreraCtrl.nivel,
            cursos: [
              {}
            ]

          }

          $mdDialog.show(
            $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('La carrera ' + nuevaCarrera.nombre + ' ha sido agregada  exitósamente!')
            .textContent('')
            .ariaLabel('Left to right demo')
            .ok('OK')
          );

          administradorService.setCarreras(nuevaCarrera);

        }else {

          $mdDialog.show(
            $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('La carrera ya existe en el sistema!')
            .textContent('')
            .ariaLabel('Left to right demo')
            .ok('OK')
          );

        }

      }

      carreraCtrl.eliminarCarrera = function (pCodigoCarrera, ev){
        var eliminarCursoIndex = administradorService.getCarreraCodigoIndex(pCodigoCarrera),

            confirm = $mdDialog.confirm()
          .title('¿Está seguro de que desea eliminar la carrera seleccionada?')
          .textContent('')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Sí')
          .cancel('No');

          $mdDialog.show(confirm).then(function() {
            administradorService.eliminarCarrera(eliminarCursoIndex);
          });


      }

      carreraCtrl.asignar = function () {
        var carreraSeleccionada = administradorService.getCarreraID(carreraCtrl.carreraSeleccionadaCurso);
        administradorService.asignarCurso(carreraCtrl.nombreCurso, carreraSeleccionada);
      }

      carreraCtrl.eliminarCurso = function (){
        var carreraSeleccionada = administradorService.getCarreraID(carreraCtrl.carreraSeleccionadaEliminarCurso),
            cursoSeleccionado = administradorService.getCursoIndex(carreraCtrl.carreraSeleccionadaEliminarCurso, carreraCtrl.carreraEliminarCurso);
            alert(cursoSeleccionado);
            alert(carreraSeleccionada);
       administradorService.eliminarCurso(carreraSeleccionada, cursoSeleccionado);
      }
    }

})();
