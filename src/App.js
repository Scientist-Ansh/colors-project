import React,{Component} from 'react';

import Palette from './components/Palette';
import PaletteList from './components/PaletteList';

import {Switch,Route} from 'react-router-dom';

import seedColors from './seedColors';
import {generateColors} from './helpers/colorHelper';
import './App.css';


class App extends Component{

  findPalette(id){
    return seedColors.find((palette)=>{
      console.log(palette.id);

      return palette.id === id}
      )
  }

  render(){
    
    return(
      <Switch>
        <Route exact path='/' render={()=><PaletteList palettes = {seedColors}/>}/>
        <Route exact path='/palette/:id'
        render={(routeProps)=>
        <Palette palette ={generateColors(this.findPalette(routeProps.match.params.id))} />}/>
      </Switch>

     
    )
  }
}

export default App;
