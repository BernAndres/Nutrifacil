import React, {useState} from 'react';
import '../estilosCss/Css014.css';

const style = {
    container:{
        width: '100%',
        margin: '15px 0px 0px 0px',
        padding: '0px 0px',
        display: 'flex',
        justifyContent: 'center',
    },
    btnInactivo:{
        width: '50%',
        height: '30px',
        backgroundColor: '#BFFFB5',
        borderRadius: '8px',
        padding: '0px 0px 0px 0px',
    },
    btnActivo:{
        width: '50%',
        height: '30px',
        backgroundColor: '#8CFF79',
        borderRadius: '8px',
        // border: '2px solid black',
        padding: '0px 0px 0px 0px',
    },
    link:{
        margin: '0px 0px 0px 0px',
        padding: '0px 0px 3px 0px',
        width: '100%',
        height: '100%',
        color: '#2d3436',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mensaje:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export default function BtnPDF1(){
    const [mouse, setMouse] = useState(false);
    const onMouseEnter = () => setMouse(true);
    const onMouseLeave = () => setMouse(false);

    return(
        <div style={style.container}>
            <div className={mouse ? 'btnA14' : 'btnInA14'}
                onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <a style={style.link} href="https://1drv.ms/u/s!AkwJedMwGyt7n4ZCrOSoGdOs6fmI0Q?e=ThBRRi"  target='_blank'>
                    <div style={style.mensaje}>
                        <span style={{textAlign: 'center', fontSize: '13px'}}>Descarga la guía "Guia ejemplo".</span>
                    </div>
                </a>
            </div>
        </div>
    );
}