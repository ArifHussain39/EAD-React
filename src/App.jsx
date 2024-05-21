import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Create from "./Create";
import Update from "./Update";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
