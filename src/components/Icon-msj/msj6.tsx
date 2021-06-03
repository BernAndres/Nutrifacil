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
        maxWidth: '300px',
        textAlign: 'justify',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#f5f6fa',
    } as React.CSSProperties,
    espacio:{
        height: '5px',
    }
};

export default function Mensaje6(){
    return(
        <p  className='mensaje1-17'>
            <b>1 porción de aceites o grasas equivale a: </b> <br/>
            <b>1-Aceites: </b> Aceite de oliva, canola, colza, maravilla, maiz o colza 2 cucharadas 
            o 4 cucharaditas. <br/>
            <b>2-Grasas: </b> Margarina 4 cdtas, margarina diet 4 cdtas, mayonesa 1 cda, 
            <span style={{color: '#ff4d4d'}}> mantequilla 4 cdtas, manteca de cerdo/chicharrones 2 cdas, grasa 
            animal 2 cdas.</span> <br/>
            <div style={style.espacio}></div>
            <i  style={{color: '#ff4d4d'}}>*Alto aporte de grasas saturadas (limitar consumo).</i> <br/>
            <i>*Para conocer más porciones revisa el final de esta página.</i> 
        </p>
            
    );
}