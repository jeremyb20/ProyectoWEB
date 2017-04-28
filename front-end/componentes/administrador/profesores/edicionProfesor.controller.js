(function(){
  angular
    .module('myEnsamble')
    .controller('edicionProfesorController', edicionProfesorController);
    function edicionProfesorController(administradorService, $scope, $mdDialog){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var edicionProfesorCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute

        administradorService.getCarreras()
          .success(function(data){
            edicionProfesorCtrl.carreras = data;
          });


        administradorService.getCursos()
          .success(function(data){
            edicionProfesorCtrl.cursos = data;

          });

        administradorService.getProfesores()
          .success(function(data){
            edicionProfesorCtrl.profesores = data;

          });


      }init();


      edicionProfesorCtrl.save = function (valido){

        if (valido) {

          var specials = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
          var lowercase = 'abcdefghijklmnopqrstuvwxyz';
          var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          var numbers = '0123456789';

          var all = specials + lowercase + uppercase + numbers;

          String.prototype.pick = function(min, max) {
              var n, chars = '';

              if (typeof max === 'undefined') {
                  n = min;
              } else {
                  n = min + Math.floor(Math.random() * (max - min));
              }

              for (var i = 0; i < n; i++) {
                  chars += this.charAt(Math.floor(Math.random() * this.length));
              }

              return chars;
          };


          // Credit to @Christoph: http://stackoverflow.com/a/962890/464744
          String.prototype.shuffle = function() {
              var array = this.split('');
              var tmp, current, top = array.length;

              if (top) while (--top) {
                  current = Math.floor(Math.random() * (top + 1));
                  tmp = array[current];
                  array[current] = array[top];
                  array[top] = tmp;
              }

              return array.join('');
          };

          var password = (specials.pick(2) + lowercase.pick(1) + uppercase.pick(1) + all.pick(3, 10)).shuffle();

          alert(password);

          var nuevoProfesor = {
            nombre : edicionProfesorCtrl.nombre,
            primerApellido : edicionProfesorCtrl.primerApellido,
            segundoApellido : edicionProfesorCtrl.segundoApellido,
            email : edicionProfesorCtrl.email,
            estado : 'Elegible',
            cursos : edicionProfesorCtrl.cursosSeleccionados,
            especialidad : edicionProfesorCtrl.especialidad,
            enfasis : edicionProfesorCtrl.enfasis,
            contrasenna : password
          }


           administradorService.setProfesores(nuevoProfesor)
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


    }

})();
