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

export default function Mensaje4(){
    return(
        <p className='mensaje1-17'>
            <b>1 porción de frutas equivale a:</b> <br/>
            Manzana 1 unidad pequeña, durazno 1 unidad pequeña, plátano 1/2 unidad, frutillas 1 taza
            de 200cc, cerezas 15 unidades, kiwi 2 unidades pequeñas, pera 1 unidad pequeña. <br/>
            <div style={style.espacio}></div>
            <i>*Para conocer más porciones revisa el final de esta página.</i> 
        </p>
            
    );
}