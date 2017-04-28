(function(){
  angular
  .module('myEnsamble')
  .service('ImagenesService', ImagenesService);

  function ImagenesService($http){

    var cloudObj = {
      url:'https://api.cloudinary.com/v1_1/dronecc0l/image/upload',
      data:{
        upload_preset: 'bn4jcu6c',
        tags:'Any',
        context:'photo=test'
      }
    };

    var public_api = {
      getConfiguration:getConfiguration
    }
    return public_api;

    function getConfiguration(){
      return cloudObj;
    }


  }

})();