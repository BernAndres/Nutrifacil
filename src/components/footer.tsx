import React, {useState} from 'react';

const style = {
    contenedor:{
        backgroundColor: '#f5f6fa',
        width: '100%',
        height: '100px',
        marginTop: '140px',
        // position: 'static',
        // bottom: '0px',
    } as React.CSSProperties,
    div1:{
        fontSize: '12px',
        marginLeft: '20px',
        marginTop: '2px',
        color: '#2d3436',

    },
    div2:{
        display: 'flex',
        height: '80px',
        paddingBottom: '20px',
    },
    politicas:{
        // backgroundColor: '#fd79a8',
        marginLeft: '15%',
        width: '35%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rrss:{
        // backgroundColor: '#fd79a8',
        width: '35%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '20px',
    },
    icon:{
        marginLeft: '15px',
        fontSize: '25px',
    },
    link1InA:{
        color: '#2d3436',
    },
    link1A:{
      color: '#A3F396',  
    },
    link2InA:{
        color: '#2d3436',
    },
    link2A:{
      color: '#A3F396',  
    },
}

export default function Footer(){
    const [mouse1, setMouse1] = useState(false);
    const onMouseEnter1 = () => setMouse1(true);
    const onMouseLeave1 = () => setMouse1(false);
    const [mouse2, setMouse2] = useState(false);
    const onMouseEnter2 = () => setMouse2(true);
    const onMouseLeave2 = () => setMouse2(false);
        return(
            <div style={style.contenedor}>
                <div style={style.div1}>
                    © Todos los derechos reservados 2021.
                </div>
                <div style={style.div2}> 
                    <div style={style.politicas}>
                        <a style={mouse1 ? style.link1A : style.link1InA}
                            onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}
                            href="">
                        <span>Politicas de privacidad.</span>
                        </a>
                    </div>
                    <div style={style.rrss}>
                        Mis redes sociales:
                        <a style={mouse2 ? style.link2A : style.link2InA}
                            onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}
                            href="https://www.instagram.com/nutricionista_alvaro/?hl=es-la" target='_blank'>
                        <i style={style.icon} className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
               
            </div>
        )
    
}