import React, { Component } from 'react';
import Navbar from './components/Navbarx';
import Landingpage from './components/Landingpage';
import Displaypage from './components/Displaypage';



class App extends Component {
  render() {
    return (
      <div>
        <div >
        <Navbar />
        <Displaypage />
        <Landingpage /><br/>
        
      
        </div>
       
      
      </div>
    );
  }
}




export default App;


