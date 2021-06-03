import React, {useState} from 'react';

const style = {
    container: {
        // backgroundColor: '#ffeaa7',
        width: '100px',
        height: '90px',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        cursor: 'pointer',
    } as React.CSSProperties,
    parrafoInA:{
        // backgroundColor: '#74b9ff',
        fontSize: '15px',
        textAlign: 'center',
        margin: '0 0 5px 0',
        color: '#636e72',
    } as React.CSSProperties,  
    parrafoA:{
        // backgroundColor: '#74b9ff',
        fontSize: '15px',
        textAlign: 'center',
        margin: '0 0 5px 0',
        color: '#A3F396',
    } as React.CSSProperties,  
    iconInA:{
        // backgroundColor: '#fd79a8',
        width: '100%',
        fontSize: '50px',
        textAlign: 'center',
        color: '#636e72',
        margin: '0 0 0 0',
    } as React.CSSProperties,
    iconA:{
        // backgroundColor: '#fd79a8',
        width: '100%',
        fontSize: '50px',
        textAlign: 'center',
        color: '#A3F396',
        margin: '0 0 0 0',
    } as React.CSSProperties,
    linkInA:{
        // backgroundColor: '#636e72',
    },
    linkA:{
        textDecoration: 'none',
    },
}

export default function AgendarIcon(){
    const [mouse1, setMouse1] = useState(false);
    const onMouseEnter1 = () => setMouse1(true);
    const onMouseLeave1 = () => setMouse1(false);
    const [mouse2, setMouse2] = useState(false);
    const onMouseEnter2 = () => setMouse2(true);
    const onMouseLeave2 = () => setMouse2(false);
    const [mouse3, setMouse3] = useState(false);
    const onMouseEnter3 = () => setMouse3(true);
    const onMouseLeave3 = () => setMouse3(false);
        return(
            <div style={style.container} >
                <a href="https://api.whatsapp.com/send?phone=56981620295" target='_blank'
                    style={mouse1 ? style.linkA : style.linkInA}
                    onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>

                    <p style={mouse1 ? style.parrafoA : style.parrafoInA}
                       >
                        Agendar hora</p>

                    <i className="far fa-calendar-alt"  
                        style={mouse1 ? style.iconA : style.iconInA}
                        ></i>
                </a>
            </div>
        );
}