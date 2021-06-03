import React, {useState} from 'react';
import Icon0 from './icon0';
import '../estilosCss/Css017.css';

const style = {
    mensaje:{
        display: 'inline',
        position: 'absolute',
        borderRadius: '5px',
        padding: '10px',
        marginLeft: '4px',
        fontSize: '12px',
        maxWidth: '400px',
        textAlign: 'justify',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#f5f6fa',
    } as React.CSSProperties,
    espacio:{
        height: '5px',
    }
};

export default function Mensaje11(){
    return(
        <span className='mensaje4-17'>
            El siguiente ciclo de videos está diseñado especialmente para fortalecer
            tus conocimientos sobre nutrición vegetariana y vegana. En este ciclo de videos 
            abordaremos las bases de la nutrición basada en plantas, como adquirir todos
            los nutricientes esenciales y evitar las posibles deficiencias asosiadas 
            con este tipo de alimentación. Al completar este ciclo de videos habrás avanzado 
            un gran paso para convertirte en un experto de la nutrición vegetariana o vegana.
        </span>
            
    );
}