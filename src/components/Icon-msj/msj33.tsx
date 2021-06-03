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
            El siguiente ciclo de videos está diseñado especialmente para
            fortalecer tus conocimientos acerca de la nutrición, proporcionandote
            una base sólida y derribando mitos y creencias populares erroneas. Al completar 
            la totalidad de estos videos habrás avanzado un gran paso para convertirte
            en un experto de la nutrición.
        </span>
            
    );
}