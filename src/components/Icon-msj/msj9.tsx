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

export default function Mensaje9(){
    return(
        <p  className='mensaje1-17'>
            <b>1 porción de verduras equivale a:</b> <br/>
            <span style={{color: '#4cd137'}}>Acelga cocida 1/2 taza, brócoli 1 taza, repollitos de bruselas 1/2 taza, 
            coliflor 1 taza, </span>alcachofa 1 unidad chica, zapallo italiano 1 taza, tomate 1 unidad mediana,
            esparragos 5 unidades. <br/>
            <div style={style.espacio}></div>
            <i  style={{color: '#4cd137'}}>*Verduras con mayor aporte de  calcio.</i><br/>
            <i>*Para conocer más porciones revisa el final de esta página.</i> 
        </p>
            
    );
}