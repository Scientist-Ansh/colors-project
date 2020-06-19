import chroma from 'chroma-js';

const levels = [50,100,200,300,400,500,600,700,800,900];


function generateColors(palette){
    let newPalette = {...palette,colors:{}};

    for (let level of levels){
        newPalette.colors[level]=[];
    }

    for(let color of palette.colors){
        let colors  = getColors(color.color,10).reverse();
        for(let i in colors){
            newPalette.colors[levels[i]].push({
                name:`${color.name} ${levels[i]}`,
                id:color.name.toLowerCase().replace(/ /g,'-'),
                hex:colors[i],
                rgb:chroma(colors[i]).css(),
                rgba:chroma(colors[i]).css().replace('rgb','rgba').replace(')',',1.0)')
            });
        }
        
    }  
    return newPalette;
}

function getRange(hexColor){
    return [chroma(hexColor).darken(1.4).hex(), hexColor, "#fff"]
}

function getColors(hexColor, numberOfColors){
    return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

export {generateColors};