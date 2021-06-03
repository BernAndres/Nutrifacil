import * as React from 'react';
import Container from '../components/container'
import Cuerpoinicio from '../components/cuerpoInicio';
import Loginbar from '../components/loginbar';
import Portada from '../components/portada';
import Footer from '../components/footer';
import AgendarIcon from '../components/agendarIcon';

export default class Inicio extends React.Component{
    public render(){
        return(
                <Container>
                    <Loginbar/>
                    <Portada></Portada>
                    <Cuerpoinicio></Cuerpoinicio>
                    <AgendarIcon></AgendarIcon>
                    <Footer/>
                </Container>
        )
    }
}