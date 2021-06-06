import * as React from 'react';
import PesoMediciones from '../components/pesoMediciones';
import PlieguesMediciones from './plieguesMediciones';
import PerimetrosMediciones from './perimetrosMediciones';
import Imc from "./imc";
import PorcentajeComponentes from './porcentajeComponentes';
import BarChart from './graficos/grafico1';
import './estilosCss/Css012.css';

export default class CuerpoMediciones extends React.Component{
    public render(){
        return(
                <div className='grid12'>
                    <div>
                        <BarChart/>
                        <PesoMediciones/>
                        <PlieguesMediciones/>
                        <PerimetrosMediciones/>
                    </div>
                    <div>
                        <Imc/>
                        <PorcentajeComponentes/>
                    </div>
                </div>
        )
    }
}