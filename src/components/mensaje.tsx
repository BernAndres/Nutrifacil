import React, {useState} from 'react';

const style = {
    mensaje:{
        display: 'inline',
        position: 'absolute',
        backgroundColor: '#a29bfe',
        borderRadius: '5px',
        padding: '3px',
        marginLeft: '2px',
        fontSize: '12px',
        maxWidth: '250px',
        justifyContent: 'justify',
    } as React.CSSProperties,
};

export default function Mensaje(){
    return(
        <div style={style.mensaje}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, alias!
        </div>
            
    );
}