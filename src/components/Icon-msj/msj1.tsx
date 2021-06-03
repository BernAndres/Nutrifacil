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

export default function Mensaje1(){
    return(
        <p className='mensaje1-17'>
            <b>1 porción de cereales (o carbohidratos) equivale a:</b> <br/>
            1/2 pan hallulla o marraqueta, 3 rebanadas de pan de molde, 1/2 taza de avena,
            8 galletas de soda o de agua.
            <div style={style.espacio}></div>
            <i>*Para conocer más porciones revisa el final de esta página.</i> 

        </p>
            
    );
}