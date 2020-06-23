import React from 'react';

import {withStyles} from '@material-ui/styles';

const styles = {
    main:{
        background: 'white',
        borderRadius:'5px',
        border:'1px solid black',
        padding:'0.5rem',
        "&:hover":{
            cursor:'pointer'
        }
    },
    title:{
        display:'flex',
        justifyContent:'space-between',
        margin:'5px 0'

    },
    colors:{
        height:'100px',
        width:'100%',
        borderRadius:'5px',
        overflow:'hidden'
    },
    miniBox:{
        width:'20%',
        height:'25%',
        display:'inline-block',
        marginBottom:'-4px'
    }
    
}

function MiniPalette(props){
    const {classes,paletteName,emoji} = props;
    const miniColorBoxes = props.colors.map(color=>(
        <div key={color.name} className={classes.miniBox} style={{background:color.color}}>

        </div>
    ))
    return(
        <div className={classes.main}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);