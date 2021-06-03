import * as React from 'react';
import { Modal } from 'reactstrap';
import { Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import './estilosCss/Css006.css';

const style={
    grid:{
        width: '90%',
        margin: '15px auto 15px auto',
        display: 'grid',
        gridTemplateRows: '45px 45px 45px 45px 45px 45px 45px 45px 45px 45px',
        borderRadius: '5px',
    },
    gridRowInA:{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '4fr 1fr 1fr 1fr 1fr',
        backgroundColor: '#f5f6fa',
        marginBottom: '3px',
        boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
    },
    grid0:{
        width: '90%',
        margin: '0px auto 15px auto',
        display: 'grid',
        gridTemplateRows: '45px',
        gridTemplateColumns: '4fr 1fr 1fr 1fr 1fr',
    },
    grid1:{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '10px',
        fontSize: '14px',
    },
    grid2:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '13px',
    },
    icon1:{
        fontSize: '22px',
        color: '#4cd137',
    },
    icon2:{
        fontSize: '22px',
        color: '#fc5c65',
    },
    parrafoFinal:{
        width: '90%',
        margin: '0px auto 0px auto',
        fontSize: '14px',
    },
    det:{
        cursor: 'pointer',
        color: '#6BDF58',
        fontWeight: 'bold',
    } as React.CSSProperties,
}

export default class Planesnut extends React.Component{
    state={
        abierto1: false,
        abierto2: false,
    }
    abrirModal1=()=>{
        this.setState({abierto1: !this.state.abierto1})
    }
    abrirModal2=()=>{
        this.setState({abierto2: !this.state.abierto2})
    }
    public render(){
        return(
            <div>
            <h2 className='titulo06'>Conoce las modalidades de atención</h2>
            <div className='box06'>
            <div style={style.grid0}>
                <div></div>
                <p className='parrafo06'>Teleconsulta</p>
                <p className='parrafo06'>Consulta presencial</p>
                <p className='parrafo06'>Consulta presencial + control</p>
                <p className='parrafo06'>Control</p>
            </div>
               <div style={style.grid}>
                   <div style={style.gridRowInA}>
                    <div style={style.grid1}>Valor de la asesoría</div>
                    <div style={style.grid2}>15.000 CLP</div>
                    <div style={style.grid2}>25.000 CLP</div>
                    <div style={style.grid2}> 30.000 CLP</div>
                    <div style={style.grid2}> 15.000 CLP</div>
                   </div>

                   <div style={style.gridRowInA}>
                    <div style={style.grid1}>Recibe tu cuenta personal de Nutrifacil.</div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}>N/A</div>
                   </div>

                   <div style={style.gridRowInA}>
                    <div style={style.grid1}>Anamnesis clínica y alimentaria.</div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}>N/A</div>
                   </div>

                   <div style={style.gridRowInA}>
                    <div style={style.grid1}>Obten tu diagnóstico nutricional integrado.</div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>

                   </div>

                   <div style={style.gridRowInA}>
                    <div style={style.grid1}>Determinación de tu estado nutricional.</div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                   </div>

                   <div style={style.gridRowInA}>
                    <div style={style.grid1}>Evaluación componente muscular, graso y oseo.</div>
                    <div style={style.grid2}><i className="far fa-times-circle" style={style.icon2}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                   </div>

                   <div style={style.gridRowInA}>
                    <div style={style.grid1}>Determinación del somatotipo.</div>
                    <div style={style.grid2}><i className="far fa-times-circle" style={style.icon2}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                   </div>

                   <div style={style.gridRowInA}>
                    <div style={style.grid1}>Plan alimentario personalizado.</div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                   </div>
                   
                   <div style={style.gridRowInA}>
                        <div style={style.grid1}>Control nutricional incluido.</div>
                        <div style={style.grid2}><i className="far fa-times-circle" style={style.icon2}></i></div>
                        <div style={style.grid2}><i className="far fa-times-circle" style={style.icon2}></i></div>
                        <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                        <div style={style.grid2}><i className="far fa-check-circle" style={style.icon1}></i></div>
                    </div>

                   <div style={style.gridRowInA}>
                    <div style={style.grid1}>Duración.</div>
                    <div style={style.grid2}>45 min.</div>
                    <div style={style.grid2}>60 min.</div>
                    <div style={style.grid2}>60 min.</div>
                    <div style={style.grid2}>20 min.</div>
                   </div>
               </div>
               <p style={style.parrafoFinal}>
                   Conoce los planes para FONASA <span style={style.det} onClick={this.abrirModal1}>aquí.</span>
               </p>
               <p style={style.parrafoFinal}> 
                   Conoce los planes para ISAPRE <span style={style.det} onClick={this.abrirModal2}>aquí.</span>
               </p>

               <Modal isOpen={this.state.abierto1}>
                    <Card>
                    <i onClick={this.abrirModal1} className="fas fa-times"
                        style={{padding: '5px 5px', color: '#2d3436', fontSize: '18px'}}
                    ></i>
                        <Card.Body>
                        <h2 className="text-center mb-4">Detalles atención Fonasa</h2>
                        <div
                            style={{height: '200px'}}
                        >Hola</div>
                        </Card.Body>
                    </Card>
                </Modal>

                <Modal isOpen={this.state.abierto2}>
                    <Card>
                    <i onClick={this.abrirModal2} className="fas fa-times"
                        style={{padding: '5px 5px', color: '#2d3436', fontSize: '18px'}}
                    ></i>
                        <Card.Body>
                        <h2 className="text-center mb-4">Detalles atención Isapre</h2>
                        <div
                            style={{height: '200px'}}
                        >Hola</div>
                        </Card.Body>
                    </Card>
                </Modal>

            </div>
        </div>
        )
    }
}