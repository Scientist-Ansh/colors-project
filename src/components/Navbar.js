import React,{Component} from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './Navbar.css';


export default class Navbar extends Component{
    render(){
        const {level,levelChange} = this.props
        return(
            <header className="Navbar">
                <div className="logo">
                    colorPicker
                </div>
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider
                        defaultValue={level} 
                        min={100} max={900} 
                        step={100}
                        onAfterChange={levelChange}/>
                    </div>
                </div>
                

            </header>
        );
    }
}