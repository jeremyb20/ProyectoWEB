(function(){
  angular
    .module('myEnsamble')
    .controller('registrarHorasController', registrarHorasController);
    function registrarHorasController(registrarHorasService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var registrarHorasCtrl = this; //binding del controlador con el html, solo en el controlador
      var horaI = moment();
      var horaF = moment();


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        registrarHorasCtrl.horas = registrarHorasService.getHoras();
      }init();

      registrarHorasCtrl.horaInicio = function(){
        var horaInicio = moment();
        console.log(horaInicio, "inicio");
        horaI = horaInicio;
      }
      registrarHorasCtrl.horaFinal = function(){
        var horaFinal= moment();
        console.log(horaFinal, "fin");
        horaF = horaFinal;
        var duration = moment.duration(horaFinal.diff(horaI));
        var hours = duration.asHours();
        var minutes = duration.asMinutes();
        var seconds = duration.asSeconds();
        var horasTrabajadas = Math.round(hours) + "-" + Math.round(minutes) + "-" + Math.round(seconds);
        console.log(horasTrabajadas);
        return  horasTrabajadas


      }
      registrarHorasCtrl.save = function(){
        var registro = {
          horaInicio: horaI,
          horaFinal:  horaF,
          tiempoTrabajado: registrarHorasCtrl.horaFinal()
        }
        registrarHorasService.setHoras(registro);
      }
    }
     //se establece un objeto de angular normal

})();