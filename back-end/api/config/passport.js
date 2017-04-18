var JwtStrategy = require('passport-jwt').Strategy;
var Carrera = require('../models/carrera.model');
var config = require('../config/database');

module.exports = function(passport){
  var opts = {};
  opts.secretOrKey = 'ksk';
  passport.use(new JwtStrategy(opts,function(jwt_payload,done){
    Carrera.find({id:jwt_payload.sub},function(err,carrera){
      if(err){
        return done(err,false);
      }
      if(carrera){
        done(null,carrera);
      }else{
        done(null,false);
      }
    });
  }));
};
