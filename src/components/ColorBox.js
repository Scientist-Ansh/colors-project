import React,{Component} from 'react';
import './ColorBox.css';

export default class ColorBox extends Component{
    render(){
        const {name,background} = this.props;
        return(
            <div style={{background}} className="ColorBox">
                <button className="copy-button">Copy</button>
                <span className="color-name">{name}</span>
                <div className="see-more">More</div>
            </div>
        )
    }
}