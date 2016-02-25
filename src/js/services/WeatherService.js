import Constants from '../Constants';
import Dispatcher from '../Dispatcher';


//Libs
import request from 'superagent';

const WeatherService = {
  getWeatherData(latLng) {
    request
      .get('/api/weather/' + latLng.lat + "/" + latLng.lng)
      .end(function(err, response) {
        if(err) {
          Dispatcher.dispatch({
            action: {
              type: Constants.ActionTypes.FETCH_DATA_FAILED
            }
          });
        } else {
          Dispatcher.dispatch({
            action: {
              type: Constants.ActionTypes.WEATHER_DATA_FETCHED,
              weatherData: response.body
            }            
          });
        }
      });
  }
};

export default WeatherService;
