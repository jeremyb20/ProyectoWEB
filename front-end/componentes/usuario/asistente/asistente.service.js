(function(){
  angular
  .module('myEnsamble')
  .service('asistenteService', asistenteService);

  function asistenteService($http){
    var proyectos = [];
    var cambios =[];
    var publicAPI = {
      setProyectosRevision : _setProyectosRevision,
      getProyectosRevision : _getProyectosRevision,
      setPendiente : _setPendiente,
      getPendiente : _getPendiente,
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setProyectosRevision(pProyectos){ 
      return $http.post('http://localhost:8000/api/empresas', pProyectos);
    }

    function _getProyectosRevision(){
      return $http.get('http://localhost:8000/api/empresas');
    }
    function _setPendiente(pProyectoPendiente){
      console.log(pProyectoPendiente);
      var listaProyectos = _getProyectosRevision();
      for(var i = 0; i < listaProyectos.length;i++){
        if(listaProyectos[i].cedula === pProyectoPendiente.cedula){
          listaProyectos[i] = pProyectoPendiente;
        }
      }
      // localStorage.setItem('proyectosLS',JSON.stringify(listaProyectos));
      return $http.post('http://localhost:8000/api/proyectosPendientes', pProyectoPendiente);

    }
     function _getPendiente(){
      return $http.get('http://localhost:8000/api/proyectosPendientes');
    }
    



    
  }

})();