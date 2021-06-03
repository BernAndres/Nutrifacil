import * as React from 'react';
import Box from '../components/box';

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
        fontSize: '15px',
        textAlign: 'justify',
    } as React.CSSProperties,
    gridContainer:{
        // backgroundColor: '#ffeaa7',
        display: 'block',
        margin: '20px auto 0 auto',
        width: '80%',
        borderRadius: '4px',
    },
    grid:{
        backgroundColor: '#DDE0FF',
        width: '100%',
        display: 'grid',
        gridTemplateRows: '45px 180px',
        alignItems: 'center',
        margin: '20px 0 30px 0',
    },
    gridTitulo:{
        fontSize: '20px',
        paddingLeft: '15px',
    },
}
export default class Recetas extends React.Component{
    public render(){
        return(
            <div>
                <Box>
                    <h3 style={style.titulo}>Recetas para tus comidas</h3>
                    <p style={style.parrafo}>
                    Ahora que ya sabes que alimentos consumir y en que cantidad, dale más estilo a tus
                    preparaciones! inspirate con algunos de estos ejemplos:
                    </p>
                    <div style={style.gridContainer}>
                        <div style={style.grid}>
                            <h4 style={style.gridTitulo}>Recetas para tu desayuno</h4>
                        </div>

                        <div style={style.grid}>
                            <h4 style={style.gridTitulo}>Recetas para tu almuerzo</h4>
                        </div>

                        <div style={style.grid}>
                            <h4 style={style.gridTitulo}>Recetas para tu merienda</h4>
                        </div>

                        <div style={style.grid}>
                            <h4 style={style.gridTitulo}>Recetas para tu cena</h4>
                        </div>
                    </div>
                </Box>
            </div>
        )
    }
}