import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({

  //Lifecycle ---------------

  getInitialState() {
    return {
      hidden: true
    };
  },

  getDefaultProps() {
    return {
      type: "list",
      label: ""
    };
  },

  //End Lifecycle -------------

  _renderList() {
    return null;
  },

  _renderGeneric() {
    if(!this.state.hidden) {
      return (
        <div className="dropdownmenu-menu">
          {this.props.children}
        </div>
      );
    } else {
      return null;
    }

  },

  _showOrHide() {
    const hidden = !this.state.hidden;
    this.setState({hidden: hidden});
  },

  render() {

    const state = this.state;
    const props = this.props;

    return (
      <div className="dropdownmenu-wrapper">
        <button type="button" onClick={this._showOrHide}>{props.label}</button>
        {props.type === "list" ? this._renderList() : this._renderGeneric()}
      </div>
    );
  }
});
