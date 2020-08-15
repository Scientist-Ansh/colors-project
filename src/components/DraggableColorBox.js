import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    box:{
        width: "20%",
        height: "25%", 
        margin: "0 auto",
        cursor: "pointer",
        display: "inline-block",
        position: "relative",
        marginBottom: "-3.8px",
    }
}

const DraggableColorBox=(props)=>{
    return(
        <div className={props.classes.box} style={{backgroundColor:props.color}}>
            {props.color}
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);