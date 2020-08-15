import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import {styles} from './styles/ColorBox';



class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        };
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1700);
        })
    }
    render() {
        const { name, background, showAllColors, classes } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <div style={{ background }} className={classes.colorBox}>
                    <div className={`${classes.copyMessage} ${copied && classes.showCopyMessage}`}>
                        <h1 className={classes.darkText} style={{ margin: 0 }}>copied!!</h1>
                        <p className={classes.darkText} style={{ marginTop: "25px" }}>{background}</p>
                    </div>

                    <div style={{ background }}
                        className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}>
                    </div>

                    <button className={classes.copyButton}>Copy</button>
                    <span className={classes.colorName}>{name}</span>
                    <div className={classes.seeMore}>
                        {
                            showAllColors &&
                            <Link
                                to={showAllColors}
                                className={classes.darkText}
                                style={{ textDecoration: "none" }}
                                onClick={e => e.stopPropagation()}>
                                More
                            </Link>
                        }

                    </div>
                </div>
            </CopyToClipboard>

        )
    }
}

export default withStyles(styles)(ColorBox);