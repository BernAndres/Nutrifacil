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
        maxWidth: '250px',
        textAlign: 'justify',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#f5f6fa',
    } as React.CSSProperties,
    espacio:{
        height: '5px',
    }
};

export default function Mensaje12(){
    return(
        <p className='mensaje3-17'>
         Incorpora los siguientes alimentos en tu lista de compras y en tu alimentación, para 
         tener una dieta más variada y rica en nutrientes, como vitaminas y minerales.
        </p>
            
    );
}