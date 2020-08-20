import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer( ({ colors,handleDelete }) => {
    return (
        <div style={{height:"100%"}}>
            {
                colors.map((color,i) =>
                    <DraggableColorBox
                        index={i}
                        key={color.name}
                        color={color.color} name={color.name}
                        deleteBox={() => handleDelete(color.name)}
                    />
                )}
        </div>

    );
})
export default DraggableColorList;