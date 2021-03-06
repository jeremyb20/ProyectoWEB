(function(){
  angular
  .module('myEnsamble')
  .service('estudianteService', estudianteService);

  function estudianteService(){
    var estudiantes = [];
    var publicAPI = {
      setEstudiantes : _setEstudiantes,
      getEstudiantes : _getEstudiantes
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setEstudiantes(pEstudiantes){
      estudiantes.push(pEstudiantes);
    }
    function _getEstudiantes(){
      return estudiantes;
    }
  }

})();
