import React,{Component} from 'react';

import Palette from './components/Palette';

import seedColors from './seedColors';
import {generateColors} from './helpers/colorHelper';
import './App.css';

class App extends Component{
  render(){
    console.log(generateColors(seedColors[1]));
    return(

      <div>
        <Palette palette ={generateColors(seedColors[1])}/>
      </div>
    )
  }
}

export default App;
