import React, { Component } from 'react';
import Cabinet from './cabinet'
import cabinetData from '../data/cabinet'

export default class Drawer extends Component {
  render() {
    return (
      <div className="parallax-container">

        <div className="section no-pad-bot">
          <div className="container">
            <br/><br/>
            <h1 className="header center teal-text text-lighten-2">Parallax Template</h1>
            <div className="row center">
              <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
            </div>
            <div className="row center">
              <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
            </div>
            <br/><br/>
          </div>
          <div className="parallax">
            <img src="http://cdn.images.express.co.uk/img/dynamic/25/590x/thermae-bath-spa-450381.jpg" alt="Unsplashed background img 1" style={{display: 'block'}}/>
          </div>
        </div>
      </div>
    );
  }
}
