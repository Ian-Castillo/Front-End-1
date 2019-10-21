import React from 'react';
import logo from './logo.png';
import './App.css';
// import index.html;
// import index.css;


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="shadow p-3 mb-5 bg-white rounded">Regular shadow
        <img src={logo} className="App-logo" alt="logo" /></div>
        <button type="button" class="btn btn-primary btn-lg">Register</button>

      </header>
    </div>

  );
}

export default App;
