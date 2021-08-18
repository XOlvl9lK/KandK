import React, { useState } from 'react'
import './App.css';

function App() {
  const [ buttonValue, setButtonValue ] = useState(1)
  const [ isGroupVisible, setIsGroupVisible ] = useState(false)

  function toggleButtonGroup() {
    setIsGroupVisible(!isGroupVisible)
  }

  function changeValue(e) {
    setButtonValue(e.target.innerText)
  }

  return (
    <div className="app">
      <button onClick={toggleButtonGroup}>{ buttonValue }</button>
      {isGroupVisible &&
      <div className="button-group">
        <button onClick={e => changeValue(e)}>1</button>
        <button onClick={e => changeValue(e)}>2</button>
        <button onClick={e => changeValue(e)}>3</button>
      </div>
      }
    </div>
  );
}

export default App;
