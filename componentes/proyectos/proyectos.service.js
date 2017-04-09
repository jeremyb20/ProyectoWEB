(function(){
  angular
  .module('myEnsamble')
  .service('proyectosService', proyectosService);

  function proyectosService(){
    var proyectos = [];
    var cambios =[];
    var personal =[];
    var publicAPI = {
      setProyectos : _setProyectos,
      getProyectos : _getProyectos,
      setAceptado : _setAceptado,
      setRechazado : _setRechazado,
      setCambios : _setCambios,
      setPersonal : _setPersonal,
      getPersonal : _getPersonal,
      getCambios : _getCambios
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setProyectos(pProyectos){
      proyectos = _getProyectos();
      proyectos.push(pProyectos);
      localStorage.setItem('proyectosLS',JSON.stringify(proyectos)); 
    }

    function _getProyectos(){
      var listaProy = [];
      if(localStorage.getItem('proyectosLS') == null){
        listaProy = [];
      }else{
        listaProy = JSON.parse(localStorage.getItem('proyectosLS'));
      }
      return listaProy;
    }
    function _setAceptado(pProyectoAceptado){
      console.log(pProyectoAceptado);
      var listaProyectos = _getProyectos();
      for(var i = 0; i < listaProyectos.length;i++){
        if(listaProyectos[i].cedula === pProyectoAceptado.cedula){
          listaProyectos[i] = pProyectoAceptado;
        }
      }
      localStorage.setItem('proyectosLS',JSON.stringify(listaProyectos));
    }
    function _setRechazado(pProyectoRechazado){
      console.log(pProyectoRechazado);
      var listaProyectos = _getProyectos();
      for(var i = 0; i < listaProyectos.length;i++){
        if(listaProyectos[i].cedula == pProyectoRechazado.cedula){
          listaProyectos[i] = pProyectoRechazado;

        }
      }
      localStorage.setItem('proyectosLS',JSON.stringify(listaProyectos));
    }

    function _setCambios(pproyectoConCambios){
      var proyectos = _getProyectos();
      for(var i=0;i<proyectos.length;i++){
        if(proyectos[i].cedula == pproyectoConCambios.cedula){
          proyectos[i] = pproyectoConCambios;
          
        }
      }
      localStorage.setItem('proyectosLS',JSON.stringify(proyectos));
      //cambios.push(pCambios);
      //alert('Cambios añadidos a la bitacora');
      //localStorage.setItem('cambiosLs',JSON.stringify(cambios));
    }

    function _getCambios(){
      var cambios = [];
      if(localStorage.getItem('cambiosLs') == null){
        cambios = [];
      }else{
        cambios = JSON.parse(localStorage.getItem('cambiosLs'));
      }
      return cambios;
    }


    function _setPersonal(pPersonal){
      personal = _getPersonal();
      personal.push(pPersonal);
      localStorage.setItem('personalLS',JSON.stringify(personal)); 

    }
    function _getPersonal(){
      var listaPersonal = [];
      if(localStorage.getItem('personalLS') == null){
        listaPersonal = [];
      }else{
        listaPersonal = JSON.parse(localStorage.getItem('personalLS'));
      }
      return listaPersonal;
    }



    
  }

})();