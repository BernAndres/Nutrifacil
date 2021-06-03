import React, {useState} from 'react';
import Box from '../components/box';
import Titulo from './titulo';
import {dataDesayuno, dataAlmuerzo, dataOnce, dataCena} from '../datosUsuarios';
import Icon from './icon';
import Icon0 from './Icon-msj/icon0';
import Icon1 from './Icon-msj/icon1';
import Icon2 from './Icon-msj/icon2';
import Icon3 from './Icon-msj/icon3';
import Icon4 from './Icon-msj/icon4';
import Icon5 from './Icon-msj/icon5';
import Icon6 from './Icon-msj/icon6';
import Icon7 from './Icon-msj/icon7';
import Icon8 from './Icon-msj/icon8';
import Icon9 from './Icon-msj/icon9';
import Icon10 from './Icon-msj/icon10';
import Icon11 from './Icon-msj/icon11';
import './estilosCss/Css008.css';

const style={
    titulo:{
        // background: '#9b59b6',
        display: 'block',
        margin: '0 auto 10px auto',
        width: '80%',
        fontSize: '28px',
    },
    parrafo:{
        display: 'block',
        margin: '0 auto 0 auto',
        width: '80%',
        fontSize: '13px',
        textAlign: 'justify',
    } as React.CSSProperties,
    gridContainer:{
        display: 'block',
        margin: '20px auto 0 auto',
        width: '80%',
        borderRadius: '4px',
    },
    gridCuadro:{
        width: '100%',
        display: 'grid',
        // gridTemplateRows: '40px 35px 35px 35px 35px 35px 35px',
        // alignItems: 'center',
        padding: '0px 0px 0px 0px',
        margin: '0px 0px 0px 0px',
    },
    gridT:{
        backgroundColor: '#BFFFB5',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr',
        minHeight: '40px',
    },
    grid1:{
        backgroundColor: '#F4FFF2',
        width: '100%',
        minHeight: '40px',
        display: 'grid',
        // gridTemplateRows: '40px',
        gridTemplateColumns: '3fr 2fr 1fr',
        alignItems: 'center',
        margin: '0px 0px 0px 0px',
    } as React.CSSProperties,
    gridTitulo:{
        backgroundColor: '#ACEFA1',
        fontSize: '20px',
        width: 'calc(100% -15px)',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '15px',
    },
    gridGrupo:{
        padding: '0px 0px 0px 15px',
        fontSize: '14px', 
    },
    gridPorcion:{
        fontSize: '14px',
    },
    gridIcon:{
        padding: '0px',
    },
    icon:{
        color: '#636e72',
        fontSize: '20px',
        cursor: 'pointer',
    },
    espacio1:{
        display: 'block',
        width: '100%',
        height: '30px',
    },
    espacio2:{
        display: 'block',
        width: '100%',
        height: '20px',
    },
    divInactivo:{
        backgroundColor: '#F4FFF2',
        width: '100%',
        minHeight: '35px',
        display: 'grid',
        gridTemplateColumns: '3fr 2fr 1fr',
        alignItems: 'center',
        margin: '0px 0px 0px 0px',
    },
    divActivo:{
        backgroundColor: '#DBFFD4',
        width: '100%',
        minHeight: '35px',
        display: 'grid',
        gridTemplateColumns: '3fr 2fr 1fr',
        alignItems: 'center',
        margin: '0px 0px 0px 0px',
        cursor: 'pointer',
    },
}

