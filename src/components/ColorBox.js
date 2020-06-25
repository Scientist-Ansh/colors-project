import React,{Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import './ColorBox.css';

import chroma from 'chroma-js';
import { dark } from '@material-ui/core/styles/createPalette';

export default class ColorBox extends Component{
    constructor(props){
        super(props);
        this.state={
            copied:false
        };
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy(){
        this.setState({copied:true},()=>{
            setTimeout(()=>this.setState({copied:false}),1700);
        })
    }
    render(){
        const {name,background} = this.props;
        const {copied} = this.state;
        const lightText = chroma(background).luminance() <=0.06;
        const darkText = chroma(background).luminance() >=0.4;

        return(
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <div style={{background}} className="ColorBox">
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1 className="copy-msg-heading" style={{color:darkText?'black':'white'}}>copied!!</h1>
                        <p style={{marginTop:"25px",color:darkText?'black':'white'}}>{background}</p>
                    </div>
                    <div style={{background}} 
                    className={`copy-overlay ${copied && "show"}`}>
                    </div>
                    <button className={`copy-button ${darkText && 'dark-text'}`}>Copy</button>
                    <span className={`color-name ${lightText && 'light-text'}`}>{name}</span>
                    <div className="see-more">
                        {
                            this.props.moreLink && 
                            <Link to={this.props.moreLink} style={{textDecoration:"none",color:darkText?'black':'white'}}
                            onClick={e=>e.stopPropagation()}
                            >More</Link>
                        }
                        
                    </div>
            </div>
            </CopyToClipboard>
            
        )
    }
}