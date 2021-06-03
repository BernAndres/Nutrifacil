import * as React from 'react';
import grafico from '../assets/img/grafico.jpg';
import {dataMediciones} from '../datosUsuarios';
import Icon28 from './Icon-msj/icon28';

const style ={
    container:{
        margin: '0 0 25px 0',
    },
    titulo:{
        fontSize: '25px',
        width: '70%',
        display: 'block',
        margin: '55px auto 20px auto',

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
    }
}

export default class PesoMediciones extends React.Component{
    public render(){
        return(
                <div style={style.container}>

                    <h4 style={style.titulo}>Peso: <span id="idPeso" {...dataMediciones()}></span> 
                    <Icon28/></h4>

                    <div style={style.grafico}>
                        <img src={grafico} style={style.img}/>
                    </div>

                </div>
        )
    }
}