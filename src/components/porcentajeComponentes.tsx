import * as React from 'react';
import torta from '../assets/img/torta.png';
import {dataMediciones} from '../datosUsuarios';
import Icon32 from './Icon-msj/icon32';

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
        fontSize: '24px',
        width: '85%',
        display: 'block',
        margin: '20px auto 5px auto',
        padding: '10px 0 0 0',
        

    },
    icon:{
        color: '#636e72',
        fontSize: '20px',
        cursor: 'pointer',
    },
    parrafo:{
        fontSize: '14px',
        width: '85%',
        display: 'block',
        margin: '10px auto 0px auto',
        textAlign: 'justify',
    } as React.CSSProperties,
    grid:{
        display: 'grid',
        width: '80%',
        margin: '0 auto 0 auto',
        gridTemplateRows: '30px 30px 30px 30px',
        gridTemplateColumns: '2fr 1fr 1fr',
    },
    pCentrado:{
        textAlign: 'center',
    } as React.CSSProperties,
    torta:{
        borderRadius: '45px',
        height: '200px',
        width: '200px',
        display: 'block',
        margin: '30px auto 0 auto'
    },
}

export default class PorcentajeComponentes extends React.Component{
    public render(){
        return(
                <div style={style.container}>
                    <h4 style={style.titulo}>Componentes corporales <Icon32/></h4>
                    <p style={style.parrafo}>
                        El índice de masa corporal (IMC) nos indica nuestro estado nutricional.
                    </p>
                    <div style={style.grid}>
                        <p></p>
                        <p style={style.pCentrado}>Porcentaje</p>
                        <p style={style.pCentrado}>KG</p>
                        <p>Masa muscular</p>
                        <p style={style.pCentrado}><span id='idMasaMusc1' {...dataMediciones()}/></p>
                        <p style={style.pCentrado}><span id='idMasaMusc2' {...dataMediciones()}/></p>
                        <p>Masa grasa</p>
                        <p style={style.pCentrado}><span id='idMasaGrasa1' {...dataMediciones()}/></p>
                        <p style={style.pCentrado}><span id='idMasaGrasa2' {...dataMediciones()}/></p>
                        <p>Masa osea</p>
                        <p style={style.pCentrado}><span id='idMasaOsea1' {...dataMediciones()}/></p>
                        <p style={style.pCentrado}><span id='idMasaOsea2' {...dataMediciones()}/></p>
                    </div>
                    <img src={torta} style={style.torta}/>
                </div>
        )
    }
}