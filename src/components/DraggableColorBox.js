import React from 'react';
import { withStyles } from '@material-ui/styles';

import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const styles = {
    box: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        marginBottom: "-3.8px",
        "&:hover $deleteIcon":{
            color:"white",
            transform:"scale(1.3)"
        }
    },
    boxContent: {
        color:"rgba(0,0,0,0.5)",
        padding: "10px",
        position: "absolute",
        bottom: "0",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        textTransform: "uppercase",
    },
    deleteIcon: {
        transition:"all 0.3s ease-in-out",
        cursor:"pointer"
    }
}

const DraggableColorBox = (props) => {
    const { classes,name,color,deleteBox} = props;
    return (
        <div className={classes.box} style={{ backgroundColor: color }}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteRoundedIcon className={classes.deleteIcon} onClick = {deleteBox} />
            </div>

        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);