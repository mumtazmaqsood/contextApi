import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import { useContext, useState } from 'react';
import countContext from './ValueContext';

function App() {
  
  return (
    <countContext.Provider value={100}>
    <div>
      <h1>ContextApi</h1>
      <Parent />
    </div>
    </countContext.Provider>
  );
}

export default App;
