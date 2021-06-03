import React from 'react';
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import Logout from '../components/logout'

const style = {
    container:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputt:{
        width: '400px',
    },
    botonCrearDatos:{
        border: '2px solid black',
        width: '400px',
        textAlign: 'center',
        cursor: 'pointer',
        }
};

export default function CrearDatosUsuario(){

    async function enviarDatos(){
        const datosForm = await document.getElementById('userDatosForm');  
        datosForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const db = await firebase.firestore();
            const dato1 = await datosForm['nombre'].value;
            const dato2 = await datosForm['apellido'].value;
            const dato3 = await datosForm['fConsulta'].value;
            const dato4 = await datosForm['fProxControl'].value;
            const dato5 = await datosForm['DCereales'].value;
            const dato6 = await datosForm['DAgregados'].value;
            const dato7 = await datosForm['DAltosCalcio'].value;
            const dato8 = await datosForm['DFrutas'].value;
            const dato9 = await datosForm['DFrutossemillas'].value;
            const dato10 = await datosForm['DAceites'].value;
            const dato11 = await datosForm['ACereales'].value;
            const dato12 = await datosForm['AVerduras1'].value;
            const dato13 = await datosForm['AVerduras2'].value;
            const dato14 = await datosForm['AProteinas'].value;
            const dato15 = await datosForm['AFrutas'].value;
            const dato16 = await datosForm['AAceites'].value;
            const dato17 = await datosForm['OCereales'].value;
            const dato18 = await datosForm['OAgregados'].value;
            const dato19 = await datosForm['OAltosCalcio'].value;
            const dato20 = await datosForm['OFrutas'].value;
            const dato21 = await datosForm['OFrutossemillas'].value;
            const dato22 = await datosForm['OAceites'].value;
            const dato23 = await datosForm['CCereales'].value;
            const dato24 = await datosForm['CVerduras1'].value;
            const dato25 = await datosForm['CVerduras2'].value;
            const dato26 = await datosForm['CProteinas'].value;
            const dato27 = await datosForm['CFrutas'].value;
            const dato28 = await datosForm['CAceites'].value;
            const dato29 = await datosForm['LCA1'].value;
            const dato30 = await datosForm['LCA2'].value;
            const dato31 = await datosForm['LCA3'].value;
            const dato32 = await datosForm['LCA4'].value;
            const dato33 = await datosForm['LCA5'].value;
            const dato34 = await datosForm['LCA6'].value;
            const dato35 = await datosForm['LCA7'].value;
            const dato36 = await datosForm['LCA8'].value;
            const dato37 = await datosForm['LCA9'].value;
            const dato38 = await datosForm['LCA10'].value;
            const dato39 = await datosForm['LCL1'].value;
            const dato40 = await datosForm['LCL2'].value;
            const dato41 = await datosForm['LCL3'].value;
            const dato42 = await datosForm['LCL4'].value;
            const dato43 = await datosForm['LCL5'].value;
            const dato44 = await datosForm['LCL6'].value;
            const dato45 = await datosForm['LCL7'].value;
            const dato46 = await datosForm['LCL8'].value;
            const dato47 = await datosForm['LCL9'].value;
            const dato48 = await datosForm['LCL10'].value;
            const dato49 = await datosForm['LCD1'].value;
            const dato50 = await datosForm['LCD2'].value;
            const dato51 = await datosForm['LCD3'].value;
            const dato52 = await datosForm['LCD4'].value;
            const dato53 = await datosForm['LCD5'].value;
            const dato54 = await datosForm['LCD6'].value;
            const dato55 = await datosForm['LCD7'].value;
            const dato56 = await datosForm['LCD8'].value;
            const dato57 = await datosForm['LCD9'].value;
            const dato58 = await datosForm['LCD10'].value;
            const dato59 = await datosForm['Peso'].value;
            const dato60 = await datosForm['Talla'].value;
            const dato61 = await datosForm['IMC'].value;
            const dato62 = await datosForm['MasaMusc1'].value;
            const dato63 = await datosForm['MasaOsea1'].value;
            const dato64 = await datosForm['MasaGrasa1'].value;
            const dato65 = await datosForm['MasaMusc2'].value;
            const dato66 = await datosForm['MasaOsea2'].value;
            const dato67 = await datosForm['MasaGrasa2'].value;
            const dato68 = await datosForm['PliBic'].value;
            const dato69 = await datosForm['PliTri'].value;
            const dato70 = await datosForm['PliSub'].value;
            const dato71 = await datosForm['PliCI'].value;
            const dato72 = await datosForm['PliSup'].value;
            const dato73 = await datosForm['PliAbd'].value;
            const dato74 = await datosForm['PliMA'].value;
            const dato75 = await datosForm['PliPM'].value;

            const dato76 = await datosForm['PerBR'].value;
            const dato77 = await datosForm['PerBF'].value;
            const dato78 = await datosForm['PerCin'].value;
            const dato79 = await datosForm['PerGlu'].value;
            const dato80 = await datosForm['PerPie'].value;

            const dato81 = await datosForm['Tarea1'].value;
            const dato82 = await datosForm['Tarea2'].value;
            const dato83 = await datosForm['Tarea3'].value;
            const dato84 = await datosForm['Tarea4'].value;
            const dato85 = await datosForm['Tarea5'].value;


            let {currentUser : user} = await firebase.auth();
                if (user != null) {
                var uid = user.uid;
                };

            await db.collection("infoUsuarios").doc(uid).set({
                nombre: dato1,
                apellido: dato2,
                fConsulta: dato3,
                fProxControl: dato4,
                DCereales: dato5,
                DAgregados: dato6,
                DAltosCalcio: dato7,
                DFrutas: dato8,
                DFrutossemillas: dato9,
                DAceites: dato10,
                ACereales: dato11,
                AVerduras1: dato12,
                AVerduras2: dato13,
                AProteinas: dato14,
                AFrutas: dato15,
                AAceites: dato16,
                OCereales: dato17,
                OAgregados: dato18,
                OAltosCalcio: dato19,
                OFrutas: dato20,
                OFrutossemillas: dato21,
                OAceites: dato22,
                CCereales: dato23,
                CVerduras1: dato24,
                CVerduras2: dato25,
                CProteinas: dato26,
                CFrutas: dato27,
                CAceites: dato28,
                LCA1: dato29,
                LCA2: dato30,
                LCA3: dato31,
                LCA4: dato32,
                LCA5: dato33,
                LCA6: dato34,
                LCA7: dato35,
                LCA8: dato36,
                LCA9: dato37,
                LCA10: dato38,
                LCL1: dato39,
                LCL2: dato40,
                LCL3: dato41,
                LCL4: dato42,
                LCL5: dato43,
                LCL6: dato44,
                LCL7: dato45,
                LCL8: dato46,
                LCL9: dato47,
                LCL10: dato48,
                LCD1: dato49,
                LCD2: dato50,
                LCD3: dato51,
                LCD4: dato52,
                LCD5: dato53,
                LCD6: dato54,
                LCD7: dato55,
                LCD8: dato56,
                LCD9: dato57,
                LCD10: dato58,
                Peso: dato59,
                Talla: dato60,
                IMC: dato61,
                MasaMusc1: dato62,
                MasaOsea1: dato63,
                MasaGrasa1: dato64,
                MasaMusc2: dato65,
                MasaOsea2: dato66,
                MasaGrasa2: dato67,
                PliBic: dato68,
                PliTric: dato69,
                PliSub: dato70,
                PliCI: dato71,
                PliSup: dato72,
                PliAbd: dato73,
                PliMA: dato74,
                PliPM: dato75,
                PerBR: dato76,
                PerBF: dato77,
                PerCin: dato78,
                PerGlu: dato79,
                PerPie: dato80,
                Tarea1: dato81,
                Tarea2: dato82,
                Tarea3: dato84,
                Tarea5: dato85,
            })
            console.log(dato1);
        })
    }

    return(
        <div style={style.container}>
            <form id='userDatosForm' style={style.container }>
                <p>DATOS NUEVO USUARIO</p>
                <input style={style.inputt} type="text" id="nombre" placeholder='Nombre' autoFocus/>
                <input style={style.inputt} type="text" id="apellido" placeholder='Apellido'/>
                <input style={style.inputt} type="text" id="fConsulta" placeholder='Fecha consulta'/>
                <input style={style.inputt} type="text" id="fProxControl" placeholder='Fecha próximo control'/>
                
                <input style={style.inputt} type="text" id="DCereales" placeholder='Porciones cereales desayuno'/>
                <input style={style.inputt} type="text" id="DAgregados" placeholder='Porciones agregados desayuno'/>
                <input style={style.inputt} type="text" id="DAltosCalcio" placeholder='Porciones altos en calcio desayuno'/>
                <input style={style.inputt} type="text" id="DFrutas" placeholder='Porciones fruta desayuno'/>
                <input style={style.inputt} type="text" id="DFrutossemillas" placeholder='Porciones frutos secos y semillas desayuno'/>
                <input style={style.inputt} type="text" id="DAceites" placeholder='Porciones aceite desayuno'/>
                <input style={style.inputt} type="text" id="ACereales" placeholder='Porciones cereales almuerzo'/>
                <input style={style.inputt} type="text" id="AVerduras1" placeholder='Porciones verduras CG almuerzo'/>
                <input style={style.inputt} type="text" id="AVerduras2" placeholder='Porciones verduras LC almuerzo'/>
                <input style={style.inputt} type="text" id="AProteinas" placeholder='Porciones proteina almuerzo'/>
                <input style={style.inputt} type="text" id="AFrutas" placeholder='Porciones frutas almuerzo'/>
                <input style={style.inputt} type="text" id="AAceites" placeholder='Porciones aceite almuerzo'/>
         
                <input style={style.inputt} type="text" id="OCereales" placeholder='Porciones cereales once'/>
                <input style={style.inputt} type="text" id="OAgregados" placeholder='Porciones agregados once'/>
                <input style={style.inputt} type="text" id="OAltosCalcio" placeholder='Porciones altos en calcio once'/>
                <input style={style.inputt} type="text" id="OFrutas" placeholder='Porciones fruta once'/>
                <input style={style.inputt} type="text" id="OFrutossemillas" placeholder='Porciones frutos secos y semillas once'/>
                <input style={style.inputt} type="text" id="OAceites" placeholder='Porciones aceite once'/>
                <input style={style.inputt} type="text" id="CCereales" placeholder='Porciones cereales cena'/>
                <input style={style.inputt} type="text" id="CVerduras1" placeholder='Porciones verduras CG cena'/>
                <input style={style.inputt} type="text" id="CVerduras2" placeholder='Porciones verduras LC cena'/>
                <input style={style.inputt} type="text" id="CProteinas" placeholder='Porciones proteina cena'/>
                <input style={style.inputt} type="text" id="CFrutas" placeholder='Porciones frutas cena'/>
                <input style={style.inputt} type="text" id="CAceites" placeholder='Porciones aceite cena'/>

                <input style={style.inputt} type="text" id="LCA1" placeholder='Aumentar 1 lista compras'/>
                <input style={style.inputt} type="text" id="LCA2" placeholder='Aumentar 2 lista compras'/>
                <input style={style.inputt} type="text" id="LCA3" placeholder='Aumentar 3 lista compras'/>
                <input style={style.inputt} type="text" id="LCA4" placeholder='Aumentar 4 lista compras'/>
                <input style={style.inputt} type="text" id="LCA5" placeholder='Aumentar 5 lista compras'/>
                <input style={style.inputt} type="text" id="LCA6" placeholder='Aumentar 6 lista compras'/>
                <input style={style.inputt} type="text" id="LCA7" placeholder='Aumentar 7 lista compras'/>
                <input style={style.inputt} type="text" id="LCA8" placeholder='Aumentar 8 lista compras'/>
                <input style={style.inputt} type="text" id="LCA9" placeholder='Aumentar 9 lista compras'/>
                <input style={style.inputt} type="text" id="LCA10" placeholder='Aumentar 10 lista compras'/>

                <input style={style.inputt} type="text" id="LCL1" placeholder='Limitar 1 lista compras'/>
                <input style={style.inputt} type="text" id="LCL2" placeholder='Limitar 2 lista compras'/>
                <input style={style.inputt} type="text" id="LCL3" placeholder='Limitar 3 lista compras'/>
                <input style={style.inputt} type="text" id="LCL4" placeholder='Limitar 4 lista compras'/>
                <input style={style.inputt} type="text" id="LCL5" placeholder='Limitar 5 lista compras'/>
                <input style={style.inputt} type="text" id="LCL6" placeholder='Limitar 6 lista compras'/>
                <input style={style.inputt} type="text" id="LCL7" placeholder='Limitar 7 lista compras'/>
                <input style={style.inputt} type="text" id="LCL8" placeholder='Limitar 8 lista compras'/>
                <input style={style.inputt} type="text" id="LCL9" placeholder='Limitar 9 lista compras'/>
                <input style={style.inputt} type="text" id="LCL10" placeholder='Limitar 10 lista compras'/>

                <input style={style.inputt} type="text" id="LCD1" placeholder='Limitar 1 lista compras'/>
                <input style={style.inputt} type="text" id="LCD2" placeholder='Limitar 2 lista compras'/>
                <input style={style.inputt} type="text" id="LCD3" placeholder='Limitar 3 lista compras'/>
                <input style={style.inputt} type="text" id="LCD4" placeholder='Limitar 4 lista compras'/>
                <input style={style.inputt} type="text" id="LCD5" placeholder='Limitar 5 lista compras'/>
                <input style={style.inputt} type="text" id="LCD6" placeholder='Limitar 6 lista compras'/>
                <input style={style.inputt} type="text" id="LCD7" placeholder='Limitar 7 lista compras'/>
                <input style={style.inputt} type="text" id="LCD8" placeholder='Limitar 8 lista compras'/>
                <input style={style.inputt} type="text" id="LCD9" placeholder='Limitar 9 lista compras'/>
                <input style={style.inputt} type="text" id="LCD10" placeholder='Limitar 10 lista compras'/>

                <input style={style.inputt} type="text" id="Peso" placeholder=''/>
                <input style={style.inputt} type="text" id="Talla" placeholder=''/>
                <input style={style.inputt} type="text" id="IMC" placeholder=''/>
                <input style={style.inputt} type="text" id="MasaMusc1" placeholder='% Masa muscular'/>
                <input style={style.inputt} type="text" id="MasaOsea1" placeholder='% Masa osea'/>
                <input style={style.inputt} type="text" id="MasaGrasa1" placeholder='% Masa grasa'/>
                <input style={style.inputt} type="text" id="MasaMusc2" placeholder='Kg Masa muscular'/>
                <input style={style.inputt} type="text" id="MasaOsea2" placeholder='Kg Masa osea'/>
                <input style={style.inputt} type="text" id="MasaGrasa2" placeholder='Kg Masa grasa'/>

                <input style={style.inputt} type="text" id="PliBic" placeholder='Pliegue Bicipita.'/>
                <input style={style.inputt} type="text" id="PliTri" placeholder='Pliegue Tricipital'/>
                <input style={style.inputt} type="text" id="PliSub" placeholder='Pliegue Subescapular'/>
                <input style={style.inputt} type="text" id="PliCI" placeholder='Pliegue Cresta Iliaca'/>
                <input style={style.inputt} type="text" id="PliSup" placeholder='Pliegue Supraespinal'/>
                <input style={style.inputt} type="text" id="PliAbd" placeholder='Pliegue Abdominal'/>
                <input style={style.inputt} type="text" id="PliMA" placeholder='Pliegue Muslo Anterior'/>
                <input style={style.inputt} type="text" id="PliPM" placeholder='Pliegue Pierna Medial'/>

                <input style={style.inputt} type="text" id="PerBR" placeholder='Perimetro Brazo relajado'/>
                <input style={style.inputt} type="text" id="PerBF" placeholder='Perimetro Brazo flexionado'/>
                <input style={style.inputt} type="text" id="PerCin" placeholder='Perimetro Cintura'/>
                <input style={style.inputt} type="text" id="PerGlu" placeholder='Perimetro Gluteos'/>
                <input style={style.inputt} type="text" id="PerPie" placeholder='Perimetro Pierna medial'/>

                <input style={style.inputt} type="text" id="Tarea1" placeholder='Tarea 1'/>
                <input style={style.inputt} type="text" id="Tarea2" placeholder='Tarea 2'/>
                <input style={style.inputt} type="text" id="Tarea3" placeholder='Tarea 3'/>
                <input style={style.inputt} type="text" id="Tarea4" placeholder='Tarea 4'/>
                <input style={style.inputt} type="text" id="Tarea5" placeholder='Tarea 5'/>
         
                <button onClick={enviarDatos} id='btnForm' type='submit'>Guardar datos</button>
                <Logout/>
            </form>
        </div>
    );
}