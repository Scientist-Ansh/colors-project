import React from 'react';

import NewPaletteSubmitForm from './NewPaletteSubmitForm';

// App Bar Component
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';



export default function NewPaletteFormNav(props) {
    const{classes,open,handleDrawerOpen,savePalette,newPaletteName,handleNewPaletteName}=props;
    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="default"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{marginRight:"auto"}} variant="h6" noWrap>
                        New Palette
                    </Typography>
                    <NewPaletteSubmitForm 
                        savePalette={savePalette}
                        newPaletteName={newPaletteName}
                        handleNewPaletteName = {handleNewPaletteName}
                    />
                    <Link style={{textDecoration:"none"}} to='/'>
                            <Button variant="contained" color="secondary">Go Back</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </>
        );
}
