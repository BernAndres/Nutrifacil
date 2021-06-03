import * as React from 'react';
import grafico from '../assets/img/grafico.jpg';
import {dataMediciones} from '../datosUsuarios';
import Icon29 from './Icon-msj/icon29';
import './estilosCss/Css012.css';

const style ={
    container:{
        margin: '0 0 25px 0',
    },
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
        margin: '0 0 0 5px',
    },
    parrafo:{
        margin: '0 0 0 0',
    }
}

export default class PlieguesMediciones extends React.Component{
    public render(){
        return(
                <div style={style.container}>
                    <h4 style={style.titulo}>Pliegues cuataneos <Icon29/></h4>
                    <div className='containerParrafo12'>
                        <p style={style.parrafo}>Pliegue bicipital: <span id='idPliBic' {...dataMediciones()}/></p>
                        <p style={style.parrafo}>Pliegue tricipital: <span id='idPliTri' {...dataMediciones()}/></p>
                        <p style={style.parrafo}>Pliegue subescapular: <span id='idPliSub' {...dataMediciones()}/></p>
                        <p style={style.parrafo}>Pliegue cresta iliacca: <span id='idPliCI' {...dataMediciones()}/></p>
                        <p style={style.parrafo}>Pliegue supraespinal: <span id='idPliSup' {...dataMediciones()}/></p>
                        <p style={style.parrafo}>Pliegue abdominal: <span id='idPliAbd' {...dataMediciones()}/></p>
                        <p style={style.parrafo}>Pliegue muslo anterior: <span id='idPliMA' {...dataMediciones()}/></p>
                        <p style={style.parrafo}>Pliegue pierna medial: <span id='idPliPM' {...dataMediciones()}/></p>
                    </div>
                    <div style={style.grafico}>
                        <img src={grafico} style={style.img}/>
                    </div>
                </div>
        )
    }
}