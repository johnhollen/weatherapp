import React from 'react';
import ReactDOM from 'react-dom';

//React components
import ScriptjsLoader from 'react-google-maps/lib/async/ScriptjsLoader';
import {GoogleMap, Marker, GoogleMapLoader} from 'react-google-maps';



//Stores
import WeatherStore from '../../stores/WeatherStore';

//Custom marker icon
let markerIcon = require('../../../images/bluemarker.svg');

export default React.createClass({

  getInitialState() {
    return {

    };
  },

  getDefaultProps() {
    return {
      gridPoint: null,
      chosenPotition: null,
      onPositionChange: function() {}
    };
  },

  _handleMapClick(e) {
    let latLng = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    };

    this.props.onPositionChange(latLng);
  },

  _renderMarker() {
    let marker = this.props.chosenPosition;

    if(marker !== null) {
      return (
        <Marker position={marker} defaultAnimation={2} />
      );
    }
    else {
      return null;
    }
  },

  _renderGridPoint() {
    let marker = this.props.gridPoint;
    if(marker !== null) {
      let icon = {
        url: markerIcon,
        scaledSize: new google.maps.Size(60, 50)
      };

      return (
        <Marker position={marker} defaultAnimation={2} icon={icon} scale={0.00001}/>
      );
    }
    else {
      return null;
    }
  },

  render() {
    return (
      <ScriptjsLoader
        hostname="maps.googleapis.com"
        pathname="/maps/api/js"
        query={{v: '3', libraries: "geometry,drawing,places"}}
        loadingElement={
          <div />
        }
        containerElement={
          <div className="mapscomponent-wrapper" ref="mapContainer" />
        }
        googleMapElement={
          <GoogleMap
            ref="googleMap"
            onClick={this._handleMapClick}
            defaultZoom={4}
            defaultCenter={{lat: 63, lng: 15}}
            defaultOptions={{
              mapTypeControl: false,
              disableDefaultUI: true,
              zoomControl: true,
            }}>
            {this._renderMarker()}
            {this._renderGridPoint()}
          </GoogleMap>
        }
      >
      </ScriptjsLoader>
    );
  }
});
