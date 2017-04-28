(function(){
  angular
    .module('myEnsamble')
    .controller('empresaController', empresaController);
    function empresaController(empresaService,asistenteService,$location,$scope,$mdDialog,ImagenesService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador 
      var empresaCtrl = this; //binding del controlador con el html, solo en el controlador
      var url='';

      empresaCtrl.btnadd = true;
       empresaCtrl.btnedit = false;

        empresaCtrl.cloudObj=ImagenesService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        empresaCtrl.empresas = empresaService.getEmpresas();

         asistenteService.getProyectosRevision()
          .success(function(data){
            empresaCtrl.empresas = data;

          });
      }init();


       var client = filestack.init('ARK9lXB5WRCGe5NtlubYWz');
        $scope.showPicker =  function() {
            client.pick({
            }).then(function(result) {
              urlBio=result.filesUploaded[0].url;
              console.log(result);
                console.log(JSON.stringify(result.filesUploaded))
            });
        };

        empresaCtrl.presave= function(formulario){
        empresaCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(empresaCtrl.cloudObj)
          .success(function(data){
            save(data.url, formulario);
          });
       } 

    function save(url, formulario){
      if (empresaCtrl.nombre != null && empresaCtrl.cedula != null && empresaCtrl.nombreContacto != null && empresaCtrl.emailContacto != null && empresaCtrl.telefonoContacto != null && empresaCtrl.descripcion != null && empresaCtrl.industria != null ) {
          var newProyecto = {
              nombre: empresaCtrl.nombre,
              cedula: empresaCtrl.cedula,
              nombreContacto: empresaCtrl.nombreContacto,
              emailContacto: empresaCtrl.emailContacto,
              telefonoContacto: empresaCtrl.telefonoContacto,
              descripcion: empresaCtrl.descripcion,
              industria: empresaCtrl.industria,
              estado : 'revision',
              bitacoras:[],
              photo : url,
              bio : urlBio,
              id: 0
            }
            // proyectosService.setProyectos(newProyecto);
            asistenteService.setProyectosRevision(newProyecto)
            .success(function(data){
              console.log(data);

             $mdDialog.show(
                $mdDialog.alert()
                  .parent(angular.element(document.querySelector('#popupContainer')))
                  .clickOutsideToClose(true)
                  .title('Cenfotec Software House')
                  .textContent('Gracias por la información prontos nos pondrémos en contacto')
                  .ariaLabel('Alert Dialog Demo')
                  .ok('Cerrar!')
                  .targetEvent()
              )
                 empresaCtrl.nombre = null;
                 empresaCtrl.cedula = null;
                 empresaCtrl.nombreContacto = null;
                 empresaCtrl.emailContacto = null;
                 empresaCtrl.telefonoContacto = null;
                 empresaCtrl.descripcion = null;
                 empresaCtrl.industria = null;
            init();

          })
               // $location.path( "/inicio" );
            // $state.go('inicio');
          }else{
              $mdDialog.show(
                $mdDialog.alert()
                  .parent(angular.element(document.querySelector('#popupContainer')))
                  .clickOutsideToClose(true)
                  .title('Cenfotec Software House')
                  .textContent('Favor llenar los espacios en blanco')
                  .ariaLabel('Alert Dialog Demo')
                  .ok('Ok entendido!')
                  .targetEvent()
              );
          };
    } 
       
  }


     //se establece un objeto de angular normal

})();
