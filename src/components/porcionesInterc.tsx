import * as React from 'react';
import Box from '../components/box';
import Icon15 from './Icon-msj/icon15';
import Icon16 from './Icon-msj/icon16';
import Icon17 from './Icon-msj/icon17';
import Icon18 from './Icon-msj/icon18';
import Icon19 from './Icon-msj/icon19';
import Icon20 from './Icon-msj/icon20';
import Icon21 from './Icon-msj/icon21';
import Icon22 from './Icon-msj/icon22';
import Icon23 from './Icon-msj/icon23';
import Icon24 from './Icon-msj/icon24';
import Icon25 from './Icon-msj/icon25';
import Icon26 from './Icon-msj/icon26';
import Icon27 from './Icon-msj/icon27';
import './estilosCss/Css011.css';

const style={
    titulo:{
        display: 'block',
        margin: '0 auto 10px auto',
        width: '80%',
        fontSize: '28px',
    },
    parrafo:{
        display: 'block',
        margin: '0 auto 0 auto',
        width: '80%',
        fontSize: '13px',
        textAlign: 'justify',
    } as React.CSSProperties,
    gridContainer:{
        // backgroundColor: '#ffeaa7',
        display: 'block',
        margin: '20px auto 0 auto',
        width: '80%',
        borderRadius: '4px',
    },
    grid2:{
        backgroundColor: '#F4FFF2',
        width: '100%',
        display: 'grid',
        gridTemplateRows: '28px 28px',
        gridTemplateColumns: '1fr 1fr',
        fontSize: '14px',
        alignItems: 'center',
        textAlign: 'center',
        // justifyContent: 'center',
        padding: '0px 0px 0px 0px',
    } as React.CSSProperties,
    grid3:{
        backgroundColor: '#F4FFF2',
        width: '100%',
        display: 'grid',
        gridTemplateRows: '28px 28px 28px',
        gridTemplateColumns: '1fr 1fr',
        fontSize: '14px',
        alignItems: 'center',
        textAlign: 'center',
        // justifyContent: 'center',
        padding: '0px 0px 0px 0px',
    } as React.CSSProperties,
    grid4:{
        backgroundColor: '#F4FFF2',
        width: '100%',
        display: 'grid',
        gridTemplateRows: '28px 28px 28px 28px',
        gridTemplateColumns: '1fr 1fr',
        fontSize: '14px',
        alignItems: 'center',
        textAlign: 'center',
        // justifyContent: 'center',
        padding: '0px 0px 0px 0px',
    } as React.CSSProperties,
    grid5:{
        backgroundColor: '#F4FFF2',
        width: '100%',
        display: 'grid',
        gridTemplateRows: '28px 28px 28px 28px 28px',
        gridTemplateColumns: '1fr 1fr',
        fontSize: '14px',
        alignItems: 'center',
        textAlign: 'center',
        // justifyContent: 'center',
        padding: '0px 0px 0px 0px',
    } as React.CSSProperties,
    grid6:{
        backgroundColor: '#F4FFF2',
        width: '100%',
        display: 'grid',
        gridTemplateRows: '28px 28px 28px 28px 28px 28px',
        gridTemplateColumns: '1fr 1fr',
        fontSize: '14px',
        alignItems: 'center',
        textAlign: 'center',
        // justifyContent: 'center',
        padding: '0px 0px 0px 0px',
    } as React.CSSProperties,
    grid7:{
        backgroundColor: '#F4FFF2',
        width: '100%',
        display: 'grid',
        gridTemplateRows: '28px 28px 28px 28px 28px 28px 28px',
        gridTemplateColumns: '1fr 1fr',
        fontSize: '14px',
        alignItems: 'center',
        textAlign: 'center',
        // justifyContent: 'center',
        padding: '0px 0px 0px 0px',
    } as React.CSSProperties,
    grid8:{
        backgroundColor: '#F4FFF2',
        width: '100%',
        display: 'grid',
        gridTemplateRows: '28px 28px 28px 28px 28px 28px 28px 28px',
        gridTemplateColumns: '1fr 1fr',
        fontSize: '14px',
        alignItems: 'center',
        textAlign: 'center',
        // justifyContent: 'center',
        padding: '0px 0px 0px 0px',
    } as React.CSSProperties,
    grid9:{
        backgroundColor: '#F4FFF2',
        width: '100%',
        display: 'grid',
        gridTemplateRows: '28px 28px 28px 28px 28px 28px 28px 28px 28px',
        gridTemplateColumns: '1fr 1fr',
        fontSize: '14px',
        alignItems: 'center',
        textAlign: 'center',
        // justifyContent: 'center',
        padding: '0px 0px 0px 0px',
    } as React.CSSProperties,
    grid12:{
        backgroundColor: '#F4FFF2',
        width: '100%',
        display: 'grid',
        gridTemplateRows: '28px 28px 28px 28px 28px 28px 28px 28px 28px 28px 28px 28px',
        gridTemplateColumns: '1fr 1fr',
        fontSize: '14px',
        alignItems: 'center',
        textAlign: 'center',
        // justifyContent: 'center',
        padding: '0px 0px 0px 0px',
    } as React.CSSProperties,
    gridT:{
        backgroundColor: '#DDE0FF',
        width: '100%',
        // height: '100%',
        display: 'grid',
        minHeight: '40px',
        // gridTemplateRows: '35px',
        gridTemplateColumns: '1fr',
        // alignItems: 'center',
        // margin: '20px 0 30px 0',
    },
    gridTitulo:{
        backgroundColor: '#ACEFA1',
        fontSize: '20px',
        width: 'calc(100% -15px)',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '15px',
    },
    icon:{
        color: '#636e72',
        fontSize: '20px',
        cursor: 'pointer',
    },
    espacio:{
        display: 'block',
        width: '100%',
        height: '20px',
    }
}

