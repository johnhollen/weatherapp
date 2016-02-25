/*

  Weather controller app

*/

var request = require('superagent');

exports.getCurrentWeather = function(req, res) {

  var lat = Number(req.params.lat).toPrecision(8);
  var lng = Number(req.params.lng).toPrecision(8);


  request
    .get('http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/'+ lat + '/lon/'+ lng +'/data.json')
    .end(function(err, data) {
      if(err) {
        console.log(err);
        return res.status(404).json({message: "Data service can not be found"});
      }
      return res.status(200).json(data.body);
    });
};

exports.getForecast = function(req, res) {
  res.status(200).json({forecast: "Dunno"});
};
