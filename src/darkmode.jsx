import React from 'react';
import Darkmode from 'darkmode-js';


function Particles() {
  const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  
  return (
    <>
      <h1>DarkMode</h1>
    </>
  )
}

export default Particles