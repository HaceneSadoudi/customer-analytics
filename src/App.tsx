import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ThinBar from './components/ThinBar';
import Graphs from './components/Graphs';

function App() {
  return (
    <div className="App">
      <ThinBar />
      <Sidebar />
        <Navbar />
      <Graphs />
    </div>
  );
}

export default App;
