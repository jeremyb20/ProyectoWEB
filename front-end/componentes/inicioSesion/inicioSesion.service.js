(function(){
  angular
  .module('myEnsamble')
  .service('inicioSesionService', inicioSesionService);

  function inicioSesionService(){
    var  usuarios = [
          {
            nombre : 'Administrador',
            correo : 'admincsh@ucenfotec.ac.cr',
            contrasenna : 'Admin2@17',
            tipo : 'administrador'
          },
          {
            nombre : 'Pablo Monestel',
            correo : 'pmonestel@ucenfotec.ac.cr',
            contrasenna : 'Pmonestel@',
            tipo : 'profesor'
          },
          {
            nombre : 'Alexander Gomez',
            correo : 'agomez@ucenfotec.ac.cr',
            contrasenna : 'Agomez1@',
            tipo : 'estudiante'
          },
          {
            nombre : 'Beatriz Trujillo',
            correo : 'btrujillo@ucenfotec.ac.cr',
            contrasenna : 'Asistente1@',
            tipo : 'asistente'
          }
        ];
    var publicAPI = {
      inicioSesionUsuario : _inicioSesionUsuario,
      setUsuarios : _setUsuarios,
      getUsuarios : _getUsuarios

    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _inicioSesionUsuario(aUsuario){

      var usuarioValido = false.
          tipoUsuario = '';

      for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].correo == aUsuario.correo && usuarios[i].contrasenna == aUsuario.contrasenna) {
          if (usuarios[i].tipo == 'administrador') {
            usuarioValido = true;
            tipoUsuario = usuarios[i].tipo;
          }else if (usuarios[i].tipo == 'estudiante') {
            usuarioValido = true;
            tipoUsuario = usuarios[i].tipo;
          }else if (usuarios[i].tipo == 'asistente') {
            usuarioValido = true;
            tipoUsuario = usuarios[i].tipo;
          }else if (usuarios[i].tipo == 'profesor') {
            usuarioValido = true;
            tipoUsuario = usuarios[i].tipo;
          }
        }
      }

      if (usuarioValido == true) {
        return tipoUsuario;
        alert(tipoUsuario);
      }else {
        alert('Usuario No existe');
      }


    }

    function _setUsuarios(pProfesor){
      usuarios.push(pProfesor);
      alert('Profesor Agregado remotamente');
    }

    function _getUsuarios() {
      return usuarios;
    }






  }
})();
