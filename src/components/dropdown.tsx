import React, { useState } from 'react';
import MenuItems from './menuItems';
import {Link} from 'react-router-dom'; 
import './estilosCss/Css018.css';

const style = {
    lista:{
        position: 'absolute',
        top: '60px', 
        backgroundColor: '#BFFFB5',
        listStyle: 'none',
        textAlign: 'start',
        width: '31.5%',
        padding: '0px',
    } as React.CSSProperties,
    item:{

    },
    link:{
        fontSize: '18px',
        color: '#2d3436',
    }
}

export default function Dropdown(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <>
            {/* <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}> */}
            {/* <ul className='dropdown-menu'> */}
            <ul className='lista20'>
                {MenuItems.map((item, index) =>{
                    return(
                        <li key={index} className='listItem20'>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}