export default function Pauta2(){
    const [mouse, setMouse] = useState(false); 
    const onMouseEnter = () => setMouse(true); 
    const onMouseLeave = () => setMouse(false); 
    const [mouse2, setMouse2] = useState(false);
    const onMouseEnter2 = () => setMouse2(true); 
    const onMouseLeave2 = () => setMouse2(false); 
    const [mouse3, setMouse3] = useState(false);
    const onMouseEnter3 = () => setMouse3(true); 
    const onMouseLeave3 = () => setMouse3(false); 
    const [mouse4, setMouse4] = useState(false);
    const onMouseEnter4 = () => setMouse4(true); 
    const onMouseLeave4 = () => setMouse4(false); 
    const [mouse5, setMouse5] = useState(false);
    const onMouseEnter5 = () => setMouse5(true); 
    const onMouseLeave5 = () => setMouse5(false); 
    const [mouse6, setMouse6] = useState(false);
    const onMouseEnter6 = () => setMouse6(true); 
    const onMouseLeave6 = () => setMouse6(false); 

    const [mouse7, setMouse7] = useState(false); 
    const onMouseEnter7 = () => setMouse7(true); 
    const onMouseLeave7 = () => setMouse7(false); 
    const [mouse8, setMouse8] = useState(false); 
    const onMouseEnter8 = () => setMouse8(true); 
    const onMouseLeave8 = () => setMouse8(false); 
    const [mouse9, setMouse9] = useState(false); 
    const onMouseEnter9 = () => setMouse9(true); 
    const onMouseLeave9 = () => setMouse9(false); 
    const [mouse10, setMouse10] = useState(false); 
    const onMouseEnter10 = () => setMouse10(true); 
    const onMouseLeave10 = () => setMouse10(false); 
    const [mouse11, setMouse11] = useState(false); 
    const onMouseEnter11 = () => setMouse11(true); 
    const onMouseLeave11 = () => setMouse11(false); 
    const [mouse12, setMouse12] = useState(false); 
    const onMouseEnter12 = () => setMouse12(true); 
    const onMouseLeave12 = () => setMouse12(false); 

    const [mouse13, setMouse13] = useState(false); 
    const onMouseEnter13 = () => setMouse13(true); 
    const onMouseLeave13 = () => setMouse13(false); 
    const [mouse14, setMouse14] = useState(false); 
    const onMouseEnter14 = () => setMouse14(true); 
    const onMouseLeave14 = () => setMouse14(false); 
    const [mouse15, setMouse15] = useState(false); 
    const onMouseEnter15 = () => setMouse15(true); 
    const onMouseLeave15 = () => setMouse15(false); 
    const [mouse16, setMouse16] = useState(false); 
    const onMouseEnter16 = () => setMouse16(true); 
    const onMouseLeave16 = () => setMouse16(false); 
    const [mouse17, setMouse17] = useState(false); 
    const onMouseEnter17 = () => setMouse17(true); 
    const onMouseLeave17 = () => setMouse17(false); 
    const [mouse18, setMouse18] = useState(false); 
    const onMouseEnter18 = () => setMouse18(true); 
    const onMouseLeave18 = () => setMouse18(false); 

    const [mouse19, setMouse19] = useState(false); 
    const onMouseEnter19 = () => setMouse19(true); 
    const onMouseLeave19 = () => setMouse19(false); 
    const [mouse20, setMouse20] = useState(false); 
    const onMouseEnter20 = () => setMouse20(true); 
    const onMouseLeave20 = () => setMouse20(false); 
    const [mouse21, setMouse21] = useState(false); 
    const onMouseEnter21 = () => setMouse21(true); 
    const onMouseLeave21 = () => setMouse21(false); 
    const [mouse22, setMouse22] = useState(false); 
    const onMouseEnter22 = () => setMouse22(true); 
    const onMouseLeave22 = () => setMouse22(false); 
    const [mouse23, setMouse23] = useState(false); 
    const onMouseEnter23 = () => setMouse23(true); 
    const onMouseLeave23 = () => setMouse23(false); 
    const [mouse24, setMouse24] = useState(false); 
    const onMouseEnter24 = () => setMouse24(true); 
    const onMouseLeave24 = () => setMouse24(false); 
 
        return(
            <div>
                <div style={style.espacio1}></div>
                <div className='box08'>
                    <h3 style={style.titulo}><Icon11/> Pauta nutricional personal</h3>
                    <p style={style.parrafo}>
                    A continuación encontrarás tu pauta nutricional personal. Esta pauta está
                    elaborada en base a tus requerimientos energéticos y nutricionales, 
                    y representa una guía simple para lograr una alimentación equilibrada, 
                    rica en nutrientes, vitaminas y minerales. <b>Consume los alimentos 
                    indicados, en la cantidad/porción sugerida para suplir todas tus necesidades nutricionales. </b>
                    También puedes guiarte con el icono "<Icon0/>" para obtener información sobre
                    cada grupo de alimentos y sus porciones.<br/> 
                    </p>
                    <div className='gridContainer08'> 
                        {/* DESAYUNO */}
                        <div style={style.gridCuadro}>
                            <div style={style.gridT}> {/* TITULO */}
                            <div style={style.gridTitulo}><b>Desayuno</b></div>
                            </div>
                            {/*1- CEREALES */} 
                            <div    onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                                    style={mouse ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Cereales / Hidratos de carbono</div>
                            <div> <span id="idDCereales" {...dataDesayuno()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}> <Icon1/>  </div>
                            </div>
                            {/*1- AGREGADOS */} 
                            <div    onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}
                                    style={mouse2 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" > 
                            <div className='gridGrupo08'>Agregados</div>
                            <div> <span id="idDAgregados" {...dataDesayuno()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon2/></div>
                            </div>
                            {/*1- ALTOS EN CALCIO */} 
                            <div onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}
                                    style={mouse3 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Altos en calcio</div>
                            <div> <span id="idDAltoscalcio" {...dataDesayuno()}className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon3/></div>
                            </div>
                            {/*1- FRUTAS */} 
                            <div onMouseEnter={onMouseEnter4} onMouseLeave={onMouseLeave4}
                                    style={mouse4 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Frutas</div>
                            <div> <span id="idDFrutas" {...dataDesayuno()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon4/></div>
                            </div>
                            {/*1- FRUTOSYSEMILLAS */} 
                            <div onMouseEnter={onMouseEnter5} onMouseLeave={onMouseLeave5}
                                    style={mouse5 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Frutos secos / Semillas</div>
                            <div> <span id="idDFrutossemillas" {...dataDesayuno()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon5/></div>
                            </div>
                            {/*1- ACEITES */} 
                            <div onMouseEnter={onMouseEnter6} onMouseLeave={onMouseLeave6}
                                    style={mouse6 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Aceite / Lipidos </div>
                            <div> <span id="idDAceites" {...dataDesayuno()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon6/></div>
                            </div>
                        <div style={style.espacio2}></div>
                        {/* ALMUERZO */}
                        <div style={style.gridCuadro}>
                            <div style={style.gridT}> {/* TITULO */}
                            <div style={style.gridTitulo}><b>Almuerzo</b></div>
                            </div>
                            {/* CEREALES */} 
                            <div onMouseEnter={onMouseEnter7} onMouseLeave={onMouseLeave7}
                                    style={mouse7 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Cereales / Hidratos de carbono</div>
                            <div> <span id="idACereales" {...dataAlmuerzo()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon7/></div>
                            </div>
                             {/* PROTEINA */} 
                            <div onMouseEnter={onMouseEnter8} onMouseLeave={onMouseLeave8}
                                    style={mouse8 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Alimentos altos en proteina</div>
                            <div> <span id="idAProteinas" {...dataAlmuerzo()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon8/></div>
                            </div>
                            {/* VERDURAS 1 */} 
                            <div onMouseEnter={onMouseEnter9} onMouseLeave={onMouseLeave9}
                                    style={mouse9 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Verduras de consumo limitado</div>
                            <div> <span id="idAVerduras1" {...dataAlmuerzo()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon9/></div>
                            </div>
                            {/* VERDURAS 2 */} 
                            <div onMouseEnter={onMouseEnter10} onMouseLeave={onMouseLeave10}
                                    style={mouse10 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Verduras para libre consumo</div>
                            <div> <span id="idAVerduras2" {...dataAlmuerzo()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon10/></div>
                            </div>
                            {/* ACEITES */} 
                            <div onMouseEnter={onMouseEnter11} onMouseLeave={onMouseLeave11}
                                    style={mouse11 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Aceite </div>
                            <div> <span id="idAAceites" {...dataAlmuerzo()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon6/></div>
                            </div>
                            {/* FRUTAS */} 
                            <div onMouseEnter={onMouseEnter12} onMouseLeave={onMouseLeave12}
                                    style={mouse12 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Frutas</div>
                            <div> <span id="idAFrutas" {...dataAlmuerzo()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon4/></div>
                            </div>
                        </div>
                        <div style={style.espacio2}></div>
                        {/* MERIENDA */}
                        <div style={style.gridCuadro}>
                            <div style={style.gridT}> {/* TITULO */}
                            <div style={style.gridTitulo}><b>Merienda / Once</b></div>
                            </div>
                            {/* CEREALES */} 
                            <div onMouseEnter={onMouseEnter13} onMouseLeave={onMouseLeave13}
                                    style={mouse13 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Cereales / Hidratos de carbono</div>
                            <div> <span id="idOCereales" {...dataOnce()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon1/> </div>
                            </div>
                            {/* AGREGADOS */} 
                            <div onMouseEnter={onMouseEnter14} onMouseLeave={onMouseLeave14}
                                    style={mouse14 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Agregados</div>
                            <div> <span id="idOAgregados" {...dataOnce()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon2/></div>
                            </div>
                            {/* ALTOS EN CALCIO */} 
                            <div onMouseEnter={onMouseEnter15} onMouseLeave={onMouseLeave15}
                                    style={mouse15 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Altos en calcio</div>
                            <div> <span id="idOAltoscalcio" {...dataOnce()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon3/></div>
                            </div>
                            {/* FRUTAS */} 
                            <div onMouseEnter={onMouseEnter16} onMouseLeave={onMouseLeave16}
                                    style={mouse16 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Frutas</div>
                            <div> <span id="idOFrutas" {...dataOnce()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon4/></div>
                            </div>
                            {/* FRUTOSYSEMILLAS */} 
                            <div onMouseEnter={onMouseEnter17} onMouseLeave={onMouseLeave17}
                                    style={mouse17 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Frutos secos / Semillas</div>
                            <div> <span id="idOFrutossemillas" {...dataOnce()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon5/></div>
                            </div>
                            {/* ACEITES */} 
                            <div onMouseEnter={onMouseEnter18} onMouseLeave={onMouseLeave18}
                                    style={mouse18 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Aceite / Lipidos </div>
                            <div> <span id="idOAceites" {...dataOnce()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon6/></div>
                            </div>
                        </div>
                        <div style={style.espacio2}></div>
                        {/* CENA */}
                        <div style={style.gridCuadro}>
                            <div style={style.gridT}> {/* TITULO */}
                            <div style={style.gridTitulo}><b>Cena</b></div>
                            </div>
                            {/* CEREALES */} 
                            <div onMouseEnter={onMouseEnter19} onMouseLeave={onMouseLeave19}
                                    style={mouse19 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Cereales / Hidratos de carbono</div>
                            <div> <span id="idCCereales" {...dataCena()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon7/></div>
                            </div>
                            {/* PROTEINA */} 
                            <div onMouseEnter={onMouseEnter20} onMouseLeave={onMouseLeave20}
                                    style={mouse20 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Alimentos altos en proteina</div>
                            <div> <span id="idCProteinas" {...dataCena()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon8/></div>
                            </div>
                            {/* VERDURAS 1 */} 
                            <div onMouseEnter={onMouseEnter21} onMouseLeave={onMouseLeave21}
                                    style={mouse21 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Verduras de consumo limitado</div>
                            <div> <span id="idCVerduras1" {...dataCena()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon9/></div>
                            </div>
                            {/* VERDURAS 2 */} 
                            <div onMouseEnter={onMouseEnter22} onMouseLeave={onMouseLeave22}
                                    style={mouse22 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Verduras para libre consumo</div>
                            <div> <span id="idCVerduras2" {...dataCena()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon10/></div>
                            </div>
                            {/* ACEITES */} 
                            <div onMouseEnter={onMouseEnter23} onMouseLeave={onMouseLeave23}
                                    style={mouse23 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Aceite </div>
                            <div> <span id="idCAceites" {...dataCena()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon6/></div>
                            </div>
                            {/* FRUTAS */} 
                            <div onMouseEnter={onMouseEnter24} onMouseLeave={onMouseLeave24}
                                    style={mouse24 ? style.divActivo : style.divInactivo}
                                    id="idGrid1" >
                            <div className='gridGrupo08'>Frutas</div>
                            <div> <span id="idCFrutas" {...dataCena()} className='gridPorcion08'></span></div>  {/* <--MODIFICAR */} 
                            <div style={style.gridIcon}><Icon4/></div>
                            </div>
                        </div>
                        <div style={style.espacio2}></div>
                        <div style={style.espacio2}></div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }