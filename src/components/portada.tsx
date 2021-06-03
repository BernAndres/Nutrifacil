import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import forma from '../assets/img/forma.png';
import forma from '../assets/img/forma6.png';
import logo from '../assets/img/logo.png';
import naranjas from '../assets/img/naranjas.png';
import './estilosCss/Css003.css';

const style = {
    contenedor:{
        width: '100%',
        height: '500px',
    },
    forma:{
        width: '100%',
        height: '450px',
    },
    logo:{
        position: 'absolute',
        top: '100px',
        right: '0px',
        width: '450px',
        height: '480px',
    } as React.CSSProperties,
    titulo:{
        position: 'relative',
        width: '600px',
        bottom: '350px',
        left: '80px',
        fontSize: '60px',
    } as React.CSSProperties,
    parrafo:{
        position: 'relative',
        bottom: '350px',
        left: '80px',
        fontSize: '15px',
        maxWidth: '500px',
        textAlign: 'justify',
    } as React.CSSProperties,
    linkMiPerfilInA:{
        position: 'relative',
        bottom: '0px',
        left: '5px',
        fontSize: '15px',
        width: '500px',
        textDecoration: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        color: '#2d3436',
    } as React.CSSProperties,
    linkMiPerfilA:{
        position: 'relative',
        bottom: '0px',
        left: '5px',
        fontSize: '15px',
        width: '500px',
        textDecoration: 'underline',
        cursor: 'pointer',
        fontWeight: 'bold',
        color: '#6BDF58',
    } as React.CSSProperties,
    espacio:{
        height: '5px',
    }
} 

export default function Portada(){
    const [mouse1, setMouse1] = useState(false);
    const onMouseEnter1 = () => setMouse1(true);
    const onMouseLeave1 = () => setMouse1(false);
        return(
            <div style={style.contenedor}>
                <div className='forma03'/>
                <h1 className='titulo03'>NUTRIFACIL</h1>
                <p className='parrafo03'>
                ¡Hola! mi nombre es Álvaro, nutricionista. Nutrifacil es una herramienta 
                diseñada para entregar la máxima calidad en atención nutricional. En Nutrifacil 
                obtendrás tu propia página personal con tu plan alimentario, datos antropométricos y
                múltiples videos y guías para que te conviertas en un experto de la nutrición.
                Puedes obtener tu asesoría en el botón "agendar hora". También puedes conocer más sobre
                mi haciendo
                <Link to='/Nutricionista-Alvaro'>
                <span style={mouse1 ? style.linkMiPerfilA : style.linkMiPerfilInA}
                        onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
                click aquí.
                </span>
                </Link>
                </p>
      
                <img src={naranjas} className='imagen03' alt="fondo de imagen"/>
           
                
            </div>
            
            
        )
}