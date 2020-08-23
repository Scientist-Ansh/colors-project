import React from 'react';

import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

import { withStyles } from '@material-ui/styles';

const styles = {
    main: {
        background: 'white',
        borderRadius: '5px',
        border: '1px solid black',
        padding: '0.5rem',
        cursor: 'pointer',
        "&:hover $deleteIcon": {
            opacity:1,
            transform:"scale(1.2)"
        }
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '5px 0'

    },
    colors: {
        height: '100px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    miniBox: {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        marginBottom: '-4px'
    },
    deleteIcon: {
        color: "white",
        backgroundColor: "crimson",
        position: "absolute",
        right: 0,
        top: 0,
        padding: "2px",
        opacity: 0,
        transform:"scale(0.1)",
        transition:"all 0.3s ease-in-out",
    }

}

function MiniPalette(props) {
    const { classes, paletteName, emoji } = props;
    const miniColorBoxes = props.colors.map(color => (
        <div key={color.name} className={classes.miniBox} style={{ background: color.color }}>

        </div>
    ))
    return (
        <div className={classes.main} onClick={props.handleClick}>
            <div style={{ position: "relative" }}>
                <DeleteRoundedIcon className={classes.deleteIcon} />
            </div>

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