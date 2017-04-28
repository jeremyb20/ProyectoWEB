(function(){
  angular
  .module('myEnsamble')
  .service('administradorService', administradorService);

  function administradorService(inicioSesionService,$http){



    var profesores = [
      {
        nombre : 'Pablo Monestel',
        correo : 'pmonestel@ucenfotec.ac.cr',
        contrasenna : 'Pmonestel@',
        tipo : 'profesor'
      }
    ];

    var publicAPI = {
      setCarreras : _setCarreras,
      setCursos : _setCursos,
      getCarreras : _getCarreras,
      getCursos : _getCursos,
      eliminarCarrera : _eliminarCarrera,
      eliminarCurso : _eliminarCurso,
      setProfesores : _setProfesores,
      getProfesores : _getProfesores,
      getSolicitudEstud : _getSolicitudEstud
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _getSolicitudEstud(){
      return $http.get('http://localhost:8000/api/solicitudEstudiantes');
    }

    function _setCarreras(pCarrera){
      //users.push(pUser);
      return $http.post('http://localhost:8000/api/carreras', pCarrera);

    }

    function _setCursos(pCurso){
      return $http.post('http://localhost:8000/api/cursos', pCurso);
    }

    function _getCarreras(){
      return $http.get('http://localhost:8000/api/carreras');
    }

    function _getCursos() {
      return $http.get('http://localhost:8000/api/cursos');
    }

    function _eliminarCarrera(id) {
      return $http.delete('http://localhost:8000/api/carreras/' + id);
    }

    function _eliminarCurso(id) {
      return $http.delete('http://localhost:8000/api/cursos/' + id);
    }



    function _setProfesores(pProfesor) {
      preofesores = _getProfesores();
      preofesores.push(pProfesor);
      localStorage.setItem('profesoreslLS',JSON.stringify(preofesores));
      // profesores.push(pProfesor);
      // usuarios.push(pProfesor);
    }

    function _getProfesores() {
      var profesores = [];
      if(localStorage.getItem('profesoreslLS') == null){
        profesores = [];
      }else{
        profesores = JSON.parse(localStorage.getItem('profesoreslLS'));
      }
      return profesores;
    }

  }

})();
