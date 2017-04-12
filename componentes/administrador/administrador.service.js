(function(){
  angular
  .module('myEnsamble')
  .service('administradorService', administradorService);

  function administradorService(inicioSesionService){
    var carreras = [
    {
        nombre : 'Diseño y Desarrollo Web',
        codigoCarrera : 'WEBTEC',
        nivel : 'Técnico',
      cursos:
      [
        {
         codigoCurso : 'WEBTEC-01',
         curso : 'Fundamentos de Programación Web'
        },

        {
         codigoCurso : 'WEBTEC-02',
         curso :'Diseño Web I'
        },

        {
         codigoCurso : 'WEBTEC-03',
         curso :'Diseño Web II'
        }

      ]
    },
      {
        nombre : 'Telemática',
        codigoCarrera : 'TELTEC',
        nivel : 'Técnico',
        cursos : [
          {
           codigoCurso : 'TELTEC-01',
           curso : 'Redes I'
          },
          {
           codigoCurso : 'TELTEC-02',
           curso : 'Redes II'
          }
         ]
      }
    ];


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
      getCarreras : _getCarreras,
      getCarreraCodigoIndex : _getCarreraCodigoIndex,
      eliminarCarrera : _eliminarCarrera,
      asignarCurso : _asignarCurso,
      eliminarCurso : _eliminarCurso,
      getCursoCodigoIndex : _getCursoCodigoIndex,
      setProfesores : _setProfesores,
      getProfesores : _getProfesores
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setCarreras(pCarrera){
      carreras.push(pCarrera);
    }

    function _getCarreras(){
      return carreras;
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
      for (var i = 0; i < carreras.length; i++) {
        for (var y = 0; y < carreras[i].cursos.length; y++) {
          if (pCodigoCurso.toLowerCase() == carreras[i].cursos[y].codigoCurso.toLowerCase()) {
            cursoIndex = y;
          }

        }
      }
      return cursoIndex;
    }

    function _eliminarCarrera(pCarrera) {
      carreras.splice(pCarrera, 1);
    }

    function _asignarCurso(pNuevoCurso, pCarrera) {

      carreras[Number(pCarrera)].cursos.push({codigoCurso:pNuevoCurso.codigo, curso:pNuevoCurso.nombre});
    }

    function _eliminarCurso(pCarrera, pCurso) {
      carreras[Number(pCarrera)].cursos.splice(Number(pCurso), 1);
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
