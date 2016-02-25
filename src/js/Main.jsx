//React core libs
import React from 'react';
import {Router, Route, Link, IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory'; //Temporary, should be createBrowserHistory in the future.

//React Components
import Navbar from './components/Navbar/Navbar.jsx';
import MainComponent from './components/MainComponent/MainComponent.jsx';
require('../styles/main.scss');

const App = React.createClass({
  render() {
    return (
      <div>
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={createHashHistory({queryKey: false})}>
    <Route path="/" component={App}>
      <IndexRoute component={MainComponent} />
    </Route>
  </Router>
), document.getElementById("main"));
