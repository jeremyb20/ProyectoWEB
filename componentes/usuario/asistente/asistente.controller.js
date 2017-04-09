(function(){
  angular
    .module('myEnsamble')
    .controller('asistenteController', asistenteController);
    function asistenteController(asistenteService,administradorService,estadoEstudianteService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var asistenteCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
       asistenteCtrl.proyectos = asistenteService.getProyectos();
       asistenteCtrl.cambios = asistenteService.getCambios();
       asistenteCtrl.profesores = administradorService.getProfesores();
       asistenteCtrl.estudiantes = estadoEstudianteService.getEstadoEstudiante();

      }init();

      asistenteCtrl.save = function (){
        var newProyectos = {
          nombre: asistenteCtrl.nombre,
          cedula: asistenteCtrl.cedula,
          nombreContacto: asistenteCtrl.nombreContacto,
          emailContacto: asistenteCtrl.emailContacto,
          telefonoContacto: asistenteCtrl.telefonoContacto,
          descripcion: asistenteCtrl.descripcion,
          industria: asistenteCtrl.industria,
          bitacoras:[],
          id: 0,
          estado : 'pendiente'

        }
        asistenteService.setProyectos(newProyectos);
        console.log(newProyectos);
      }

      asistenteCtrl.aceptar = function(pobjProyecto){
        //console.log(pobjProyecto);
        pobjProyecto.estado = 'aceptado';
        asistenteService.setAceptado(pobjProyecto);
        // verProyectoService.setAceptado(pobjProyecto);
      }
      asistenteCtrl.rechazado = function(pobjProyecto){
        //console.log(pobjProyecto);
        pobjProyecto.estado = 'rechazado';
        asistenteService.setRechazado(pobjProyecto);
      }
      asistenteCtrl.guardarCambios = function(pobjProyecto){
        var newBitacora = {
          inicio : asistenteCtrl.inicio,
          final : asistenteCtrl.final,
          costo : asistenteCtrl.costo,
          descripcion : asistenteCtrl.descripcion,
          industria : asistenteCtrl.industria
        }
        pobjProyecto.bitacoras.push( newBitacora);
        asistenteService.setCambios(pobjProyecto);
        console.log(newBitacora);
      }
    }
     //se establece un objeto de angular normal

})();
