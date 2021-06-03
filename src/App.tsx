import React, { useState, useEffect } from 'react';
import './App.css';
import Inicio from './containers/inicio';
import PlanNutricional from './containers/planNutricional';
import Mediciones from './containers/mediciones';
import Asesorias from './containers/asesorias';
import NutriAlvaro from './containers/nutriAlvaro';
import Videos1 from './containers/videos1';
import Videos2 from './containers/videos2';
import CrearUsuario from './containers/crearUsuario';
import CrearDatosUsuario from './containers/crearDatosUsuario';
import RecuperarContraseña from './containers/recuperarContraseña';
// import { Route } from 'react-router';
import { BrowserRouter, Route } from "react-router-dom";
// import {BrowserRouter, BrowserRouter as Router, Route} from 'react-router-dom' 
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <BrowserRouter> 
      <div>
        <Route exact path='/' component={Inicio}/>
        <Route exact path='/CrearUsuario' component={CrearUsuario}/>
        <Route exact path='/CrearDatosUsuario' component={CrearDatosUsuario}/>
        <Route exact path='/RecuperarContraseña' component={RecuperarContraseña}/>
        <Route exact path='/Asesorias' component={Asesorias}/>
        <Route exact path='/Nutricionista-Alvaro' component={NutriAlvaro}/>
        <PrivateRoute exact path='/Perfil/PlanNutricional' component={PlanNutricional}/>
        <PrivateRoute exact path='/Perfil/Mis-Mediciones' component={Mediciones}/>
        <PrivateRoute exact path='/Perfil/Videos-Guias-Introduccion-Nutricion' component={Videos1}/>
        <PrivateRoute exact path='/Perfil/Videos-Guias-Nutricion-Vegetariana' component={Videos2}/>
      </div>
    </BrowserRouter> 
  )
}
export default App;
