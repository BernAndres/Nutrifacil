import React, {useState} from 'react';
import { addSyntheticLeadingComment } from 'typescript';
import '../estilosCss/Css017.css';
import Flexi from '../flexi';

const style = {
    mensaje:{
        display: 'inline',
        position: 'absolute',
        borderRadius: '5px',
        padding: '10px',
        marginLeft: '4px',
        fontSize: '12px',
        width: '450px',
        textAlign: 'justify',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#f5f6fa',
    } as React.CSSProperties,
    espacio:{
        height: '5px',
    },
    grid:{
        display: 'grid',
        gridTemplateRows: '20px 20px 20px 20px 20px 20px',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
    gridItem:{
        border: '1px solid #95a5a6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    } as React.CSSProperties,
};

export default function Mensaje26(){
    return(
        <div className='mensaje26-17'>
        Una porción de lácteo tendrá un diferente valor nutricional, dependiendo
        de si es un lácteo alto en grasa (ej: queso amarillo), medio en grasa (ej: leche semidescremada),
        o bajo en grasa (ej: quesillo). 1 porción de lácteos altos, medianos y bajos en grasa aportará:
        <div className='grid26-17'>
            <div style={style.gridItem}></div>
            <div style={style.gridItem}>Altos en grasa</div>
            <div style={style.gridItem}>Medios en grasa</div>
            <div style={style.gridItem}>Bajos en grasa</div>
            <div style={style.gridItem}>Calorías:</div>
            <div style={style.gridItem}>110 cal</div>
            <div style={style.gridItem}>85 cal</div>
            <div style={style.gridItem}>70 cal</div>
            <div style={style.gridItem}>Carbohidratos:</div>
            <div style={style.gridItem}>9 gr</div>
            <div style={style.gridItem}>9 gr</div>
            <div style={style.gridItem}>10 gr</div>
            <div style={style.gridItem}>Lípidos (grasas):</div>
            <div style={style.gridItem}>6 gr</div>
            <div style={style.gridItem}>3 gr</div>
            <div style={style.gridItem}>0 gr</div>
            <div style={style.gridItem}>Proteína:</div>
            <div style={style.gridItem}>5 gr</div>
            <div style={style.gridItem}>5 gr</div>
            <div style={style.gridItem}>7 gr</div>
            <div style={style.gridItem}>Calcio:</div>
            <div style={style.gridItem}>200 mg</div>
            <div style={style.gridItem}>200 mg</div>
            <div style={style.gridItem}>200 mg</div>
        </div>
        </div>
    );
}