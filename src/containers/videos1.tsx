import * as React from 'react';
import Box from '../components/box';
import Titulo from '../components/titulo';
import Navbar from '../components/navbar';
import youtube from '../assets/img/youtube.jpg';
import Footer from '../components/footer';
import Icon33 from '../components/Icon-msj/icon33';
import BtnPDF1 from '../components/btnPdfs/btnPdf1';
import '../components/estilosCss/Css013.css';

const style={
    containerVideo:{
        width: '80%',
        height: 'auto',
        // backgroundColor: '#e74c3c',
        display: 'flex',
        // alignItems: 'center',
        flexDirection: 'column',
        margin: '0 auto 35px auto',
    } as React.CSSProperties ,
    icon:{
        color: '#636e72',
        fontSize: '20px',
        cursor: 'pointer',
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
                <Titulo><Icon33/> Tema: Introducción a la nutrición</Titulo> 
                <div style={style.espacio}></div>
                <div className='box13'>
                    <div style={style.containerVideo}>
                        <h3 className='tituloVideo13'> Video 1 </h3>
                        <iframe className='video13'
                            src='https://www.youtube.com/embed/lY4SW6R2DKE'>
                        </iframe>
                        <BtnPDF1/>
                    </div>

                    <div style={style.containerVideo}>
                        <h3 className='tituloVideo13'> Video 2 </h3>
                        <iframe className='video13'
                            src='https://www.youtube.com/embed/-5nnSi0J6uE'>
                        </iframe>
                        <BtnPDF1/>
                    </div>

                    <div style={style.containerVideo}>
                        <h3 className='tituloVideo13'> Video 3 </h3>
                        <iframe className='video13'
                            src='https://www.youtube.com/embed/QSb703_joWE'>
                        </iframe>
                        <BtnPDF1/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}