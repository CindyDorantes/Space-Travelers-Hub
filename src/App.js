import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
// import Rockets from './components/Rockets/Rockets';
// import Rockets from './components/Rockets/Rockets';
import Rockets from './components/rockets/rockets';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Rockets />} />
          {/* <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} /> */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
