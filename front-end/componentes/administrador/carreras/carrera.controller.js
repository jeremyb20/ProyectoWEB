(function(){
  angular
    .module('myEnsamble')
    .controller('carreraController', carreraController);
    function carreraController(administradorService, $scope, $mdDialog){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var carreraCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute

        administradorService.getCarreras()
          .success(function(data){
            carreraCtrl.carreras = data;

          });

      }init();


      carreraCtrl.save = function (valido){

        if (valido) {
            var nuevaCarrera = {
              codigoCarrera : carreraCtrl.codigoCarrera.toUpperCase(),
              nombre : carreraCtrl.nombre,
              nivel : carreraCtrl.nivel
            }

            administradorService.setCarreras(nuevaCarrera)
            .success(function(data){
              console.log(data);

              $mdDialog.show(
                $mdDialog.alert()
                .clickOutsideToClose(true)
                .title(data.msg)
                .textContent('')
                .ariaLabel('Left to right demo')
                .ok('OK')
              );

            carreraCtrl.codigoCarrera = '';
            carreraCtrl.nombre = '';
            carreraCtrl.nivel = '';
            init();

        })










          }else {

            $mdDialog.show(
              $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('¡Por favor complete los campos requeridos!')
              .textContent('')
              .ariaLabel('Left to right demo')
              .ok('OK')
            );

          }

        }
      carreraCtrl.eliminarCarrera = function (id, ev){


            confirm = $mdDialog.confirm()
          .title('¿Está seguro de que desea eliminar la carrera seleccionada?')
          .textContent('')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Sí')
          .cancel('No');

          $mdDialog.show(confirm).then(function() {
            administradorService.eliminarCarrera(id)
            .success(function(data){
              init();
            })

            $mdDialog.show(
              $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('¡La carrera fue eliminada del sistema!')
              .textContent('')
              .ariaLabel('Left to right demo')
              .ok('OK')
            );
          });


      }

    }

})();
