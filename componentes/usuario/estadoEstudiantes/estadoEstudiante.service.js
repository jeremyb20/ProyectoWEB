(function(){
  angular
  .module('myEnsamble')
  .service('estadoEstudianteService', estadoEstudianteService);

  function estadoEstudianteService(){
    var estadoEstudiante = [];
    var publicAPI = {
      setEstadoEstudiante : _setEstadoEstudiante,
      getEstadoEstudiante : _getEstadoEstudiante,
      setSolicitudAceptado : _setSolicitudAceptado,
      setSolicitudRechazado : _setSolicitudRechazado
      // setSolicitudVetado : _setSolicitudVetado
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setEstadoEstudiante(pEstadoEstudiante){
      estadoEstudiante = _getEstadoEstudiante();
      estadoEstudiante.push(pEstadoEstudiante);
      localStorage.setItem('mEstadoEstudianteLocal',JSON.stringify(estadoEstudiante));
    }

    function _getEstadoEstudiante(){
      var listarEstadoEstudiantes = [];
      if (localStorage.getItem('mEstadoEstudianteLocal') == null) {
        listarEstadoEstudiantes = [];
      }else{
        listarEstadoEstudiantes = JSON.parse(localStorage.getItem('mEstadoEstudianteLocal'));
      }
      return listarEstadoEstudiantes;
    }

    function _setSolicitudAceptado(pEstudianteAceptado){
      console.log(pEstudianteAceptado);
      var listarEstadoEstudiantes = _getEstadoEstudiante();
      for(var i = 0; i < listarEstadoEstudiantes.length;i++){
        if(listarEstadoEstudiantes[i].emailEstudiante === pEstudianteAceptado.emailEstudiante){
          listarEstadoEstudiantes[i] = pEstudianteAceptado;
        }
      }
      localStorage.setItem('mEstadoEstudianteLocal',JSON.stringify(listarEstadoEstudiantes));
    }

    function _setSolicitudRechazado(pEstudianteRechazado){
      console.log(pEstudianteRechazado);
      var listarEstadoEstudiantes = _getEstadoEstudiante();
      for (var i = 0; i < listarEstadoEstudiantes.length; i++) {
        if (listarEstadoEstudiantes[i].emailEstudiante == pEstudianteRechazado.emailEstudiante) {
          listarEstadoEstudiantes[i] = pEstudianteRechazado;
        }
      }
      localStorage.setItem('mEstadoEstudianteLocal',JSON.stringify(listarEstadoEstudiantes));
    }

    // function  _setSolicitudVetado(pEstudianteVetado){
    //   var listarEstadoEstudiantes = _getEstadoEstudiante();
    //   for (var i = 0; i < listarEstadoEstudiantes.length; i++) {
    //     if (listarEstadoEstudiantes[i].emailEstudiante == pEstudianteVetado.emailEstudiante) {
    //       listarEstadoEstudiantes[i] = pEstudianteVetado;
    //     }
    //   }
    //     localStorage.setItem('mEstadoEstudianteLocal',JSON.stringify(listarEstadoEstudiantes));
    // }

    // function _setCambios(pproyectoConCambios){
    //   var proyectos = _getProyectos();
    //   for(var i=0;i<proyectos.length;i++){
    //     if(proyectos[i].cedula == pproyectoConCambios.cedula){
    //       proyectos[i] = pproyectoConCambios;
          
    //     }
    //   }
    //   localStorage.setItem('proyectosLS',JSON.stringify(proyectos));
    //   //cambios.push(pCambios);
    //   //alert('Cambios añadidos a la bitacora');
    //   //localStorage.setItem('cambiosLs',JSON.stringify(cambios));
    // }

    // function _getCambios(){
    //   var cambios = [];
    //   if(localStorage.getItem('cambiosLs') == null){
    //     cambios = [];
    //   }else{
    //     cambios = JSON.parse(localStorage.getItem('cambiosLs'));
    //   }
    //   return cambios;
    // }


  }

})();
