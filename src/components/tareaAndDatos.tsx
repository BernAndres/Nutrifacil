import React, {useState} from 'react';
import {dataNombre} from '../datosUsuarios';
import {dataTareas} from '../datosUsuarios';
import Nombre from './name';
import {dataResDatos} from '../datosUsuarios'
import './estilosCss/Css016.css';

const style = {
    // -------------------------CONTENEDOR-----------------------------
    container:{
        position: 'fixed',
        top: '180px',
        right: '0px',
        // backgroundColor: '#e056fd',
    } as React.CSSProperties,
    // -------------------------TAREAS-BOTON-----------------------------
    boxBtnActive1:{
        // display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        position: 'relative',
        top: '150px',
        transition: 'all 0.5s ease',
    } as React.CSSProperties,
    boxBtnInactive1:{
        display: 'none',
    },
    texto1:{
        display: 'block',
        marginRight: '20px',
        textAlign: 'center',
        fontSize: '12px',
        fontWeight: 'bold',
    } as React.CSSProperties,
    btnActivo1:{
        color: '#8CFF79',
        marginRight: '20px',
        marginTop: '0px',
        cursor: 'pointer',
        fontSize: '60px',
    } as React.CSSProperties,
    btnInactivo1:{
        color: '#ACEFA1',
        marginRight: '20px',
        marginTop: '0px',
        cursor: 'pointer',
        fontSize: '60px', 
    },
    // -------------------------TAREAS-CAJA-----------------------------
    boxActivo1:{
        width: '220px',
        height: '300px',
        padding: '10px 20px 10px 15px',
        backgroundColor: '#BFFFB5',
        position: 'absolute',
        right: '-5px',
        transition: 'all 0.5s ease',
        borderRadius: '5px',
    } as React.CSSProperties,
    boxInactivo1:{
        // display: 'none',
        width: '220px',
        height: '300px',
        padding: '10px 15px 10px 20px',
        backgroundColor: '#BFFFB5',
        position: 'absolute',
        right: '-250px',
        // transition: 'all 0.5s ease',
        borderRadius: '5px',
    } as React.CSSProperties,
    cerrar1:{
        position: 'absolute',
        top: '1px',
        left: '3px',
        fontSize: '18px',
        cursor: 'pointer',
        color: '#2d3436',
    } as React.CSSProperties,
    grid1:{
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        gridRowGap: '3px',
    },
    gridItem1:{
        border: '2px solid #2d3436',
        borderRadius: '90px',
        padding: '0px 4px',
        fontSize: '11px',
        fontWeight: 'bold',
    } as React.CSSProperties,
    gridItem2:{
        fontSize: '11px',
        display: 'flex',
        alignItems: 'center',
    },
    // -------------------------DATOS-BOTON-----------------------------
    boxBtnActive2:{
        // display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        position: 'relative',
        top: '-90px',
        transition: 'all 0.5s ease',
    } as React.CSSProperties,
    boxBtnInactive2:{
        display: 'none',
    },
    texto2:{
        display: 'block',
        marginRight: '20px',
        textAlign: 'center',
        fontSize: '12px',
        fontWeight: 'bold',
    } as React.CSSProperties,
    btnActivo2:{
        color: '#8CFF79',
        marginRight: '20px',
        marginTop: '0px',
        cursor: 'pointer',
        fontSize: '60px',
    } as React.CSSProperties,
    btnInactivo2:{
        color: '#ACEFA1',
        marginRight: '20px',
        marginTop: '0px',
        cursor: 'pointer',
        fontSize: '60px', 
    },
    // -------------------------DATOS-CAJA-----------------------------
    boxActivo2:{
        width: '220px',
        height: '300px',
        padding: '10px 20px 10px 15px',
        backgroundColor: '#BFFFB5',
        position: 'absolute',
        right: '-5px',
        transition: 'all 0.5s ease',
        borderRadius: '5px',
    } as React.CSSProperties,
    boxInactivo2:{
        // display: 'none',
        width: '220px',
        height: '300px',
        padding: '10px 15px 10px 20px',
        backgroundColor: '#BFFFB5',
        position: 'absolute',
        right: '-250px',
        // transition: 'all 0.5s ease',
        borderRadius: '5px',
    } as React.CSSProperties,
    itemDatos:{
        fontSize: '12px',
        // backgroundColor: '#ff7675',
        width: '100%',
        display: 'inline-block',
        margin: '0px 0px 0px 0px',
        padding: '0px 0px 0px 0px',
        borderBottom: '1px solid black',
        // margin: '0 auto 0 auto',
    },
    cerrar2:{
        position: 'absolute',
        top: '1px',
        left: '3px',
        fontSize: '18px',
        cursor: 'pointer',
        color: '#2d3436',
    } as React.CSSProperties,
};

