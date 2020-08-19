import React, { Component } from 'react';

import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import SinglePaletteColor from './components/SinglePaletteColor';
import NewPaletteForm from './components/NewPaletteForm';

import { Switch, Route } from 'react-router-dom';

import seedColors from './seedColors';
import { generateColors } from './helpers/colorHelper';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedColors
    }

    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find((palette) => {
      return palette.id === id
    }
    )
  }

  savePalette(newPalette) {
    this.setState((state) => ({
      palettes: [...state.palettes, newPalette]
    })
    );
  }

  render() {

    return (
      <Switch>
        <Route exact path='/palette/new' render={(routeProps) =>
          <NewPaletteForm
            savePalette={this.savePalette} {...routeProps} palettes={this.state.palettes}/>} />
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps} />} />
        <Route exact path='/palette/:id'
          render={(routeProps) =>
            <Palette palette={generateColors(this.findPalette(routeProps.match.params.id))} />}
        />
        <Route exact path='/palette/:paletteId/:colorId' render={(routeProps) =>
          <SinglePaletteColor
            palette={generateColors(this.findPalette(routeProps.match.params.paletteId))}
            color={routeProps.match.params.colorId}
          />} />
      </Switch>
    )
  }
}

export default App;
