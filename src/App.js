/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MyProfile from './components/My-Profile';
import Dragons from './components/Dragons';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Routes>
            {/* <Route path="/" element={<Rockets />} /> */}
            <Route path="/dragons" element={<Dragons />} />
            {/* <Route path="/missions" element={<Mission />} /> */}
            <Route path="/my-profile" element={<MyProfile />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
