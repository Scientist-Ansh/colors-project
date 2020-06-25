import React,{Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './PaletteFotter';
import PaletteFotter from './PaletteFotter';

import {Link} from 'react-router-dom';

import './SinglePaletteColor.css';


class SinglePaletteColor extends Component{
    constructor(props){
        super(props);
        this._colors = this.getColors(this.props.palette.colors,this.props.color);
        this.state={
            format:"hex"
        };
        this.handleFormatChange = this.handleFormatChange.bind(this);
    }

    getColors(allColors,color){
        let singleColorPalette = [];
        for(let shade in allColors){
            singleColorPalette.push(
                allColors[shade].find(singleColor=>singleColor.id===color)
            );
        }
        return singleColorPalette.slice(1);
    }

    handleFormatChange=(format)=>{
        this.setState({format})
    }

    render(){
        let colorBoxes = this._colors.map(color=>
            <ColorBox key={color.name} name={color.name} background={color[this.state.format]}/>)
        return(
            <div className="SinglePaletteColor Palette"> 
                <Navbar formatChange={this.handleFormatChange} allColors={false}/>
                <div className="Palette-colors">
                    {colorBoxes}
                    <div className="Go-back-box">
                        <Link to={`/palette/${this.props.palette.id}`}>
                            <button className="Go-back" style={{background:this._colors[2].hex}}>Go Back</button>
                        </Link>
                        
                    </div>
                </div>
                <PaletteFotter paletteName={this.props.palette.paletteName} emoji ={this.props.palette.emoji}/>
            </div>
        )
    }
}

export default SinglePaletteColor;