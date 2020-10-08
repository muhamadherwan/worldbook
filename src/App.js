import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Country from './components/countries/Country';
import './App.css';

class App extends Component {

  render(){
    
    return (
    
      <div>
        <Navbar />
        <div className='container'>
         <Country />
        </div>
      </div>
      );
  }
  
}

export default App;
