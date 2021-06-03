import React from 'react';

const style = {
    carouselItem:{
        height: '300px',
        backgroundColor: '#9c88ff',
        position: 'relative',
    } as React.CSSProperties,
    container:{
        position: 'absolute',
        left: '0px',
        right: '0px',
        bottom: '0px',
        paddingBottom: '20px',
    } as React.CSSProperties,
}

export default function Slider1(){
    return(
        <div id='myCarousel' className='carousel slide' data-ride='carousel'>
            <div className='carousel-inner'>
                <div style={style.carouselItem} className='carousel-item active'>
                    <div style={style.container} className='container'>
                        <h1>Hola</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, minima.</p>
                        <a href="#" className='btn btn-lg btn-primary'>Boton</a>
                    </div>
                </div>
                <div style={style.carouselItem} className='carousel-item'>
                    <div style={style.container} className='container'>
                        <h1>Chao</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, minima.</p>
                        <a href="#" className='btn btn-lg btn-primary'>Boton</a>
                    </div>
                </div>
            </div>
        </div>
    );
}