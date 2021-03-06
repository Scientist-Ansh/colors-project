import React, { useState, useEffect } from 'react';

import DraggableColorList from './DraggableColorList';
import NewPaletteFormNav from './NewPaletteFormNav';


// drawer Component
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';

import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { arrayMove } from 'react-sortable-hoc';
import {useStyles} from './styles/NewPaletteForm';


export default function NewPaletteForm(props) {
    const [currentColor, setCurrentColor] = useState("#FF0039");
    const [colors, setColors] = useState([...props.palettes[0].colors]);
    const [newColorName, setNewColorName] = useState("")
    const [newPaletteName, setNewPaletteName] = useState("")


    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const isPaletteFull = colors.length >= 20;

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
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
            const answer = props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase());
            return answer;
        });
    }, [colors, currentColor])

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

    const savePalette = (emoji) => {
        const newName = newPaletteName;
        const id = newName.toLowerCase().replace(' ', '-')
        const newPalette = { id: id, paletteName: newName, colors: colors,emoji:emoji}
        props.savePalette(newPalette);
        props.history.push('/')
    }

    const handleDelete = (name) => {
        setColors(colors.filter(color => color.name != name));
    }

    const onSortEnd = ({ oldIndex, newIndex }) => {
        let newColors = arrayMove(colors, oldIndex, newIndex);
        setColors(newColors);
    };

    const addRandomColor = () => {
        let paletteIndex = Math.floor(Math.random() * props.palettes.length);
        let randomColors = props.palettes[paletteIndex].colors;
        let colorIndex = Math.floor(Math.random() * randomColors.length);
        setColors([...colors, randomColors[colorIndex]]);
    }

    return (
        <div className={classes.root}>
            <NewPaletteFormNav
                classes={classes}
                handleDrawerOpen={handleDrawerOpen}
                savePalette={savePalette}
                newPaletteName={newPaletteName}
                open={open}
                handleNewPaletteName={(name) => setNewPaletteName(name)}
            />
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
                <div className={classes.drawerBody}>
                    <Typography variant="h4" gutterBottom>Create a Palette</Typography>
                    <div className={classes.btns}>
                        <Button variant="contained" color="secondary" onClick={() => setColors([])}>Clear Palette</Button>
                        <Button  variant="contained" color="primary"
                            onClick={addRandomColor} disabled={isPaletteFull}>
                            Random Color
                    </Button>
                    </div>

                    <ChromePicker className={classes.chromePicker}
                        color={currentColor}
                        onChangeComplete={newColor => setCurrentColor(newColor.hex)}
                    />
                    <ValidatorForm className={classes.form} onSubmit={handleSubmit} >
                        <TextValidator value={newColorName}
                            label="Color Name"
                            variant="filled"
                            fullWidth
                            onChange={(e) => setNewColorName(e.target.value)}
                            validators={['required', 'isColorUnique', 'isColorNameUnique']}
                            errorMessages={['Enter a color name', 'Color already used', 'Color name must be unique']}
                        />
                        <Button
                            className={classes.addButton}
                            variant="contained"
                            color="primary"
                            style={{ backgroundColor: isPaletteFull ? "lightgrey" : currentColor }}
                            type="submit"
                            disabled={isPaletteFull}
                            size="large">
                            {isPaletteFull ? "Palette full" : "Add Color"}
                        </Button>
                    </ValidatorForm>
                </div>

            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <DraggableColorList colors={colors} handleDelete={handleDelete}
                    axis="xy" onSortEnd={onSortEnd}
                />
            </main>
        </div>
    );
}
