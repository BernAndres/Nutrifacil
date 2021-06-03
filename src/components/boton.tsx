import React, {useState} from 'react';

const style = {
    inactivo:{
        width: '300px',
        height: '100px',
        backgroundColor: '#fab1a0',
    },
    activo:{
        width: '300px',
        height: '100px',
        backgroundColor: '#ff7675',
    },
};

export default function Boton(){
    const [click, setClick] = useState(false);
    const onMouseEnter = () => setClick(true);
    const onMouseLeave = () => setClick(false);
    return(
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
        style={click ? style.activo : style.inactivo}>
           hOLA
        </div>
    );
}