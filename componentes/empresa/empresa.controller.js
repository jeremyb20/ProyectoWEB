(function(){
  angular
    .module('myEnsamble')
    .controller('empresaController', empresaController);
    function empresaController(empresaService,proyectosService,asistenteService,$state){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var empresaCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        empresaCtrl.empresas = empresaService.getEmpresas();
      }init();

    empresaCtrl.save = function (){
    if (empresaCtrl.nombre != null && empresaCtrl.cedula != null && empresaCtrl.nombreContacto != null && empresaCtrl.emailContacto != null && empresaCtrl.telefonoContacto != null && empresaCtrl.descripcion != null && empresaCtrl.industria != null ) {
          var newProyecto = {
              nombre: empresaCtrl.nombre,
              cedula: empresaCtrl.cedula,
              nombreContacto: empresaCtrl.nombreContacto,
              emailContacto: empresaCtrl.emailContacto,
              telefonoContacto: empresaCtrl.telefonoContacto,
              descripcion: empresaCtrl.descripcion,
              industria: empresaCtrl.industria,
              estado : 'pendiente',
              bitacoras:[],
              id: 0
            }
            proyectosService.setProyectos(newProyecto);
            asistenteService.setProyectos(newProyecto);
            alert('Gracias por la información prontos nos pondrémos en contacto');
            $state.go('inicio');
               nombre: empresaCtrl.nombre = '';
               cedula: empresaCtrl.cedula = '';
               nombreContacto: empresaCtrl.nombreContacto = '';
               emailContacto: empresaCtrl.emailContacto = '';
               telefonoContacto: empresaCtrl.telefonoContacto = '';
               descripcion: empresaCtrl.descripcion = '';
               industria: empresaCtrl.industria = '';
          }else{
            alert('Favor llenar los espacios en blanco ');
          }
       
      }


  }
     //se establece un objeto de angular normal

})();
