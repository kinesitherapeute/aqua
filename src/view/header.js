import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className=" mdl-layout__header mdl-layout__header--waterfall">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">
            <img className="image" src="" />
          </span>
          <div className="mdl-layout-spacer"></div>
          <div className="mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
            <label className="mdl-button mdl-js-button mdl-button--icon" for="search-field">
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder">
              <input className="mdl-textfield__input" type="text" id="search-field" />
            </div>
          </div>
        </div>
      </div>

    );
  }
}
