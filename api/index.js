module.exports = function(app) {

  var apiPrefix = "/api";

  //Weather route
  app.use(apiPrefix + "/weather", require('./weather'));

};
