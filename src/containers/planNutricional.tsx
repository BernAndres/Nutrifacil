import * as React from 'react';
import Container from '../components/container';
// import Navbar from '../components/navbar';
import Navbar from '../components/navbar';
// import Pauta from '../components/pauta';
import Pauta from '../components/pauta';
// import Pauta2 from '../components/pauta2';
import Listacompras from '../components/listaCompras';
import Footer from '../components/footer';
import Recetas from '../components/recetas';
import Saludar from '../components/saludar';
import NombreUser from '../components/nombreUser';
import Porciones from '../components/porcionesInterc';
import Icon from '../components/icon';
import Flexi from '../components/flexi';
import Boton from '../components/boton';
import TareasDatos from '../components/tareaAndDatos';

export default class PlanNutricional extends React.Component{
    public render(){
        return(
                <Container>
                    <Navbar/>
                    <TareasDatos/>
                    <NombreUser/>
                    <Pauta/>
                    <Listacompras/>
                    <Porciones/>
                    <Footer/>
                </Container>
        )
    }
}