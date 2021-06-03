import * as React from 'react';
import Box from '../components/box';
import './estilosCss/Css015.css';

const style={
    width: '60%',
    display: 'block',
    margin: '40px auto 5px auto',
    fontSize: '30px',
}
export default class Titulo extends React.Component{
    public render(){
        const { children } = this.props 
        return(
            <h2 className='titulo15'>
                {children}
            </h2>
        )
    }
}