import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';

export default React.createClass({
  render() {
    return(
        <div className="navbar">
          <div className="container">
            <div className="navbar-left">
              <h1>VäderWiz</h1>            
            </div>
          </div>
        </div>
    );
  }
});
