/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MissionList from './components/Missions/MissionList';
import Dragons from './components/Dragons';
import MyProfile from './components/My-Profile';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/dragons" element={<Dragons />} />
      <Route path="/missions" element={<MissionList />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
