import * as React from 'react';
import Box from '../components/box';
import Titulo from '../components/titulo';
import Navbar from '../components/navbar';
import youtube from '../assets/img/youtube.jpg';
import Footer from '../components/footer';
import Icon34 from '../components/Icon-msj/icon34'
import '../components/estilosCss/Css013.css';

const style={
    contVideo:{
        width: '80%',
        display: 'block',
        margin: '0 auto 35px auto',
    },
    tituloVideo:{
        margin: '0 0 10px 80px',
        fontSize: '25px',
    } ,
    icon:{
        color: '#636e72',
        fontSize: '20px',
        cursor: 'pointer',
    },
    imgYt:{
        width: '80%',
        height: 'auto',
        display: 'block',
        margin: '0 auto',
    },
    espacio:{
        height: '30px',
    },
}

export default class Videos extends React.Component{
    public render(){
        return(
            <div>
                <Navbar/>
                <Titulo><Icon34/> Tema: Nutrición vegetariana</Titulo> 
                <div style={style.espacio}></div>
                <div className='box13'>
                    <div style={style.contVideo}>
                        <h3  className='tituloVideo13'> Video 1 </h3>
                        <iframe className='video13'
                            src='https://www.youtube.com/embed/-5nnSi0J6uE'>
                        </iframe>
                    </div>

                    <div style={style.contVideo}>
                        <h3 style={style.tituloVideo}> Video 2 </h3>
                        <iframe className='video13'
                            src='https://www.youtube.com/embed/-5nnSi0J6uE'>
                        </iframe>
                    </div>

                    <div style={style.contVideo}>
                        <h3 style={style.tituloVideo}> Video 3 </h3>
                        <iframe className='video13'
                            src='https://www.youtube.com/embed/-5nnSi0J6uE'>
                        </iframe>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}