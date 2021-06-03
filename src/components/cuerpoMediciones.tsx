import * as React from 'react';
import PesoMediciones from '../components/pesoMediciones';
import PlieguesMediciones from './plieguesMediciones';
import PerimetrosMediciones from './perimetrosMediciones';
import Imc from "./imc";
import PorcentajeComponentes from './porcentajeComponentes';
import './estilosCss/Css012.css';


const style ={
    grid:{
        display: 'grid',
        gridTemplateColumns: '5fr 3fr',
        width: '100%',
        height: 'auto',
    },
    gridLeft:{
        // backgroundColor: '#ffeaa7',
        // border: '1px solid black',
    },
    gridRight:{
        // backgroundColor: '#fab1a0',
        // border: '1px solid black',
    },
}

export default class CuerpoMediciones extends React.Component{
    public render(){
        return(
                <div className='grid12'>
                    <div style={style.gridLeft}>
                        {/* <BarChart/> */}
                        <PesoMediciones/>
                        <PlieguesMediciones/>
                        <PerimetrosMediciones/>
                    </div>
                        {/* <Imc/> */}
                    <div style={style.gridRight}>
                        <Imc/>
                        <PorcentajeComponentes/>
                    </div>
                </div>
        )
    }
}