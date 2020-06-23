import React ,{Component} from 'react';

import MiniPalette from './MiniPalette';

import {withStyles} from '@material-ui/styles';

import {Link} from 'react-router-dom';
import { blue } from '@material-ui/core/colors';



const styles = {
    root:{
       background:'blue',
       display:'flex',
       height:'100vh',
       alignItems:'flex-start',
       justifyContent:'center',
    },
    container:{
        width:'60%',
        display:'flex',
        flexFlow:'column wrap',
        alignItems:'flex-start'
    },
    nav:{
        color:'white',
        width:'100%',
       display:'flex',
       justifyContent:'space-between'
    },
    palettes:{
        width:'100%',
        display:'grid',
        gridTemplateColumns:'repeat(3,30%)',
        gridGap:'5%'
    }
}
class PaletteList extends Component{

    handleClick(id){
        console.log('clicked');
        this.props.history.push(`/palette/${id}`);
    }

    render(){
        const {classes} = this.props
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {this.props.palettes.map((palette)=>
                            <MiniPalette {...palette} key={palette.id} handleClick={()=>this.handleClick(palette.id)}/>
                        )}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);