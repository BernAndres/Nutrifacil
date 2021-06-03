import * as React from 'react';
import Container from '../components/container';
// import Signup from "../components/signup1";
import Signup from "../components/signup";

const style = {
    div1: {
        margin: 'auto',
    }
}

export default class CrearUsuario extends React.Component{
    public render(){
        return(
                <Container>
                    <div style={style.div1}>
                        <Signup/>
                    </div>
                </Container>
        )
    }
}