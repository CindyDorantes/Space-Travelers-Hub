/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Routes>
            {/* <Route path="/" element={<BookContainer />} />
            <Route path="/categories" element={<Categories />} /> */}
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
