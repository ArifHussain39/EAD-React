import * as React from 'react';
import './App.css';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import AOS from './AOS';
import Darkmode from './darkmode';
import Darkmodee from 'darkmode-js';




export default function CircularDeterminate() {
  
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
      autoMatchOsTheme: true // default: true
    }
    
    const darkmode = new Darkmodee(options);
    darkmode.showWidget();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="AOS" element={<AOS/>} />
        <Route path="darkmode" element={<Darkmode/>} />
      </Routes>
    </>
  );
}
