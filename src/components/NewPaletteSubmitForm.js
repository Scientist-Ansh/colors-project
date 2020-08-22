import React from 'react';

// dialog
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function NewPaletteSubmitForm(props) {
    const { savePalette, newPaletteName, handleNewPaletteName } = props
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button style={{marginRight:"1rem"}} variant="contained" color="primary" onClick={handleClickOpen}>
                Save
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Palette Name</DialogTitle>
                <ValidatorForm onSubmit={savePalette}>
                    <DialogContent>
                        <DialogContentText>
                            Please enter the name of your new Palette.
                        </DialogContentText>
                        <TextValidator value={newPaletteName}
                            fullWidth
                            autoFocus
                            label="Palette Name"
                            onChange={(e) => handleNewPaletteName(e.target.value)}
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["Enter a Palette name", "Palette name already taken"]} />


                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                    </Button>
                        <Button variant="contained" color="primary" type="submit">
                            Save Palette
                    </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>
    );
}
