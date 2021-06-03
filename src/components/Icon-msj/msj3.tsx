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

export default function Mensaje3(){
    return(
        <p className='mensaje1-17'>
            <b>1 porción de altos en calcio equivale a:</b> <br/>
            <b>1-Altos en calcio tipo lácteos: </b> Leche fluida 1 taza de 200cc,
            leche en polvo 2 cdas colmadas o 3 cdas rasas, queso amarillo 1/2 lámina,
            yogurt 1 unidad, quesillo 3 rebanadas de 1 cm cada una. <br/>
            <b>2-Altos en calcio aptos para veganos: </b> Semillas de chía,  amapola o sésamo
            2 cdas 1/2, almendras 26 unidades, tofu 1 rebanada, leche vegetal 1 taza de 200cc. <br/>
            <div style={style.espacio}></div>
            <i>*Para conocer más porciones revisa el final de esta página.</i> 

        </p>
            
    );
}