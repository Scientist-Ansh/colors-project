import React,{Component} from 'react';

import Palette from './components/Palette';

import {Switch,Route} from 'react-router-dom';

import seedColors from './seedColors';
import {generateColors} from './helpers/colorHelper';
import './App.css';

class App extends Component{
  render(){
    console.log(generateColors(seedColors[1]));
    return(
      <Switch>
        <Route exact path='/' render={()=><h1>Pallets appear here</h1>}/>
        <Route exact path='/palette/:id' render={()=><h1>single palette</h1>}/>
      </Switch>

     
    )
  }
}

export default App;
