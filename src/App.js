import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <Form/>
      <Form/>
      <Form/>
      </div>
      <div className="btnc">
        <button className="quit">QUIT</button>
        <p className="copy">&copy;DeborahMendes2020</p>
      </div>
    </div>
  );
}

export default App;
