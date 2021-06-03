import { truncate } from 'fs';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './estilosCss/Css018.css';
// import Dropdown from './dropdown';
import Logout from "./logout";

export default function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => {
        if (window.innerWidth < 992){
            setClick(!click)
        }
    }
    const closeMobileMenu = () => setClick(false);
    const [dropdown, setDrop] = useState(false);
    const onMouseEnter = () => {
        if (window.innerWidth > 992) {
            setDrop(true)
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth > 992) {
            setDrop(false);
        }
    }
    const onDropClick = () => setDrop(!dropdown);
    
    return(
     
            <div className='navbar1'>
                <div className={dropdown ? 'menu-iconInA' : 'menu-icon'} onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div className={dropdown ? 'menu-arrowA' : 'menu-arrowInA'} onClick={onDropClick}>
                   <div onClick={handleClick}>
                   <i  className="far fa-arrow-alt-circle-left"></i>
                   </div>
                </div>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item1'>
                        <Link to="/Perfil/PlanNutricional" className='nav-links' onClick={closeMobileMenu}>
                            Mi plan nutricional
                        </Link>
                    </li>
                    <li className='nav-item1'>
                        <Link to="/Perfil/Mis-Mediciones" className='nav-links' onClick={closeMobileMenu}>
                            Mis mediciones
                        </Link>
                    </li>
                    <li className='nav-item1'  onMouseEnter={onMouseEnter} 
                        onMouseLeave={onMouseLeave} onClick={onDropClick} >
                        <span className='nav-links' onClick={handleClick}>
                            Videos y guías <i className='fas fa-caret-down' />
                        </span>
                    </li>
                    <li className='nav-item2'>
                        <Logout/>
                    </li>
                </ul>
            

                <ul onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                    className={dropdown ? 'dropdownA20' : 'dropdownInA20'}>
                    <li className='dropItem'>
                        <Link onClick={onDropClick} className='dropLink' to='/Perfil/Videos-Guias-Introduccion-Nutricion'>
                            <span>Introducción a la nutrición</span>
                        </Link>
                    </li>
                    <li className='dropItem'>
                        <Link onClick={onDropClick}  className='dropLink' to='/Perfil/Videos-Guias-Nutricion-Vegetariana'>
                            Nutrición vegetariana
                        </Link>
                    </li>
                </ul>

            </div>
  
    );
}