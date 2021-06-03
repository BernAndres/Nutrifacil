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
        <span className='mensaje2-17'>
            Consume en cada tiempo de comida los grupos de alimentos
            indicados en la porcion indicada. <br/>
            <div style={style.espacio}></div>
            <b>Ejemplo: </b> Si nuestro plan nutricional nos indica en el <b>desayuno</b> 2 porciones
            de cereales más 2 porciones de agregados, entonces esto podría equivaler a: <br/>
            <div style={style.espacio}></div>
            <b>Opción 1: </b>1 pan hallulla con 1 cda 1/2 de palta y 3 rebanadas de quesillo. <br/>
            <div style={style.espacio}></div>
            <b>Opción 2: </b>4 rebanadas de pan de molde con 2 huevos revueltos. <br/>
            <div style={style.espacio}></div>
            <b>Puedes conocer más porciones de cada grupo de alimento revisando el icono "<Icon0/>"
            o dirigiendote al final de esta página.</b>
        </span>
            
    );
}