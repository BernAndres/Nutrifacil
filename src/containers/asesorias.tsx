import * as React from 'react';
import Container from '../components/container';
import Box from '../components/box';
// import Loginbar from '../components/loginbar';
import Loginbar from '../components/loginbar2';
import Paraquien from '../components/paraQuien';
import Planesnut from '../components/planesNut';
import Footer from '../components/footer';
import BotonAgendar from '../components/botonAgendar';

export default class Asesorias extends React.Component{
    public render(){
        return(
                <Container>
                    <Loginbar/>
                    <Paraquien/>
                    <Planesnut/>
                    <BotonAgendar/>
                    <Footer/>
                </Container>
        )
    }
}