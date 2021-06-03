import React, {useState} from 'react';

const style = {
    inactivo:{
        width: '100px',
        height: '100px',
        backgroundColor: '#0984e3',
        position: 'absolute',
        left: '-80px',
        transition: 'all 0.5s ease',
        opacity: '0.8',
    } as React.CSSProperties,
    activo:{
        width: '100px',
        height: '100px',
        backgroundColor: '#fab1a0',
        position: 'absolute',
        transition: 'all 0.2s ease',
    } as React.CSSProperties,
    fijo:{
        position: 'fixed',
        top: '200px',
        left: '0px',
    } as React.CSSProperties,
};

export default function Boton(){
    const [click, setClick] = useState(false);
    const onMouseEnter = () => setClick(true);
    const onMouseLeave = () => setClick(false);
    return(
        <div style={style.fijo}>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
        style={click ? style.activo : style.inactivo}>
           hOLA
        </div>
        </div>
    );
}