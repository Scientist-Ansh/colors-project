import React, { Component } from 'react';

import Slider from '@material-ui/core/Slider';


import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import './Navbar.css';


export default class Navbar extends Component {
    constructor(props){
        super(props);
            this.state={
                format:'hex',
                value:this.props.level,
                open:false
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSliderChange = this.handleSliderChange.bind(this);
            this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleChange(e){
        this.setState({format:e.target.value,open:true},()=>{
            this.props.formatChange(this.state.format);
        })
    }
    handleSliderChange(e,value){
        this.setState({value});
    }

    closeSnackbar(){
        this.setState({open:false})
    }

    render() {
        const { levelChange } = this.props
        return (
            <header className="Navbar">
                <div className="logo">
                    colorPicker
                </div>
                <div className="slider-container">
                    <span>Level: {this.state.value}</span>
                    <div className="slider">
                        <Slider
                            value={this.state.value}
                            track={false}
                            min={100} max={900}
                            step={100}
                            aria-labelledby="track-false-slider"
                            onChange={this.handleSliderChange}
                            onChangeCommitted = {levelChange}/>
                    </div>
                </div>
                <div className="select-container">
                    <Select value = {this.state.format} onChange={this.handleChange}>
                        <MenuItem value='hex'>Hex</MenuItem>
                        <MenuItem value='rgb'>Rgb</MenuItem>
                        <MenuItem value='rgba'>Rgba</MenuItem>
                    </Select>
                </div>

                <Snackbar
                    anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
                    open={this.state.open}
                    message={`Format changed to ${this.state.format}`}
                    autoHideDuration={3000}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton onClick={this.closeSnackbar}>
                            <CloseIcon/>
                        </IconButton>
                    ]}
                />


            </header>
        );
    }
}