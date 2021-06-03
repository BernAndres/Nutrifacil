import * as React from 'react';
import grafico from '../assets/img/grafico.jpg';
import {dataMediciones} from '../datosUsuarios';
import Icon30 from './Icon-msj/icon30';
import './estilosCss/Css012.css';

const style ={
    titulo:{
        fontSize: '25px',
        width: '70%',
        display: 'block',
        margin: '20px auto 10px auto',

    },
    grafico:{
        width: '70%',
        height: '180px',
        display: 'block',
        margin: '0 auto 0 auto',
        border: '1px solid black',
    },
    img:{
        width: '100%',
        height: '100%',
    },
    icon:{
        color: '#636e72',
        fontSize: '20px',
        cursor: 'pointer',
    },
    parrafo:{
        margin: '0 0 0 0',
    }
}

export default class PerimetrosMediciones extends React.Component{
    public render(){
        return(
                <div>
                    <h4 style={style.titulo}>Perímetros corporales <Icon30/></h4>
                    <div className='containerParrafo12'>
                        <p style={style.parrafo}>Perimetro del brazo flexionado: <span id='idPerBF' {...dataMediciones()} /></p>
                        <p style={style.parrafo}>Perimetro del brazo relajado: <span id='idPerBR' {...dataMediciones()} /></p>
                        <p style={style.parrafo}>Perimetro de cintura: <span id='idPerCin' {...dataMediciones()} /></p>
                        <p style={style.parrafo}>Perimetro de gluteos: <span id='idPerGlu' {...dataMediciones()} /></p>
                        <p style={style.parrafo}>Perimetro de pierna: <span id='idPerPie' {...dataMediciones()} /></p>
                    </div>
                    <div style={style.grafico}>
                        <img src={grafico} style={style.img}/>
                    </div>
                </div>
        )
    }
}