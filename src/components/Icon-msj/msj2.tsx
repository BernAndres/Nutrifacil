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

export default function Mensaje2(){
    return(
        <p className='mensaje1-17'>
            <b>1 porción de agregados equivale a:</b> <br/> 
            <b>1-Agregados todo tipo de alimento: </b>
            Huevo 1 unidad,  palta 1 cda 1/2, quesillo 3 rebanadas de 1 cm, queso 1/2 lámina.  <br/>
            <b>2-Agregados aptos para veganos: </b> 
            Hummus 1 cdas 1/2, crema de maní 1 cda, tofu 1 rebanada de 2 cm, palta 1 cda 1/2. <br/>
            <div style={style.espacio}></div>
            <i>*Para conocer más porciones revisa el final de esta página.</i> 
        </p>
            
    );
}