export default class Porciones extends React.Component{
    public render(){
        return(
            <div>
                <div className='box11'>
                    <h3 style={style.titulo}>Porciones de intercambio <Icon15/> </h3>
                    <p style={style.parrafo}>
                    Cuando hablamos de porciones de intercambio, nos referimos a alimentos de un mismo
                    grupo de alimentos, los cuales son equivalentes entre ellos en cuanto a su valor nutricional.
                    Esta equivalencia se da solamente entre alimentos de un mismo grupo.
                    <b> Ejemplo: </b> Una porción de manzana es equivalente con una porción de plátano,
                    porque ambos pertenecen al grupo de las frutas, pero no son equivalentes con otros alimentos 
                    como una porción de pan, lechuga, o almendras, ya que corresponden a grupos
                    diferentes.
                    </p>
                    <div style={style.gridContainer}> 
                        <div style={style.gridT}><div className='gridTitulo10'>
                           <b><Icon16/> Cereales - 1 porción equivale a:</b> </div> </div>
                        <div className='grid9-11'>
                            <div>Arroz cocido 3/4 Taza</div>
                            <div>Arroz crudo 1/4 Taza</div>
                            <div>Fideos cocidos 3/4 Taza</div>
                            <div>Fideos crudos 1/2 Taza</div>
                            <div>Pan marraqueta 1/2 Unidad</div>
                            <div>Pan hallulla 1/2 Unidad</div>
                            <div>Pan de molde 3 Rebanadas</div>
                            <div>Pan amasado 1/4 Unidad</div>
                            <div>Avena 1/2 Taza</div>
                            <div>Papa 1 Unidad chica</div>
                            <div>Galletas de soda 8 Unidades</div>
                            <div>Galletas de agua 8 Unidades</div>
                            <div>Quinoa cruda 1/4 Taza</div>
                            <div>Choclo 1 Taza</div>
                            <div>Sémola cruda 1/4 Taza</div>
                            <div>Harina de trigo 1/4 Taza</div>
                            <div>Maicena cruda 1/4 Taza</div>
                            <div>Chuchoca cruda 1/4 Taza</div>
                        </div>
                        <div style={style.espacio}></div>
                        <div style={style.gridT}><div  className='gridTitulo10'>
                            <b><Icon17/> Verduras - 1 porción equivale a:</b></div></div>
                        <div className='grid7-11' >
                            <div>Acelga cocida 1/2 Taza</div>
                            <div>Brócoli 1 Taza</div>
                            <div>Repollitos de bruzelas 1/2 Taza</div>
                            <div>Coliflor 1 Taza</div>
                            <div>Alcachofa 1 Unidad pequeña</div>
                            <div>Champiñones 3/4 Taza</div>
                            <div>Zanahoria 1 Taza</div>
                            <div>Zapallo italiano 1 Taza</div>
                            <div>Tomate 1 Unidad mediana</div>
                            <div>Betarraga 1/2 Taza</div>
                            <div>Espárragos 5 Unidades</div>
                            <div>Porotos verdes 3/4 Taza</div>
                            <div>Zapallo 1/2 Taza</div>
                            <div>Espinaca cocida 1/2 Taza</div>
                        </div>
                        <div style={style.espacio}></div>
                        <div style={style.gridT}><div  className='gridTitulo10'>
                            <b><Icon18/> Verduras de libre consumo - 1 porción equivale a:</b></div></div>
                        <div className='grid7-11'>
                            <div>Penca 1/2 Taza</div>
                            <div>Achicoria 1 Taza</div>
                            <div>Endivia 1 Taza</div>
                            <div>Acelga cruda 1 Taza</div>
                            <div>Repollo morado 1 Taza</div>
                            <div>Apio 1 Taza</div>
                            <div>Dientes de ajo 8 Unidades</div>
                            <div>Pimentón 1/2 Taza</div>
                            <div>Cochayuyo 2 Ramas de 25 x 4 cm</div>
                            <div>Espinaca cruda 1 Taza</div>
                            <div>Lechuga 1 Taza</div>
                            <div>Pepino 1 Taza</div>
                            <div>Zapallo italiano crudo 1 Taza</div>
                            <div>Rabanitos 5 Unidades</div>
                        </div>
                        <div style={style.espacio}></div>
                        <div> {/*GRUPO*/}
                            <div style={style.gridT}><div  className='gridTitulo10'>
                                <b><Icon19/> Frutas - 1 porción equivale a:</b></div></div>
                            <div className='grid12-11'>
                                <div>Manzana 1 unidad pequeña</div>
                                <div>Durazno 1 unidad pequeña</div>
                                <div>Frutillas 1 taza</div>
                                <div>Plátano 1/2 unidad</div>
                                <div>Sandía 1 taza</div>
                                <div>Melón 1 taza</div>
                                <div>Caqui 1 unidad pequeña</div>
                                <div>Ciruelas 3 unidades</div>
                                <div>Higos frescos 2 unidades</div>
                                <div>Moras 1/2 taza</div>
                                <div>Papaya 3 unidades</div>
                                <div>Piña 3/4 taza o 3 rodelas de 20x2 cm</div>
                                <div>Cerezas 15 unidades</div>
                                <div>Damascos 3 unidades pequeñas</div>
                                <div>Kiwis 2 unidades pequeñas</div>
                                <div>Naranja 1 unidad pequeña</div>
                                <div>Unas 10 unidades</div>
                                <div>Pera 1 unidad pequeña</div>
                                <div>Chirimoya 1/4 unidad</div>
                                <div>Frambuesas 1 taza</div>
                                <div>Membrillo 1 unidad pequeña</div>
                                <div>Nisperos 7 unidades</div>
                                <div>Pepino dulce 1 unidad grande</div>
                                <div>Tunas 2 unidades</div>
                            </div>
                            <div style={style.espacio}></div>
                        </div> {/*FIN GRUPO*/}
                        <div> {/*GRUPO*/}
                            <div style={style.gridT}><div  className='gridTitulo10'>
                                <b><Icon20/> Proteína vegetal - 1 porción equivale a:</b></div></div>
                            <div className='grid4-11'>
                                <div>Lenteja cocida 3/4 taza</div>
                                <div>Lentejas crudas 1/4 taza</div>
                                <div>Poroto cocido 3/4 taza</div>
                                <div>Poroto crudo 1/4 taza</div>
                                <div>Garbanzo cocido 3/4 taza</div>
                                <div>Garbanzo crudo 1/4 taza</div>
                                <div>Carne de soya cruda 1/2 taza</div>
                                <div>Hamburguesa vegetal 1/2 unidad</div>
                            </div>
                            <div style={style.espacio}></div>
                        </div> {/*FIN GRUPO*/}
                        <div> {/*GRUPO*/}
                            <div style={style.gridT}><div  className='gridTitulo10'>
                                <b><Icon21/> Carnes bajas en grasa - 1 porción equivale a:</b></div></div>
                            <div className='grid12-11'>
                                <div>Vacuno filete trozo de 6x6x1 cm</div>
                                <div>Vacuno asiento picana trozo de 6x6x1 cm</div>
                                <div>Vacuno filete trozo de 6x6x1 cm</div>
                                <div>Vacuno lomo liso trozo de 6x6x1 cm</div>
                                <div>Vacuno pollo ganso trozo de 6x6x1 cm</div>
                                <div>Vacuno posta negra/rosada trozo de 6x6x1 cm</div>
                                <div>Cordero pulpa trozo de 6x6x1 cm</div>
                                <div>Cerdo filete trozo de 6x6x1 cm</div>
                                <div>Cerdo pulpa trozo de 6x6x1 cm</div>
                                <div>Pollo pechuga trozo de 6x6x1 cm</div>
                                <div>Pollo pierna trozo de 6x6x1 cm</div>
                                <div>Pavo trozo de 6x6x1 cm</div>
                                <div>Pato trozo de 6x6x1 cm</div>
                                <div>Jamón de pavo 1 tajada</div>
                                <div>Huevo 1 unidad</div>
                                <div>Atún en agua 1/3 taza o 1/2 lata</div>
                                <div>Congrio trozo de 10x6x1 cm</div>
                                <div>Corvija trozo de 10x6x1 cm</div>
                                <div>Jurel trozo de 10x6x1 cm</div>
                                <div>Lenguado trozo de 10x6x1 cm</div>
                                <div>Merluza trozo de 10x6x1 cm</div>
                                <div>Pejerrey trozo de 10x6x1 cm</div>
                                <div>Reineta trozo de 10x6x1 cm</div>
                                <div>Camaron 20 Unidades</div>
                            </div>
                            <div style={style.gridT}><div  className='gridTitulo10'>
                                <b><Icon22/> Carnes altas en grasa - 1 porción equivale a:</b></div></div>
                                <div className='grid8-11'>
                                <div>Vacuno guachalomo trozo de 6x6x1 cm</div>
                                <div>Vacuno lomo vetado trozo de 6x6x1 cm</div>
                                <div>Vacuno plateada trozo de 6x6x1 cm</div>
                                <div>Cordero chuleta trozo de 6x6x1 cm</div>
                                <div>Cerdo chuleta trozo de 6x6x1 cm</div>
                                <div>Vacuno higado trozo de 6x6x2 cm</div>
                                <div>Cordero higado trozo de 6x6x2 cm</div>
                                <div>Pollo higado trozo de 6x6x2 cm</div>
                                <div>Jamón 1 tajada</div>
                                <div>Longaniza 1 rodela de 4 cm</div>
                                <div>Mortadela 3 tajadas</div>
                                <div>Prieta 1 unidad de 4 cm</div>
                                <div>Salame 1 tajada</div>
                                <div>Vienesa 1 unidad</div>
                                <div>Atún en aceite 1/3 taza o 1/2 lata</div>
                                <div>Jurel en aceite 1/3 taza</div>
                            </div>
                            <div style={style.espacio}></div>
                        </div> {/*FIN GRUPO*/}
                        <div> {/*GRUPO*/}
                            <div style={style.gridT}><div  className='gridTitulo10'>
                                <b><Icon23/> Agregados - 1 porción equivale a: </b></div></div>
                            <div className='grid3-11'>
                                <div>Huevo 1 unidad</div>
                                <div>Palta 1 cucharada 1/2</div>
                                <div>Quesillo 3 rebanadas de 1 cm</div>
                                <div>Hummus 1 cucharadas 1/2</div>
                                <div>Queso 1/2 lámina</div>
                                <div>Jamón de pavo 1 tajada</div>
                            </div>
                            <div style={style.espacio}></div>
                        </div> {/*FIN GRUPO*/}
                        <div> {/*GRUPO*/}
                            <div style={style.gridT}><div  className='gridTitulo10'>
                                <b><Icon23/> Agregados para veganos - 1 porción equivale a: </b></div></div>
                            <div className='grid2-11'>
                                <div>Palta 1 cucharada 1/2</div>
                                <div>Hummus 1 cucharadas 1/2</div>
                                <div>Crema de maní 1 cucharadita</div>
                                <div>Tofu 1 rebanada</div>
                            </div>
                            <div style={style.espacio}></div>
                        </div> {/*FIN GRUPO*/}
                        <div> {/*GRUPO*/}
                            <div style={style.gridT}><div  className='gridTitulo10'>
                                <b><Icon25/> Altos en calcio fuente vegetal - 1 porción equivale a:</b></div></div>
                            <div className='grid3-11'>
                                <div>Semillas de amapola 2 cucharadas 1/2</div>
                                <div>Semillas de sésamo 2 cucharadas 1/2</div>
                                <div>Chía 2 cucharadas 1/2</div>
                                <div>Almendras 26 unidades</div>
                                <div>Leche fluida vegetal 200cc</div>
                                <div>Tofu 1 rebanada</div>
                            </div>
                            <div style={style.gridT}><div  className='gridTitulo10'>
                                <b><Icon26/> Altos en calcio fuente láctea - 1 porción equivale a:</b></div></div>
                            <div className='grid3-11'>
                                <div>Semillas de amapola 2 cucharadas 1/2</div>
                                <div>Semillas de sésamo 2 cucharadas 1/2</div>
                                <div>Chía 2 cucharadas 1/2</div>
                                <div>Almendras 26 unidades</div>
                                <div>Leche fluida vegetal 200cc</div>
                                <div>Tofu 1 rebanada</div>
                            </div>
                            <div style={style.espacio}></div>
                        </div> {/*FIN GRUPO*/}
                        <div> {/*GRUPO*/}
                            <div style={style.gridT}><div  className='gridTitulo10'>
                                <b><Icon27/> Aceites y grasas - 1 porción equivale a:</b></div></div>
                            <div  className='grid5-11'>
                                <div>Aceite de oliva 4 cucharaditas</div>
                                <div>Aceite de maravilla 4 cucharaditas</div>
                                <div>Aceite de soja 4 cucharaditas</div>
                                <div>Aceite de canola 4 cucharaditas</div>
                                <div>Aceite de coco 4 cucharaditas</div>
                                <div>Aceite de maiz 4 cucharaditas</div>
                                <div>Margarina 4 cucharaditas </div>
                                <div>Mantequilla 4 cucharaditas</div>
                                <div>Grasa animal 2 cucharadas</div>
                                <div>Grasa vegetal 2 cucharadas</div>
                            </div>
                            <div style={style.espacio}></div>
                        </div> {/*FIN GRUPO*/}
                        <div> {/*GRUPO*/}
                            <div style={style.gridT}><div  className='gridTitulo10'>
                                <b><Icon24/> Frutos secos y semillas - 1 porción equivale a: </b></div></div>
                            <div  className='grid5-11'>
                                <div>Almendras 26 unidades</div>
                                <div>Nueces 5 unidades</div>
                                <div>Avellanas 50 unidades</div>
                                <div>Pistachos 40 unidades.</div>
                                <div>Semillas de sésamo 2 cucharadas 1/2</div>
                                <div>Semillas de amapola 2 cucharadas 1/2</div>
                                <div>Semillas de zapallo 2 cucharadas 1/2</div>
                                <div>Semillas de maravilla 2 cucharadas 1/2</div>
                                <div>Semillas de linaza 2 cucharadas 1/2</div>
                                <div>Chía 2 cucharadas 1/2</div>
                            </div>
                            <div style={style.espacio}></div>
                        </div> {/*FIN GRUPO*/}
                    </div>
                </div>
            </div>
        )
    }
}