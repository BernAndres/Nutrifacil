import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './login';
import './estilosCss/Css001.css';

const style = {
    linkInA01:{
        color: '#ffffff',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    } as React.CSSProperties,
    linkA01:{
        color: '#2d3436',
        textDecoration: 'none',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    return(
        <div className='bar01'>
        <div
             onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}
             onClick={onClick0}
             className={click1 ? 'button1A01' : 'button1InA01'}
             >Iniciar sesión
        </div>
        <div
            onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}
            className={click2 ? 'button2A01' : 'button2InA01'}
            >
            <Link
            onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}
            style={ click3 ? style.linkA01 : style.linkInA01}
             to="/Asesorias">Asesorías</Link>
        </div>
        <div style={{zIndex: 1, width: '100%'}}>
            <div className={click0 ? 'loginA01' : 'loginInA01'}>
                    <i onClick={onClick00} 
                     style={{zIndex: 2, position: 'absolute', top: '5px', left: '5px', cursor: 'pointer',
                     color: '#2d3436', fontSize: '15px'}} className="fas fa-times"></i>
                <Login/>
            </div>
        </div>
        </div>
    );
}

