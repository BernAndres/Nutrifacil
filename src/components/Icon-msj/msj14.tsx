import React, {useState} from 'react';
import '../estilosCss/Css017.css';

const style = {
    mensaje:{
        display: 'inline',
        position: 'absolute',
        borderRadius: '5px',
        padding: '10px',
        marginLeft: '4px',
        fontSize: '12px',
        maxWidth: '250px',
        textAlign: 'justify',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#f5f6fa',
    } as React.CSSProperties,
    espacio:{
        height: '5px',
    }
};

export default function Mensaje14(){
    return(
        <p className='mensaje3-17'>
        Los siguientes alimentos pueden ser poco saludables o representar un riesgo para 
        tu salud, por lo que debes eliminarlos de tu dieta. Puedes eliminarlos progresivamente,
        disminuyendo su frecuencia y cantidad de consumo de forma paulatina. Es más deseable 
        que la eliminación sea lenta pero definitiva, que rápida pero solo por corto tiempo.

         
        </p>
            
    );
}