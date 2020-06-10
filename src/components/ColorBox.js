import React,{Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import './ColorBox.css';

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
        return(
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <div style={{background}} className="ColorBox">
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1 className="copy-msg-heading">copied!!</h1>
                        <p style={{marginTop:"25px"}}>{background}</p>
                    </div>
                    <div style={{background}} 
                    className={`copy-overlay ${copied && "show"}`}>
                    </div>
                    <button className="copy-button">Copy</button>
                    <span className="color-name">{name}</span>
                    <div className="see-more">More</div>
            </div>
            </CopyToClipboard>
            
        )
    }
}