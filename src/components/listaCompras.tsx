import * as React from 'react';
import Box from '../components/box';
import {dataListaCompras} from '../datosUsuarios';
import Icon12 from './Icon-msj/icon12';
import Icon13 from './Icon-msj/icon13';
import Icon14 from './Icon-msj/icon14';
import './estilosCss/Css010.css';

const style={
    titulo:{
        display: 'block',
        margin: '0 auto 10px auto',
        width: '80%',
        fontSize: '28px',
    },
    parrafo:{
        display: 'block',
        textAlign: 'justify',
        margin: '0 auto 20px auto',
        width: '80%',
        fontSize: '13px',
    } as React.CSSProperties,
    alimento:{
        margin: '0 0 0 0',
        padding: '0 0 0 20px',
    },
    grid:{
        display: 'grid',
        gridGap: '0px 15px',
        width: '80%',
        height: '300px',
        margin: '0 auto 20px auto',
        gridTemplateRows: '40px',
        gridTemplateColumns: '1fr 1fr 1fr',
        // border: '1px solid black',
    },
    gridInter1:{
        height: '310px',
        backgroundColor: '#badc58',
        borderRadius: '5px',
    },
    gridInter2:{
        height: '310px',
        backgroundColor: '#ffbe76',
        borderRadius: '5px',
    },
    gridInter3:{
        height: '310px',
        backgroundColor: '#ff7979',
        borderRadius: '5px',
    },
    gridTitulo1:{
        textAlign: 'center',
        fontSize: '22px',
        padding: '10px 0 0 0',
    } as React.CSSProperties,
}

export default class Listacompras extends React.Component{
    public render(){
        return(
            <div>
                <div className='box10'>
                    <h3 style={style.titulo}>Lista de compras</h3>
                    <p style={style.parrafo}>
                        Modifica tu lista de compras del día a día tanto en supermercados como
                        otros comercios. Realiza las siguientes modificaciones, para que nunca 
                        te falten alimentos importantes en tu despensa, y para limitar los alimentos
                        que puedan ser perjudiciales para tu salud.
                    </p>
                    <div className='grid-10'>
                        <div className='gridInter1-10'>
                            <h4 style={style.gridTitulo1}>Aumentar <Icon12/></h4>
                            <div>
                                <p className='alimento10' id="idListaCompAum1" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompAum2" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompAum3" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompAum4" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompAum5" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompAum6" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompAum7" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompAum8" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompAum9" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompAum10" {...dataListaCompras()}></p>
                            </div>
                        </div>
                        <div className='gridInter2-10'>
                            <h4 style={style.gridTitulo1}>Limitar <Icon13/></h4>
                            <div>
                                <p className='alimento10' id="idListaCompLim1" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompLim2" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompLim3" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompLim4" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompLim5" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompLim6" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompLim7" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompLim8" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompLim9" {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompLim10" {...dataListaCompras()}></p>
                            </div>
                        </div>
                        <div className='gridInter3-10'>
                            <h4 style={style.gridTitulo1}>Eliminar <Icon14/></h4> 
                            <div>
                                <p className='alimento10' id="idListaCompDis1"  {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompDis2"  {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompDis3"  {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompDis4"  {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompDis5"  {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompDis6"  {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompDis7"  {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompDis8"  {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompDis9"  {...dataListaCompras()}></p>
                                <p className='alimento10' id="idListaCompDis10"  {...dataListaCompras()}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}