import React from 'react';
import App from './App';
const TITLE = 'Aqua kine sports';
React.render(<App title={TITLE}/>, document.getElementById('root'));
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
