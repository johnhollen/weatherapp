import Dispatcher from '../Dispatcher'; // Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

let _data = {};

function setWeatherData(data) {
  _data = data;
}

// Facebook style store creation.
const WeatherStore = assign({}, BaseStore, {

  getWeatherData() {
    return _data;
  },

  getCurrentWeather() {

    if(_data && _data.timeseries) {
      let now = new Date();
      let  timeSeries = _data.timeseries;

      for(let i = 0; i < timeSeries.length; i++) {
        let tempDate = new Date(timeSeries[i].validTime);

        if(tempDate.getMonth() === now.getMonth() && tempDate.getDate() === now.getDate() && tempDate.getHours() === now.getHours()) {
          console.log("Match found!", tempDate);
          return timeSeries[i];
        }
      }
    }

    return null;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.WEATHER_DATA_FETCHED:
        setWeatherData(action.weatherData);
        WeatherStore.emitChange();
        break;

      case Constants.ActionTypes.FETCH_DATA_FAILED:
        //TODO take care of error
        console.log("Error when fetching data!");
        break;
    }
  })
});

export default WeatherStore;
