import React from 'react';

export default function PaletteFotter(props){
    return (
        <footer className="Palette-footer">
            {props.paletteName} 
            <span className="Palette-emoji">{props.emoji}</span>
        </footer>
    )
}

