import {dataSaludarNombre} from '../datosUsuarios';
import './estilosCss/Css009.css';

const style={
    titulo:{
        width: '60%',
        height: 'auto',
        display: 'block',
        margin: '30px auto 0px auto',
        padding: '0px 0px 0px 0px',
    }
}

export default function nombreUser() {
        return (        
            <div> 
                <h1 className='titulo09' id="saludar" {...dataSaludarNombre()}></h1>
            </div>
  )
};
