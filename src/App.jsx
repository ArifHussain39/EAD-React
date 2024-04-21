import * as React from 'react';
import './App.css';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import AOS from './AOS';

export default function CircularDeterminate() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="AOS" element={<AOS/>} />
      </Routes>
    </>
  );
}
