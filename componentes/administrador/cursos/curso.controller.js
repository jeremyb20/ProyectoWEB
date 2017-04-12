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

      cursoCtrl.save = function (valid){

        if (valid) {

          var encontrarCurso = administradorService.getCursoCodigoIndex(cursoCtrl.codigo);


          if (encontrarCurso == -1) {
            var nuevoCurso = {
              codigo : cursoCtrl.codigo.toUpperCase(),
              nombre : cursoCtrl.nombre
            }

           administradorService.asignarCurso(nuevoCurso, cursoCtrl.carrera);

           $mdDialog.show(
             $mdDialog.alert()
             .clickOutsideToClose(true)
             .title('¡El curso ' + nuevoCurso.nombre + ' ha sido agregado  exitósamente!')
             .textContent('')
             .ariaLabel('Left to right demo')
             .ok('OK')
           );

          }else {

            $mdDialog.show(
              $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('¡El curso ya existe en el sistema!')
              .textContent('')
              .ariaLabel('Left to right demo')
              .ok('OK')
            );

          }

        }else {
          $mdDialog.show(
            $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('¡Por favor complete los espacios requeridos!')
            .textContent('')
            .ariaLabel('Left to right demo')
            .ok('OK')
          );
        }





      }

      cursoCtrl.eliminar = function (pCarrera, pCurso, ev) {

        confirm = $mdDialog.confirm()
      .title('¿Está seguro de que desea eliminar el curso seleccionado?')
      .textContent('')
      .ariaLabel('Lucky day')
      .targetEvent(ev)
      .ok('Sí')
      .cancel('No');

      $mdDialog.show(confirm).then(function() {
        administradorService.eliminarCurso(pCarrera, pCurso);

        $mdDialog.show(
          $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('¡El curso fue eliminado del sistema!')
          .textContent('')
          .ariaLabel('Left to right demo')
          .ok('OK')
        );
      });



      }



    }

})();
