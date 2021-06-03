import * as React from 'react';
import Container from '../components/container';
import Footer from '../components/footer';
import ForgotPassword from "../components/forgotPassword";

export default class RecuperarContraseña extends React.Component{
    public render(){
        return(
                <Container>
                    <ForgotPassword/>
                    <Footer/>
                </Container>
        )
    }
}