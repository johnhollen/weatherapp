var path = require('path');
var express = require('express');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var bodyParser = require('body-parser');
var config = require('./webpack.config.js');
var morgan = require('morgan');


const port = process.env.PORT || config.port;
const app = express();

var webpack = require('webpack');

const compiler = webpack(config);

app.use(webpackMiddleware(compiler, config.devServer));
app.use(webpackHotMiddleware(compiler));


//App config
app.use("/", express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(morgan('dev'));

//Use the api modules
var api = require('./api')(app);

app.get('/', function response(req, res) {
  console.log("Sending html file");
  res.sendFile(path.join(__dirname, 'dist/main.html'));
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.log('WeatherApp is happening on port: ' + port + '. ');
});
