var express = require('express');
var controller = require('./weather.controller');

var router = express.Router();

router.get("/:lat/:lng", controller.getCurrentWeather);
router.get("/forecast", controller.getForecast);

module.exports = router;