export default function Boton(){
    const [mouse, setMouse] = useState(false);
    const onMouseEnter = () => setMouse(true);
    const onMouseLeave = () => setMouse(false);
    const [click, setClick] = useState(false);
    const onClick = () => setClick(true);
    const onClick2 = () => setClick(false);
    // 
    const [mouse2, setMouse2] = useState(false);
    const onMouseEnter2 = () => setMouse2(true);
    const onMouseLeave2 = () => setMouse2(false);
    const [click2, setClick2] = useState(false);
    const onClick3 = () => setClick2(true);
    const onClick4 = () => setClick2(false);
    return(
        <div>
            {/* BOTONES */}
        <div className='container16-1'>
            {/* mis tareas */}
            <div className={ click || click2 ? 'boxBtnInactive1-16' : 'boxBtnActive1-16'} onClick={onClick}>
                <span className='texto1-16'>Ver mis<br/>tareas</span>
                <span  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                       className={mouse ? 'btnActivo1-16' : 'btnInactivo1-16' } >
                    <i className="fas fa-list-alt"></i>
                </span>
            </div>

            {/* mis datos */}
            <div className={ click2 || click ? 'boxBtnInactive2-16' : 'boxBtnActive2-16'} onClick={onClick3}>
                <span className='texto2-16'>Mis<br/> datos</span>
                <span onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}
                      className={mouse2 ? 'btnActivo2-16' : 'btnInactivo2-16'} >
                    <i className="fas fa-user-circle"></i>
                </span>
            </div>
        </div>
        {/* CAJA */}
        <div className={click || click2 ? 'containerA16-2' : 'containerInA16-2' }>
            {/* mis tareas */}
        <div className={click ? 'boxActivo1-16' : 'boxInactivo1-16'}>
                <div>
                    <i onClick={onClick2} style={style.cerrar1} className="fas fa-times"></i>
                    <p className='parr1-16'>
                        ¡<Nombre/>! 
                        En esta sección puedes ver todas las tareas acordadas
                        con tu nutricionista. Realizalas para mejorar tu salud 
                        y alcanzar tus objetivos.
                    </p>
                </div>
                <div style={style.grid1}>
                    <div><span className='gridItem1-16'>1</span></div>
                    <div  id='idTarea1' {...dataTareas()}  className='gridItem2-16'></div>
                    <div><span  className='gridItem1-16'>2</span></div>
                    <div id='idTarea2' {...dataTareas()}  className='gridItem2-16'></div>
                    <div><span  className='gridItem1-16'>3</span></div>
                    <div  id='idTarea3' {...dataTareas()}  className='gridItem2-16'></div>
                    <div><span  className='gridItem1-16'>4</span></div>
                    <div id='idTarea4' {...dataTareas()}  className='gridItem2-16'></div>
                    <div><span  className='gridItem1-16'>5</span></div>
                    <div id='idTarea5' {...dataTareas()}  className='gridItem2-16'></div>
                </div>
            </div>
            <div className={click2 ? 'boxActivo2-16' : 'boxInactivo2-16'}>
                <div>
                <i onClick={onClick4} style={style.cerrar2} className="fas fa-times"></i>
                    <p className='parr2-16'>
                        Resumen datos usuario:
                    </p>
                    <span className='itemDatos16'>Nombre:
                        <span id='idNombeUsuarioRes' {...dataResDatos()} ></span>
                    </span>
                    <span className='itemDatos16'>Último control:
                        <span></span>
                    </span>
                    <span className='itemDatos16'>Próximo control:
                        <span></span>
                    </span>
                    <span className='itemDatos16'>Último pesaje:
                        <span id='idPeso' {...dataResDatos()}></span>
                    </span>
                    <span className='itemDatos16'>IMC:
                        <span id='idIMC' {...dataResDatos()}></span>
                    </span>
                    <span className='itemDatos16'>% Masa muscular:
                        <span id='idMasaMusc1' {...dataResDatos()}></span>
                    </span>
                    <span className='itemDatos16'>% Grasa corporal:
                        <span id='idMasaGrasa1' {...dataResDatos()}></span>
                    </span>
                </div>
            </div>

        </div>
        </div>
    );
}