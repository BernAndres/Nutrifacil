import React, {useState} from 'react';
import { addSyntheticLeadingComment } from 'typescript';
import '../estilosCss/Css017.css';

const style = {
    mensaje:{
        display: 'inline',
        position: 'absolute',
        borderRadius: '5px',
        padding: '10px',
        marginLeft: '4px',
        fontSize: '12px',
        width: '300px',
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

export default function Mensaje23(){
    return(
        <div className='mensaje23-17'>
        Los siguientes alimentos pertenecen a grupos de alimentos <b>distintos, </b> 
        por lo que sus porciones no son equivalentes. Puedes añadirlos a tus comidas
        del desayuno y merienda, recuerda consumirlos de forma <b>variada.</b>    
        </div>
    );
}