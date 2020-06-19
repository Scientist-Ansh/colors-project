import  React,{Component} from "react";

import ColorBox from './ColorBox';
import NavBar from './Navbar';

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
                <NavBar level={level} levelChange={this.handleLevelChange}/>    
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* footer here */}
            </div>
        )
    }
}

