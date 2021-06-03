import * as React from 'react';
import ejemplo from '../assets/img/ejemplo.jpg';
import PlanNut1 from '../assets/img/planNut1.png';
import './estilosCss/Css004.css';

export default class Cuerpoinicio extends React.Component{
    public render(){
        return(
            <div className='contenedor04'>
                <h2 className='titulo04'>Descubre los beneficios de nutrifácil</h2>
                <div className='cuerpo04'>
                <div className='cuadro1-04'>
                        <p className='cuadroP1-04'>
                        Nutrifacil brinda una plataforma individualizada a cada usuario, 
                        la cual está personalizada según sus caracteristicass y necesidades. 
                        Nutrifácil en sensillo de usar en diferentes dispositivos, facilitando
                        el acceso a tu plan alimentario, mediciones, además de videos y guías donde sea.
                        </p>
                        <img src={PlanNut1} alt="" className='cuadroI1-04' />
                    </div>
                    <div className='cuadro2-04'>
                        <p className='cuadroP2-04'> 
                        En tu página principal 
                        podrás encontrar tu plan alimentario personal, además de múltiples
                        herramientas y ayudas para facilitar el progresos
                        y el cumplimiento de tus objetivos.
                        </p>
                        <img src={PlanNut1} alt="" className='cuadroI2-04'/>
                    </div>
                    <div className='cuadro1-04'>
                        <p className='cuadroP1-04'>
                        En tu página de mediciones, puedes encontrar todos los datos de 
                        tus evaluaciones, los cuales estarán disponibles siempre para ti.
                        </p>
                        <img src={PlanNut1} alt="" className='cuadroI1-04'/>
                    </div>
                    <div className='cuadro2-04'>
                        <p className='cuadroP2-04'>
                        Puedes aprender de forma fácil y simple gracias a los múltiples videos y 
                        guías que estarán disponibles para ti. Aprende las bases de la nutrición,
                        sobre los nutrientes, los alimentos, como interaccionan con tu cuerpo 
                        y mucho más.
                        </p>
                        <img src={PlanNut1} alt="" className='cuadroI2-04'/>
                    </div>
                </div>
            </div>
        )
    }
}