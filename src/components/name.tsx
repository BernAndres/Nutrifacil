import React from 'react';
import {dataNombre} from '../datosUsuarios';

export default function NombreUsuario(){
    return(
        <span id='idNombreUsuario' {...dataNombre()}></span>
    );
}