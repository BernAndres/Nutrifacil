import React, {useState} from 'react';
import { addSyntheticLeadingComment } from 'typescript';

const style = {
    mensaje:{
        display: 'inline',
        position: 'absolute',
        borderRadius: '5px',
        padding: '10px',
        marginLeft: '4px',
        fontSize: '12px',
        maxWidth: '300px',
        textAlign: 'justify',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#f5f6fa',
    } as React.CSSProperties,
    espacio:{
        height: '5px',
    },
    lista:{
        padding: 'auto auto 0px auto',
        paddingLeft: '15px',
        margin: 'auto auto 0px 0px',
    }
};

export default function Mensaje24(){
    return(
        <div style={style.mensaje}>
        1 porción aporta en promedio:
        <ul style={style.lista}>
            <li>160 calorías.</li>
            <li>4 gr de carbohidratos.</li>
            <li>13 gr de lípidos (grasas).</li>
            <li>6 gr de proteína.</li>
        </ul>
        </div>
    );
}