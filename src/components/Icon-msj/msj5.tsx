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

export default function Mensaje5(){
    return(
        <p className='mensaje1-17'>
            <b>1 porción de frutos secos o semillas equivale a:</b> <br/>
            Nueces 5 unidades, almendras 26 unidades, pistachos 40 unidades, avellanas 50 unidades,
            semillas de sésamo, amapola, chía, maravilla o zapallo 2 cucharadas 1/2. <br/>
            <div style={style.espacio}></div>
            <i>*Para conocer más porciones revisa el final de esta página.</i> 
        </p>
            
    );
}