import React, {useState} from 'react';
import '../estilosCss/Css017.css';

const style = {
    mensaje:{
        display: 'inline',
        position: 'absolute',
        borderRadius: '5px',
        padding: '6px',
        marginLeft: '4px',
        fontSize: '12px',
        maxWidth: '310px',
        textAlign: 'justify',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#f5f6fa',
    } as React.CSSProperties,
    espacio:{
        height: '5px',
    }
};

export default function Mensaje8(){
    return(
        <p  className='mensaje1-17'>
            <b>1 porción de alimentos altos en proteína equivale a:</b> <br/>
            <b>1-Proteínas de fuente animal: </b> Carne de vacuno trozo de 6x6x1 cm, 
            carne de ave (pollo/pavo) trozo de 6x6x1 cm, pescado trozo de 10x6x1 cm, huevo 1 unidad. <br/>
            <b>2-Proteínas de fuente vegetal: </b> Lentejas cocidas 3/4 taza, garbanzos cocidos 3/4 taza,
            porotos cocidos 3/4 taza, carne de soja cruda 1/2 taza, hamburguesa vegetal 1/2 unidad. <br/>
            <div style={style.espacio}></div>
            <i>*Para conocer más porciones revisa el final de esta página.</i> 
        </p>
            
    );
}