import * as React from 'react';
import grafico from '../assets/img/grafico.jpg';
import imc from '../assets/img/imc.jpg';
import {dataMediciones} from '../datosUsuarios';
import Icon31 from './Icon-msj/icon31';

const style ={
    container:{
        backgroundColor: '#f1f2f6',
        width: '80%',
        height: '480px',
        display: 'block',
        margin: '50px auto 0 auto',
        // border: '5px solid black',
        borderRadius: '30px',
    },
    titulo:{
        fontSize: '25px',
        width: '70%',
        display: 'block',
        margin: '20px auto 5px auto',
        padding: '10px 0 0 0',

    },
    contImg:{
        width: '80%',
        height: '150px',
        display: 'block',
        margin: '0 auto 0 auto',
        // border: '1px solid black',
    } as React.CSSProperties,
    img:{
        width: '100%',
        height: '100%',
        borderRadius: '15px',
    },
    icon:{
        color: '#636e72',
        fontSize: '20px',
        cursor: 'pointer',
    },
    parrafo:{
        fontSize: '14px',
        width: '80%',
        display: 'block',
        margin: '20px auto 5px auto',
        textAlign: 'justify',
    } as React.CSSProperties,
    imcClasificacion:{
        display: 'grid',
        margin: '10px 0 0 0',
        gridTemplateRows: '30px 30px 30px 30px 30px 30px',
        gridTemplateColumns: '1fr 1fr',
    },
    parrafoImc1:{
        margin: '0 0 0 15px',
    },
    parrafoImc2:{
        margin: '0 0 0 10px',
    },
    iconAzul:{
        color: '#70a1ff',
        margin: '0 5px 0 0',
    },
    iconVerde:{
        color: '#7bed9f',
        margin: '0 5px 0 0',
    },
    iconAmarillo:{
        color: '#ffeaa7',
        margin: '0 5px 0 0',
    },
    iconNaranjo:{
        color: '#fa983a',
        margin: '0 5px 0 0',
    },
    iconRojo:{
        color: '#fc5c65',
        margin: '0 5px 0 0',
    },
}

export default class Imc extends React.Component{
    public render(){
        return(
                <div style={style.container}>
                    <h4 style={style.titulo}>IMC: <span id='idIMC' {...dataMediciones()}>
                        </span><Icon31/></h4>
                    <p style={style.parrafo}>
                        El índice de masa corporal (IMC) nos indica nuestro estado nutricional.
                    </p>
                    <div style={style.contImg}>
                        <img src={imc} style={style.img}/>
                        <div style={style.imcClasificacion}>
                            <p style={style.parrafoImc1}>Valor IMC:</p>
                            <p style={style.parrafoImc1}>Interpretación:</p>
                            <p style={style.parrafoImc2}>
                                <i className="fas fa-male" style={style.iconAzul}></i>
                                Menor a 18.5
                            </p>
                            <p style={style.parrafoImc2}>Bajo peso</p>
                            <p style={style.parrafoImc2}>
                                <i className="fas fa-male" style={style.iconVerde}></i>
                                18.5-24.9
                            </p>
                            <p style={style.parrafoImc2}>Saludable</p>
                            <p style={style.parrafoImc2}>
                                <i className="fas fa-male" style={style.iconAmarillo}></i>
                                25-29.9
                            </p>
                            <p style={style.parrafoImc2}>Sobrepeso</p>
                            <p style={style.parrafoImc2}>
                                <i className="fas fa-male" style={style.iconNaranjo}></i>
                                30-34.9
                            </p>
                            <p style={style.parrafoImc2}>Obesidad tipo 1</p>
                            <p style={style.parrafoImc2}>
                                <i className="fas fa-male" style={style.iconRojo}></i>
                                35-39.9
                            </p>
                            <p style={style.parrafoImc2}>Obesidad tipo 2</p>
                        </div>
                    </div>
                </div>
        )
    }
}