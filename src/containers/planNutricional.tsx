import * as React from 'react';
import Container from '../components/container';
import Navbar from '../components/navbar';
import Pauta from '../components/pauta';
import Listacompras from '../components/listaCompras';
import Footer from '../components/footer';
// import NombreUser from '../components/nombreUser';
import SaludarUser from '../components/nombreUser';
import Porciones from '../components/porcionesInterc';
import TareasDatos from '../components/tareaAndDatos';

export default class PlanNutricional extends React.Component{
    public render(){
        return(
                <Container>
                    <Navbar/>
                    <TareasDatos/>
                    <SaludarUser/>
                    <Pauta/>
                    <Listacompras/>
                    <Porciones/>
                    <Footer/>
                </Container>
        )
    }
}