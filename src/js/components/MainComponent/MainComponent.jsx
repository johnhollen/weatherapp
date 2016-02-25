//React libs
import React from 'react';
import ReactDOM from 'react-dom';

//Stores
import WeatherStore from '../../stores/WeatherStore';

//Components
import MapsComponent from '../MapsComponent/MapsComponent.jsx';
import CurrentWeatherComponent from '../CurrentWeatherComponent/CurrentWeatherComponent.jsx';
import DropdownMenu from '../DropdownMenu/DropdownMenu.jsx';

//Actions
import WeatherActionCreators from '../../actions/WeatherActionCreators';

export default React.createClass({

  getInitialState() {
    return {
      weatherData: [],
      gridPoint: null,
      chosenPosition: null,
      currentWeather: null
    };
  },

  componentDidMount() {
    WeatherStore.addChangeListener(this._weatherChanged);
  },

  componentWillUnmount() {
    WeatherStore.removeChangeListener(this._weatherChanged);
  },

  _weatherChanged() {
    this.setState({
      weatherData: WeatherStore.getWeatherData(),
      currentWeather: WeatherStore.getCurrentWeather(),
      gridPoint: {
        lat: WeatherStore.getWeatherData().lat,
        lng: WeatherStore.getWeatherData().lon
      }
    });
  },

  _onPositionChange(latLng) {
    WeatherActionCreators.getWeatherData(latLng);
    this.setState({chosenPosition: latLng});
  },

  render() {
    const state = this.state;
    return (
      <div className="container maincomponent-content">
        <div className="maincomponent-centered">
          <DropdownMenu type="generic" label="Välj plats">
            <MapsComponent onPositionChange={this._onPositionChange} chosenPosition={state.chosenPosition} gridPoint={state.gridPoint}/>
          </DropdownMenu>
          <CurrentWeatherComponent currentWeather={state.currentWeather}/>
        </div>
      </div>
    );
  }
});

/*<div className="maincomponent-full">
  <h2>Välj position</h2>
  <p>Klicka på kartan för att välja vilken plats du vill se väder för.</p>
  <MapsComponent gridPoint={state.gridPoint}/>
</div> */
