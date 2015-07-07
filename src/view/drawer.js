import React, { Component } from 'react';

export default class Drawer extends Component {
  render() {
    return (
      <div className="mdl-layout__drawer">
              <span className="mdl-layout-title">
                <img className="logo-image" src="images/android-logo-white.png" />
              </span>
              <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="">Phones</a>
                <a className="mdl-navigation__link" href="">Tablets</a>
                <div className="mdl-drawer-separator"></div>
                <span className="mdl-navigation__link" href="">Versions</span>
                <a className="mdl-navigation__link" href="">Jelly Bean 4.3</a>
                <a className="mdl-navigation__link" href="">Android history</a>
                <div className="mdl-drawer-separator"></div>
                <span className="mdl-navigation__link" href="">Resources</span>
                <a className="mdl-navigation__link" href="">Android on Twitter</a>
                <div className="mdl-drawer-separator"></div>
                <span className="mdl-navigation__link" href="">For developers</span>
                <a className="mdl-navigation__link" href="">Android Open Source Project</a>
                <a className="mdl-navigation__link" href="">Android SDK</a>
              </nav>
        </div>
    );
  }
}
