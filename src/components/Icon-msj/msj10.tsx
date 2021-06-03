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

export default function Mensaje10(){
    return(
        <p className='mensaje1-17'>
            <b>1 porción de verduras de libre consumo equivale a:</b> <br/>
            <span style={{color: '#4cd137'}}>Achicoria 1 taza, endivia 1 taza, acelga cruda 1 taza, 
            repollo 1 taza, </span>pimentón rojo/verde 1/2 taza, espinaca cruda 1 taza, lechuga 1 taza. <br/>
            <div style={style.espacio}></div>
            <i  style={{color: '#4cd137'}}>*Verduras con mayor aporte de calcio.</i><br/>
            <i>*Para conocer más porciones revisa el final de esta página.</i> 
        </p>
            
    );
}