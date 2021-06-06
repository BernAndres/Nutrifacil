import {dataSaludarUser} from '../datosNombre';
import './estilosCss/Css009.css';

export default function saludarUser() {
        return (        
            <div id="nombre001"> 
                <h1 className='titulo09' id="idSaludarUser" {...dataSaludarUser()}></h1>
            </div>
  )
};
