import * as React from 'react';
import Container from '../components/container';
import Footer from '../components/footer';
import CuerpoMediciones from '../components/cuerpoMediciones';
import Navbar from '../components/navbar';



export default class Mediciones extends React.Component{
    public render(){
        return(
                <Container>
                    <Navbar/>
                    <CuerpoMediciones/>
                    <Footer/>
                </Container>
        )
    }
}