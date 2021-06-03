import React, {Component} from 'react';

export default class Pdf1 extends Component{
    render(){
        return(
            <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                hola
                {/* OPCION 1 */}
                <a href="../assets/pdfs/DocumentoDePrueba.pdf"></a>
                {/* OPCION 2 */}
                <iframe src="../assets/pdfs/DocumentoDePrueba.pdf"></iframe>
                {/* OPCION 3 */}
                <object 
                    data={require('../assets/pdfs/DocumentoDePrueba.pdf')}
                    type="application/pdf"
                    width='100%'
                    height='100%'
                    >

                </object>
            </div>
        )
    }
}