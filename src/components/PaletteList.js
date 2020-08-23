import React, { Component } from 'react';

import MiniPalette from './MiniPalette';

import {Link} from 'react-router-dom';

import {styles} from './styles/PaletteList';
import { withStyles } from '@material-ui/styles';


class PaletteList extends Component {

    handleClick(id) {
        this.props.history.push(`/palette/${id}`);
    }

    render() {
        const { classes,deletePalette } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>Color Palletes</h1>
                        <Link to='/palette/new'>Create new</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {this.props.palettes.map((palette) =>
                            <MiniPalette {...palette}
                            key={palette.id}
                            id={palette.id}
                            deletePalette = {deletePalette}
                            handleClick={() => this.handleClick(palette.id)} />
                        )}
                    </div>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);