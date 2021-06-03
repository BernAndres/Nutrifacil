import { findByLabelText } from '@testing-library/react';
import React, {useState} from 'react';
import Box from '../components/box';
import './estilosCss/Css005.css';

export default function Paraquien(){
    const [mouse, setMouse] = useState(false);
    const onMouseEnter = () => setMouse(true);
    const onMouseLeave = () => setMouse(false);
    const [mouse2, setMouse2] = useState(false);
    const onMouseEnter2 = () => setMouse2(true);
    const onMouseLeave2 = () => setMouse2(false);
    const [mouse3, setMouse3] = useState(false);
    const onMouseEnter3 = () => setMouse3(true);
    const onMouseLeave3 = () => setMouse3(false);
    const [mouse4, setMouse4] = useState(false);
    const onMouseEnter4 = () => setMouse4(true);
    const onMouseLeave4 = () => setMouse4(false);
    const [mouse5, setMouse5] = useState(false);
    const onMouseEnter5 = () => setMouse5(true);
    const onMouseLeave5 = () => setMouse5(false);
    const [mouse6, setMouse6] = useState(false);
    const onMouseEnter6 = () => setMouse6(true);
    const onMouseLeave6 = () => setMouse6(false);
        return(
                <div>
                    <h2 className='titulo05'>¿Nutrición para quién?</h2>
                    <div className='box05'>
                       <div className='grid05'>
                           <div className={mouse ? 'div1A05' : 'div1InA05'}
                                onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                    <span className='parr05'>Veganos y Vegetarianos</span>
                                    <div className='icon05'>
                                    <i className="fas fa-seedling"></i>
                                    </div>
                           </div>
                           <div className={mouse3 ? 'div1A05' : 'div1InA05'}
                                onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
                                    <span className='parr05'>Deportistas</span>
                                    <div className='icon05'>
                                    <i className="fas fa-running"></i>
                                    </div>
                           </div>
                           <div className={mouse2 ? 'div1A05' : 'div1InA05'}
                                onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
                                    <span className='parr05'>Control de peso</span>
                                    <div className='icon05'>
                                    <i className="fas fa-weight"></i>
                                    </div>
                           </div>
                           <div className={mouse4 ? 'div1A05' : 'div1InA05'}
                                onMouseEnter={onMouseEnter4} onMouseLeave={onMouseLeave4}>
                                    <span className='parr05'>Problemas gastrointestinales</span>
                                    <div className='icon05'>
                                    <i className="far fa-tired"></i>
                                    </div>
                           </div>
                           <div className={mouse5 ? 'div1A05' : 'div1InA05'}
                                onMouseEnter={onMouseEnter5} onMouseLeave={onMouseLeave5}>
                                    <span className='parr05'>Mejora de hábitos alimenticios</span>
                                    <div className='icon05'>
                                    <i className="fas fa-utensils"></i>
                                    </div>
                           </div>
                           <div className={mouse6 ? 'div1A05' : 'div1InA05'}
                                onMouseEnter={onMouseEnter6} onMouseLeave={onMouseLeave6}>
                                    <span className='parr05'>Enfermos crónicos</span>
                                    <div className='icon05'>
                                    <i className="fas fa-heartbeat"></i>
                                    </div>
                           </div>
                       </div>
                    </div>
                </div>
        )
}