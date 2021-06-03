import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Login from "./login";
import './estilosCss/Css002.css';

const style = {
    bar02: {
        backgroundColor: '#2d3436', 
        width: '100%',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
    } as React.CSSProperties,
    linkInA02:{
        color: '#ffffff',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    } as React.CSSProperties,
    linkA02:{
        color: '#2d3436',
        textDecoration: 'none',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    volverInnerInA02:{
        color: '#ACEFA1 ',
    },
    volverInnerA02:{
        color: '#2d3436',
        textDecoration: 'none',
    }
}

export default function Loginbar2(){
    const [click1, setClick1] = useState(false);
    const onMouseEnter1 = () => setClick1(true);
    const onMouseLeave1 = () => setClick1(false);
    const [click2, setClick2] = useState(false);
    const onMouseEnter2 = () => setClick2(true);
    const onMouseLeave2 = () => setClick2(false);
    const [click3, setClick3] = useState(false);
    const onMouseEnter3 = () => setClick3(true);
    const onMouseLeave3 = () => setClick3(false);
    const [click0, setClick0] = useState(false);
    const onClick0 = () => setClick0(true);
    const onClick00 = () => setClick0(false);
    const [mouse4, setClick4] = useState(false);
    const onMouseEnter4 = () => setClick4(true);
    const onMouseLeave4 = () => setClick4(false);

    return(
        <div style={style.bar02}>
        <div 
            className={mouse4 ? 'volverA02' : 'volverInA02'}
            onMouseEnter={onMouseEnter4} onMouseLeave={onMouseLeave4}>
            <Link to='/' style={mouse4 ? style.volverInnerA02 : style.volverInnerInA02}
                onMouseEnter={onMouseEnter4} onMouseLeave={onMouseLeave4}>
                <i className="far fa-arrow-alt-circle-left"></i>
                <span className='textVolver02'>
                Volver
                </span>
            </Link>
        </div>
        <div
             onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}
             onClick={onClick0}
             className={click1 ? 'button1A02' : 'button1InA02'}
             >Iniciar sesión
        </div>
        <div
            onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}
            className={click2 ? 'button2A02' : 'button2InA02'}
            >
            <Link
            onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}
            style={ click3 ? style.linkA02 : style.linkInA02}
             to="/Asesorias">Asesorías</Link>
        </div>
        <div style={{zIndex: 1}}>
            <div className={click0 ? 'loginA02' : 'loginInA02'}>
                    <i onClick={onClick00} 
                     style={{zIndex: 2, position: 'absolute', top: '5px', left: '5px', cursor: 'pointer',
                     color: '#2d3436', fontSize: '15px'}} className="fas fa-times"></i>
                <Login/>
            </div>
        </div>
        </div>
    );
}

