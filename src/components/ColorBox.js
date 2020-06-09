import React,{Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import './ColorBox.css';

export default class ColorBox extends Component{
    render(){
        const {name,background} = this.props;
        return(
            <CopyToClipboard text={background}>
                <div style={{background}} className="ColorBox">
                <button className="copy-button">Copy</button>
                <span className="color-name">{name}</span>
                <div className="see-more">More</div>
            </div>
            </CopyToClipboard>
            
        )
    }
}