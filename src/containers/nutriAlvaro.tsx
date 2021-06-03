import React, {useState} from 'react';
import Container from '../components/container'
import Loginbar from '../components/loginbar2';
// import Slider1 from '../components/sliders/slider1';
import Slider2 from '../components/sliders/slider2';
import Footer from '../components/footer';
import '../components/estilosCss/Css007.css';

const style = {
    espacio:{
        height: '8px',
    },
}
export default function NutriAlvaro(){
    return(
            <Container>
                <Loginbar/>
                <div className='contenedor07'>
                    <h3 className='titulo07'>Nutricionista Álvaro Cañete Berna.</h3>
                    <div className='box07'>
                        <div className='slider07'>
                            <Slider2/>
                        </div>
                        <div className='text07'>
                            <h4>Sobre mi</h4>
                            <p>
                            Mi nombre es Álvaro, nutricionista titulado en el año 2019, asi
                            como creador y desarrollador de la aplicación Nutrifacil.
                            <br/>
                            <div style={style.espacio}/>
                            Soy titulado de la Universidad de Valparaíso, Chile. 
                            Posteriormente me he especializado y certificado en nutrición 
                            vegetariana, además cuento con experiencia tanto en gimnasios como
                            centros clínicos.
                            <br/>
                            <div style={style.espacio}/>
                            Soy un profesional comprometido con sus pacientes y la calidad del servicio
                            que cada una/uno de ellas y ellos recibe. 
                            En base a esta ideología es que decidí crear Nutrifacil, la cual
                            representa una plataforma individualizada para cada paciente, fácil 
                            de usar en diferentes dispositivos, donde tienen acceso a su plan 
                            alimentario completo, mediciones y material educativo en un solo sitio.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Container>
    )
}