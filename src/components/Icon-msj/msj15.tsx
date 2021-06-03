import React, {useState} from 'react';

const style = {
    mensaje:{
        display: 'inline',
        position: 'absolute',
        borderRadius: '5px',
        padding: '10px',
        marginLeft: '4px',
        fontSize: '12px',
        maxWidth: '300px',
        textAlign: 'justify',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#f5f6fa',
    } as React.CSSProperties,
    espacio:{
        height: '5px',
    }
};

export default function Mensaje15(){
    return(
        <p style={style.mensaje}>
        Las porciones de intercambio son una herramienta muy útil para darle más 
        variedad a nuestra alimentación. No es necesario que memoricemos todas las 
        porciones de todos los grupos de alimentos, sin embargo, el conocerlas nos 
        ayudará a facilitar la planificación de nuestras comidas en el día a día.
        </p>
            
    );
}