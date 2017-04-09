(function(){
  angular
    .module('myEnsamble')
    .controller('solicitudEstudianteController',solicitudEstudianteController);
    function solicitudEstudianteController(solicitudEstudianteService,estadoEstudianteService,administradorService,$state){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var solicitudEstudianteCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        solicitudEstudianteCtrl.solicitudEstudiante = solicitudEstudianteService.getSolicitudEstudiantes();
        solicitudEstudianteCtrl.carreras = administradorService.getCarreras();
        // solicitudEstudianteCtrl.solicitudEstudiante = estadoEstudianteService.getSolicitudEstudiantes();
      }init();

    solicitudEstudianteCtrl.save = function (){
    if (solicitudEstudianteCtrl.nombreEstudiante != null && solicitudEstudianteCtrl.apellido1Estudiante != null && solicitudEstudianteCtrl.apellido2Estudiante != null && solicitudEstudianteCtrl.genero != null && solicitudEstudianteCtrl.emailEstudiante != null && solicitudEstudianteCtrl.carreraSeleccionada != null && solicitudEstudianteCtrl.cursoSeleccionado != null ) {
          var newProyecto = {
              nombreEstudiante: solicitudEstudianteCtrl.nombreEstudiante,
              apellido1Estudiante: solicitudEstudianteCtrl.apellido1Estudiante,
              apellido2Estudiante: solicitudEstudianteCtrl.apellido2Estudiante,
              genero: solicitudEstudianteCtrl.genero,
              emailEstudiante: solicitudEstudianteCtrl.emailEstudiante,
              carreraSeleccionada: solicitudEstudianteCtrl.carreraSeleccionada,
              cursoSeleccionado: solicitudEstudianteCtrl.cursoSeleccionado,
              estado : 'pendiente',
              bitacoras:[],
              id: 0
            }
            estadoEstudianteService.setEstadoEstudiante(newProyecto);
            // asistenteService.setEstadoEstudiante(newProyecto);
            alert('Gracias por la información prontos nos pondrémos en contacto');
            $state.go('inicio');
               nombre: solicitudEstudianteCtrl.nombre = '';
               cedula: solicitudEstudianteCtrl.cedula = '';
               nombreContacto: solicitudEstudianteCtrl.nombreContacto = '';
               emailContacto: solicitudEstudianteCtrl.emailContacto = '';
               telefonoContacto: solicitudEstudianteCtrl.telefonoContacto = '';
               descripcion: solicitudEstudianteCtrl.descripcion = '';
               industria: solicitudEstudianteCtrl.industria = '';
          }else{
            alert('Favor llenar los espacios en blanco ');
          }
       
      }


  }

})();

//solicitudEstudianteCtrl.cursos != null && solicitudEstudianteCtrl.carreras != null
