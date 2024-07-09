import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light Mode Enabled", "success")
    }
    else {
      setmode('dark')
      document.body.style.backgroundColor = '#06073a'
      showalert("Dark Mode Enabled", "success")
    }
  }
  const [mode, setmode] = useState("")
  const [alert, setalert] = useState(null)
  let showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1300);
  }

  return (
    <>
      <Navbar title="Navbar" mode={mode} alert={alert} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container">
        <Textform mode={mode} showalert={showalert} />
      </div>
    </>
  );

  // Harry react js

}

export default App;
