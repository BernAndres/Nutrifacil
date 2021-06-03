import * as React from 'react';
import './estilosCss/box.css';

const style = {
    container:{
        width: '60%',
        backgroundColor: '#f1f2f6',
    }
}

export default class Box extends React.Component{
    public render(){
        const { children } = this.props 
        return(
            <div
            // style={style.container}
            className='container'
            >
                { children }
            </div>
        )
    }
}