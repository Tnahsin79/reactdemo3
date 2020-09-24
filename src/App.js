import React from 'react';
import './App.css';
import Timer from './Timer.js';
import Card from './Card.js'
import List from './List.js'

function App() {
  return (
    <div className="App">
      <Timer />
      <List />
      <Card />
    </div>
  );
}

export default App;
