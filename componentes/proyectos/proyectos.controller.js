(function(){
  angular
    .module('myEnsamble')
    .controller('proyectosController', proyectosController);
    function proyectosController(proyectosService,administradorService,estadoEstudianteService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var proyectosCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
       proyectosCtrl.proyectos = proyectosService.getProyectos();
       proyectosCtrl.cambios = proyectosService.getCambios();
       // proyectosCtrl.personal = proyectosService.getPersonal();
       proyectosCtrl.profesores = administradorService.getProfesores();
       proyectosCtrl.estudiantes = estadoEstudianteService.getEstadoEstudiante();

      }init();

      proyectosCtrl.save = function (){
        var newProyectos = {
          nombre: proyectosCtrl.nombre,
          cedula: proyectosCtrl.cedula,
          nombreContacto: proyectosCtrl.nombreContacto,
          emailContacto: proyectosCtrl.emailContacto,
          telefonoContacto: proyectosCtrl.telefonoContacto,
          descripcion: proyectosCtrl.descripcion,
          industria: proyectosCtrl.industria,
          bitacoras:[],
          id: 0,
          estado : 'pendiente'

        }
        proyectosService.setProyectos(newProyectos);
        console.log(newProyectos);
      }

      proyectosCtrl.agregarPersonal = function(){
        var newPersonal = {
          nombreProfesor : proyectosCtrl.nombreProfesor,
          nombreEstudiante : proyectosCtrl.nombreEstudiante
        }
        console.log(newPersonal);
        proyectosService.setPersonal(newPersonal);

      }

      proyectosCtrl.aceptar = function(pobjProyecto){
        //console.log(pobjProyecto);
        pobjProyecto.estado = 'aceptado';
        proyectosService.setAceptado(pobjProyecto);
        // verProyectoService.setAceptado(pobjProyecto);
      }
      proyectosCtrl.rechazado = function(pobjProyecto){
        //console.log(pobjProyecto);
        pobjProyecto.estado = 'rechazado';
        proyectosService.setRechazado(pobjProyecto);
      }
      proyectosCtrl.guardarCambios = function(pobjProyecto){
        var newBitacora = {
          inicio : proyectosCtrl.inicio,
          final : proyectosCtrl.final,
          costo : proyectosCtrl.costo,
          descripcion : proyectosCtrl.descripcion,
          industria : proyectosCtrl.industria
        }
        pobjProyecto.bitacoras.push( newBitacora);
        proyectosService.setCambios(pobjProyecto);
        console.log(newBitacora);
      }
    }
     //se establece un objeto de angular normal

})();
