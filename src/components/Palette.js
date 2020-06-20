import  React,{Component} from "react";

import ColorBox from './ColorBox';
import NavBar from './Navbar';

import './Palette.css';

export default class Palette extends Component{
    state = {
        level:500,
        format:"hex"
    }

    handleLevelChange = (e,level)=>{
        this.setState({level});
    }

    handleFormatChange=(format)=>{
        this.setState({format})
    }

    render(){
        console.log(this.state.level)
        let {level,format} = this.state;
        const colorBoxes = this.props.palette.colors[level].map(color=>
            <ColorBox background={color[format]} name={color.name} />)
        return(
            <div className="Palette">
                <NavBar level={level} levelChange={this.handleLevelChange} formatChange={this.handleFormatChange}/>    
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* footer here */}
            </div>
        )
    }
}

