//import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react';
// import { BrowserRouter,Route,Routes} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [btext,setBtnText] = useState("Dark Mode");
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000);
  }
  const tMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      setBtnText("Light Mode");
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setBtnText("Dark Mode");
      showAlert("Light mode enabled","success");
    }
  };


  
  return (
    <>
    {/* <BrowserRouter> */}
   <Navbar title="Text Utils" abttxt="About Us" mode={mode} toggleMode={tMode} btext={btext}/>
   <Alert alert={alert}/>
   <div className="container my-3" mode={mode}>
    {/* <Routes>
      <Route exact path="/about" element={<About/>}/>
    </Routes> */}
    {/* <Routes> */}
      {/* <Route exact path="/" element={<Textform heading="Text Box" showAlert={showAlert} mode={mode}/> }/> */}
      <Textform heading="Text Box" showAlert={showAlert} mode={mode}/>
    {/* </Routes> */}
   </div>
   {/* </BrowserRouter> */}
   </>

  );
}

export default App;

