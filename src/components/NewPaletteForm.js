import React, { useState, useEffect } from 'react';

import DraggableColorBox from './DraggableColorBox';

// drawer Component
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';

import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        height: 'calc(100vh - 64px)',
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function NewPaletteForm(props) {
    const [currentColor, setCurrentColor] = useState("blue");
    const [colors, setColors] = useState([]);
    const [newColorName, setNewColorName] = useState("")


    const classes = useStyles();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
            const answer = colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase());
            return answer;
        });
        ValidatorForm.addValidationRule('isColorUnique', (value) => {
            const answer = colors.every(
                ({ color }) => color !== currentColor);
            return answer;
        });
    }, [colors,currentColor])

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        const newColor = { name: newColorName, color: currentColor }
        setColors([...colors, newColor])
        setNewColorName("");
    }

    const savePalette = () =>{
        const newName = "New Palette";
        const id = newName.toLowerCase().replace(' ','-')
        const newPalette = {id:id,paletteName:newName,colors:colors}
        props.savePalette(newPalette);
        props.history.push('/')
    }

    return (
        <div className={classes.root}>
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
                    <Typography variant="h6" noWrap>
                        Persistent drawer
                    </Typography>
                    <Button variant="contained" color="primary" onClick={savePalette}>Save Palette</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <Typography variant="h4">Create a Palette</Typography>
                <div>
                    <Button variant="contained" color="secondary">Clear Palette</Button>
                    <Button variant="contained" color="primary">Random Color</Button>
                </div>

                <ChromePicker
                    color={currentColor}
                    onChangeComplete={newColor => setCurrentColor(newColor.hex)}
                />
                <ValidatorForm onSubmit={handleSubmit}>
                    <TextValidator value={newColorName}
                        onChange={(e) => setNewColorName(e.target.value)}
                        validators={['required','isColorUnique', 'isColorNameUnique']}
                        errorMessages={['Enter a color name','Color already used', 'Color name must be unique']}
                    />
                    <Button variant="contained" color="primary" style={{ backgroundColor: currentColor }}
                        type="submit">
                        Add Color
                </Button>
                </ValidatorForm>

            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {colors.map(color => <DraggableColorBox color={color.color} name={color.name} />)}
            </main>
        </div>
    );
}
