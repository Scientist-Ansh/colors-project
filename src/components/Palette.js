import  React,{Component} from "react";

import ColorBox from './ColorBox';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './Palette.css';

export default class Palette extends Component{
    state = {
        level:500
    }

    handleLevelChange = (level)=>{
        this.setState({level});
    }

    render(){
        console.log(this.state.level)
        let {level} = this.state;
        const colorBoxes = this.props.palette.colors[level].map(color=>
            <ColorBox background={color.hex} name={color.name} />)
        return(
            <div className="Palette">
                <Slider
                 defaultValue={level} 
                 min={100} max={900} 
                 step={100}
                 onAfterChange={this.handleLevelChange}/>

                {/* Navbar here */}
                
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* footer here */}
            </div>
        )
    }
}