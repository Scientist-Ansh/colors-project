import React ,{Component} from 'react';

import MiniPalette from './MiniPalette';

import {withStyles} from '@material-ui/styles';


const styles = {
    root:{
       background:"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
       backgroundSize: "400% 400%",
       animation: "$gradient 15s ease infinite",
       display:'flex',
       height:'100vh',
       alignItems:'flex-start',
       justifyContent:'center',
    },
    "@keyframes gradient":{
        "0%": {
            backgroundPosition: "0% 50%",
        },
        "50%": {
            backgroundPosition: "100% 50%",
        },
        "100%": {
            backgroundPosition: "0% 50%"
        }
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
        this.props.history.push(`/palette/${id}`);
    }

    render(){
        const {classes} = this.props
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>Color Palletes</h1>
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