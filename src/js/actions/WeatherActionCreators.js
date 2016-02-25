import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import WeatherService from '../services/WeatherService';


export default {
  getWeatherData(latLng) {
    WeatherService.getWeatherData(latLng);
  },
};
