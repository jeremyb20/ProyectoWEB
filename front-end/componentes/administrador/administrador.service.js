(function(){
  angular
  .module('myEnsamble')
  .service('administradorService', administradorService);

  function administradorService(inicioSesionService,$http){
    var carreras = [
      {
        nombre : 'Diseño y Desarrollo Web',
        codigoCarrera : 'WEBTEC',
        nivel : 'Técnico'
      },
      {
        nombre : 'Telemática',
        codigoCarrera : 'TELTEC',
        nivel : 'Técnico'
      }
    ];

    var cursos = [
      {
        codigoCarrera : 'WEBTEC',
        codigoCurso : 'WEBTEC-01',
        nombre : 'Fundamentos de Programación Web'
      },
      {
        codigoCarrera : 'WEBTEC',
        codigoCurso : 'WEBTEC-02',
        nombre : 'Diseño Web I'
      },
      {
        codigoCarrera : 'WEBTEC',
        codigoCurso : 'WEBTEC-03',
        nombre : 'Diseño Web II'
      },
      {
        codigoCarrera : 'TELTEC',
        codigoCurso : 'TELTEC-01',
        nombre : 'Redes I'
      },
      {
        codigoCarrera : 'TELTEC',
        codigoCurso : 'TELTEC-02',
        nombre : 'Redes II'
      }
    ]


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
      getId : _getId,
      setId : _setId,
      getCarreraCodigoIndex : _getCarreraCodigoIndex,
      getCursoCodigoIndex : _getCursoCodigoIndex,
      eliminarCarrera : _eliminarCarrera,
      eliminarCurso : _eliminarCurso,
      setProfesores : _setProfesores,
      getProfesores : _getProfesores
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones



    function _setCarreras(pCarrera){
      //users.push(pUser);
      return $http.post('http://localhost:8000/api/carreras', pCarrera);

    }

    function _setCursos(pCurso){
      cursos.push(pCurso);
    }

    function _getCarreras(){
      return $http.get('http://localhost:8000/api/carreras');
    }

    function _getCursos() {
      return cursos;
    }

    function _getId(){
      var id = Number(localStorage.getItem('id'));
      if(id==null){
        id = 0;
      }else{
        id++;
      }
      return id;
    }

    function _setId(pid){
      localStorage.setItem('id', pid);

    }


    function _getCarreraCodigoIndex(pCodigoCarrera) {
      var carreraIndex = -1;
      for (var i = 0; i < carreras.length; i++) {
        if (pCodigoCarrera.toLowerCase() == carreras[i].codigoCarrera.toLowerCase() ) {
          carreraIndex = i;
        }
      }
      return carreraIndex;
    }

    function _getCursoCodigoIndex(pCodigoCurso) {
      var cursoIndex = -1;
      for (var i = 0; i < cursos.length; i++) {
        if (pCodigoCurso.toLowerCase() == cursos[i].codigoCurso.toLowerCase() ) {
          cursoIndex = i;
        }
      }
      return cursoIndex;
    }

    function _eliminarCarrera(id) {
      return $http.delete('http://localhost:8000/api/carreras/' + id);
    }

    function _eliminarCurso(pCurso) {
      cursos.splice(pCurso, 1);
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
