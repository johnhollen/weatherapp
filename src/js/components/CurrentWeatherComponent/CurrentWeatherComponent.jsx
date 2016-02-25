import React from 'react';
import ReactDOM from 'react-dom';

import WeatherStore from '../../stores/WeatherStore';

export default React.createClass({

  getInitialState() {
    return {

    };
  },

  getDefaultProps() {
    return {
      currentWeather: null
    };
  },

  render() {

    let props = this.props;
    console.log(props.currentWeather);

    return (
      <div className="currentweather-wrapper">
        <pre>
          {JSON.stringify(props.currentWeather, null, 2)}
        </pre>
      </div>
    );
  }
});
