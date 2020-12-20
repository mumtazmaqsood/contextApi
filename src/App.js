import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import { useContext, useState } from 'react';
import countContext from './ValueContext';

function App() {
  
  let valueCount = useState(1);
  return (
    <countContext.Provider value={valueCount}>
    <div>
      <h1>ContextApi</h1>
      <Parent />
    </div>
    </countContext.Provider>
  );
}

export default App;
