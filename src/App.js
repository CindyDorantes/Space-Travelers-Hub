/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MissionList from './components/Missions/MissionList';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="Missions" element={<MissionList />} />
    </Routes>
  </BrowserRouter>
);

export default App;
