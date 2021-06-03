import React, {useState} from 'react';

const style = {
    divInA:{
        backgroundColor: '#ACEFA1',
        display: 'flex',
        alignItems: 'center',
        margin: '40px auto 60px auto',
        width: '40%',
        height: '70px',
        // border: '1px solid black',
        cursor: 'pointer',
        borderRadius: '4px',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease',
    },
    divA:{
        backgroundColor: '#A3F396',
        display: 'flex',
        alignItems: 'center',
        margin: '40px auto 60px auto',
        width: '40%',
        height: '70px',
        // border: '1px solid black',
        cursor: 'pointer',
        borderRadius: '4px',
        boxShadow: '4px 4px 4px 3px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
    },
    parrafo:{
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '15px',
    } as React.CSSProperties,
    linkInA:{
        color: '#2d3436',
    },
    linkA:{
        color: '#2d3436',
        textDecoration: 'none',
    },
}

export default function BotonAgendar(){
    const [mouse, setMouse] = useState(false);
    const onMouseEnter = () => setMouse(true);
    const onMouseLeave = () => setMouse(false);
        return(
            <a href="https://api.whatsapp.com/send?phone=56981620295" target='_blank'
                style={mouse ? style.linkA : style.linkA}>
                <div style={mouse ? style.divA : style.divInA}
                    onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <span style={style.parrafo}>
                    ¡Agenda hora aquí!
                    </span>
                </div>
            </a>
    
        )
}