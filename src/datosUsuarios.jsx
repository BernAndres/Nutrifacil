import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

//DATA SALUDAR NOMBRE
// export const dataSaludarNombre = async function() {

    //Usando await/async vamos a esperar a que cargue el usuario antes de seguir con el código
  //   let {currentUser : user} = await firebase.auth();
    
  //   if (user != null) {
  //     var uid = user.uid;
  //   }
    
  //   const db = firebase.firestore();
  
  //   //Aquí tambien esperamos a tener un resultado
  //   var docRef = await db.collection("infoUsuarios").doc(uid)
    
  //   docRef.onSnapshot(function(doc) {
  //     const saludar = document.getElementById("saludar");
  //     if (doc && doc.exists  && !(doc.data().Saludar==null||doc.data().Saludar==0)) {
  //       saludar.innerText = "¡"+doc.data().Saludar + " " + doc.data().Nombre+"!";
  //     }else{
  //     setTimeout(()=>{
  //       document.getElementById("nombre00l").style.display = "none";
  //     },100);  
  //     }
  //   }
  //   );
  // }

  //DATA NOMBRE
  export const dataNombre = async function() {
    let {currentUser : user} = await firebase.auth();
    if (user != null) {
      var uid = user.uid;
    }
    const db = firebase.firestore();
    var docRef = await db.collection("infoUsuarios").doc(uid)
    docRef.onSnapshot(function(doc) {
      const saludar = document.getElementById("idNombreUsuario");
      // const saludar = document.getElementsByClassName("classNombreUsuario");
      if (doc && doc.exists) {
        saludar.innerText = doc.data().Nombre;
      }
    }
    );
  }

//DATA DESAYUNO
export const dataDesayuno = async function() { //MODIFICAR
  let {currentUser : user} = await firebase.auth();
  if (user != null) {
    var uid = user.uid;
  }
  const db = firebase.firestore(); 
  var docRef = await db.collection("infoUsuarios").doc(uid)
  docRef.onSnapshot(function(doc) {
    const callId1 = document.getElementById("idDCereales"); //MODIFICAR
    const callId2 = document.getElementById("idDAgregados"); //MODIFICAR
    const callId3 = document.getElementById("idDAltoscalcio"); //MODIFICAR
    const callId4 = document.getElementById("idDFrutas"); //MODIFICAR
    const callId5 = document.getElementById("idDFrutossemillas"); //MODIFICAR
    const callId6 = document.getElementById("idDAceites"); //MODIFICAR
    if (doc && doc.exists) {
      callId1.innerText = doc.data().DCereales; //MODIFICAR
      callId2.innerText = doc.data().DAgregados; 
      callId3.innerText = doc.data().DAltoscalcio; //MODIFICAR
      callId4.innerText = doc.data().DFrutas; //MODIFICAR
      callId5.innerText = doc.data().DFrutossemillas; //MODIFICAR
      callId6.innerText = doc.data().DAceites; 
    }}
    );}
//DATA ALMUERZO
export const dataAlmuerzo = async function() { //MODIFICAR
  let {currentUser : user} = await firebase.auth();
  if (user != null) {
    var uid = user.uid;
  }
  const db = firebase.firestore(); 
  var docRef = await db.collection("infoUsuarios").doc(uid)
  docRef.onSnapshot(function(doc) {
    const callId1 = document.getElementById("idACereales"); //MODIFICAR
    const callId2 = document.getElementById("idAVerduras1"); //MODIFICAR
    const callId3 = document.getElementById("idAVerduras2"); //MODIFICAR
    const callId4 = document.getElementById("idAProteinas"); //MODIFICAR
    const callId5 = document.getElementById("idAFrutas"); //MODIFICAR
    const callId6 = document.getElementById("idAAceites"); //MODIFICAR
    if (doc && doc.exists) {
      callId1.innerText = doc.data().ACereales; //MODIFICAR
      callId2.innerText = doc.data().AVerduras1; //MODIFICAR
      callId3.innerText = doc.data().AVerduras2; //MODIFICAR
      callId4.innerText = doc.data().AProteinas; //MODIFICAR
      callId5.innerText = doc.data().AFrutas; //MODIFICAR
      callId6.innerText = doc.data().AAceites; //MODIFICAR
    }}
    );}
//DATA MERRIENDA / ONCE PROBANDO
export const dataOnce = async function() { //MODIFICAR
  let {currentUser : user} = await firebase.auth();
  if (user != null) {
    var uid = user.uid;
  }
  const db = firebase.firestore(); 
  var docRef = await db.collection("infoUsuarios").doc(uid)
  docRef.onSnapshot(function(doc) {
    const callId1 = document.getElementById("idOCereales"); //MODIFICAR
    const callId2 = document.getElementById("idOAgregados"); //MODIFICAR
    const callId3 = document.getElementById("idOAltoscalcio"); //MODIFICAR
    const callId4 = document.getElementById("idOFrutas"); //MODIFICAR
    const callId5 = document.getElementById("idOFrutossemillas"); //MODIFICAR
    const callId6 = document.getElementById("idOAceites"); //MODIFICAR
    if (doc && doc.exists) {
      callId1.innerText = doc.data().OCereales; //MODIFICAR
      callId2.innerText = doc.data().OAgregados; //MODIFICAR
      callId3.innerText = doc.data().OAltoscalcio; //MODIFICAR
      callId4.innerText = doc.data().OFrutas; //MODIFICAR
      callId5.innerText = doc.data().OFrutossemillas; //MODIFICAR
      callId6.innerText = doc.data().OAceites; //MODIFICAR
    }}
    );}
//DATA CENA
export const dataCena = async function() { //MODIFICAR
  let {currentUser : user} = await firebase.auth();
  if (user != null) {
    var uid = user.uid;
  }
  const db = firebase.firestore(); 
  var docRef = await db.collection("infoUsuarios").doc(uid)
  docRef.onSnapshot(function(doc) {
    const callId1 = document.getElementById("idCCereales"); //MODIFICAR
    const callId2 = document.getElementById("idCVerduras1"); //MODIFICAR
    const callId3 = document.getElementById("idCVerduras2"); //MODIFICAR
    const callId4 = document.getElementById("idCProteinas"); //MODIFICAR
    const callId5 = document.getElementById("idCFrutas"); //MODIFICAR
    const callId6 = document.getElementById("idCAceites"); //MODIFICAR
    if (doc && doc.exists) {
      callId1.innerText = doc.data().CCereales; //MODIFICAR
      callId2.innerText = doc.data().CVerduras1; //MODIFICAR
      callId3.innerText = doc.data().CVerduras2; //MODIFICAR
      callId4.innerText = doc.data().CProteinas; //MODIFICAR
      callId5.innerText = doc.data().CFrutas; //MODIFICAR
      callId6.innerText = doc.data().CAceites; //MODIFICAR
    }}
    );}
//DATA LISTA DE COMPRAS
export const dataListaCompras = async function() { //MODIFICAR
  let {currentUser : user} = await firebase.auth();
  if (user != null) {
    var uid = user.uid;
  }
  const db = firebase.firestore(); 
  var docRef = await db.collection("infoUsuarios").doc(uid)
  docRef.onSnapshot(function(doc) {
    const callId1 = document.getElementById("idListaCompAum1"); //MODIFICAR
    const callId2 = document.getElementById("idListaCompAum2"); //MODIFICAR
    const callId3 = document.getElementById("idListaCompAum3"); //MODIFICAR
    const callId4 = document.getElementById("idListaCompAum4"); //MODIFICAR
    const callId5 = document.getElementById("idListaCompAum5"); //MODIFICAR
    const callId6 = document.getElementById("idListaCompAum6"); //MODIFICAR
    const callId7 = document.getElementById("idListaCompAum7"); //MODIFICAR
    const callId8 = document.getElementById("idListaCompAum8"); //MODIFICAR
    const callId9 = document.getElementById("idListaCompAum9"); //MODIFICAR
    const callId10 = document.getElementById("idListaCompAum10"); //MODIFICAR
    const callId11 = document.getElementById("idListaCompLim1"); //MODIFICAR
    const callId12 = document.getElementById("idListaCompLim2"); //MODIFICAR
    const callId13 = document.getElementById("idListaCompLim3"); //MODIFICAR
    const callId14 = document.getElementById("idListaCompLim4"); //MODIFICAR
    const callId15 = document.getElementById("idListaCompLim5"); //MODIFICAR
    const callId16 = document.getElementById("idListaCompLim6"); //MODIFICAR
    const callId17 = document.getElementById("idListaCompLim7"); //MODIFICAR
    const callId18 = document.getElementById("idListaCompLim8"); //MODIFICAR
    const callId19 = document.getElementById("idListaCompLim9"); //MODIFICAR
    const callId20 = document.getElementById("idListaCompLim10"); //MODIFICAR
    const callId21 = document.getElementById("idListaCompDis1"); //MODIFICAR
    const callId22 = document.getElementById("idListaCompDis2"); //MODIFICAR
    const callId23 = document.getElementById("idListaCompDis3"); //MODIFICAR
    const callId24 = document.getElementById("idListaCompDis4"); //MODIFICAR
    const callId25 = document.getElementById("idListaCompDis5"); //MODIFICAR
    const callId26 = document.getElementById("idListaCompDis6"); //MODIFICAR
    const callId27 = document.getElementById("idListaCompDis7"); //MODIFICAR
    const callId28 = document.getElementById("idListaCompDis8"); //MODIFICAR
    const callId29 = document.getElementById("idListaCompDis9"); //MODIFICAR
    const callId30 = document.getElementById("idListaCompDis10"); //MODIFICAR
    if (doc && doc.exists) {
      callId1.innerText = doc.data().LCA1; //MODIFICAR
      callId2.innerText = doc.data().LCA2; //MODIFICAR
      callId3.innerText = doc.data().LCA3; //MODIFICAR
      callId4.innerText = doc.data().LCA4; //MODIFICAR
      callId5.innerText = doc.data().LCA5; //MODIFICAR
      callId6.innerText = doc.data().LCA6; //MODIFICAR
      callId7.innerText = doc.data().LCA7; //MODIFICAR
      callId8.innerText = doc.data().LCA8; //MODIFICAR
      callId9.innerText = doc.data().LCA9; //MODIFICAR
      callId10.innerText = doc.data().LCA10; //MODIFICAR
      callId11.innerText = doc.data().LCL1; //MODIFICAR
      callId12.innerText = doc.data().LCL2; //MODIFICAR
      callId13.innerText = doc.data().LCL3; //MODIFICAR
      callId14.innerText = doc.data().LCL4; //MODIFICAR
      callId15.innerText = doc.data().LCL5; //MODIFICAR
      callId16.innerText = doc.data().LCL6; //MODIFICAR
      callId17.innerText = doc.data().LCL7; //MODIFICAR
      callId18.innerText = doc.data().LCL8; //MODIFICAR
      callId19.innerText = doc.data().LCL9; //MODIFICAR
      callId20.innerText = doc.data().LCL10; //MODIFICAR
      callId21.innerText = doc.data().LCD1; //MODIFICAR
      callId22.innerText = doc.data().LCD2; //MODIFICAR
      callId23.innerText = doc.data().LCD3; //MODIFICAR
      callId24.innerText = doc.data().LCD4; //MODIFICAR
      callId25.innerText = doc.data().LCD5; //MODIFICAR
      callId26.innerText = doc.data().LCD6; //MODIFICAR
      callId27.innerText = doc.data().LCD7; //MODIFICAR
      callId28.innerText = doc.data().LCD8; //MODIFICAR
      callId29.innerText = doc.data().LCD9; //MODIFICAR
      callId30.innerText = doc.data().LCD10; //MODIFICAR
    }}
    );}
//DATA MEDICIONES
export const dataMediciones = async function() { //MODIFICAR
  let {currentUser : user} = await firebase.auth();
  if (user != null) {
    var uid = user.uid;
  }
  const db = firebase.firestore(); 
  var docRef = await db.collection("infoUsuarios").doc(uid)
  docRef.onSnapshot(function(doc) {
    const callId1 = document.getElementById("idPeso"); //MODIFICAR
    const callId2 = document.getElementById("idTalla"); //MODIFICAR
    const callId3 = document.getElementById("idIMC"); //MODIFICAR
    const callId4 = document.getElementById("idPliBic"); //MODIFICAR
    const callId5 = document.getElementById("idPliTri"); //MODIFICAR
    const callId6 = document.getElementById("idPliSub"); //MODIFICAR
    const callId7 = document.getElementById("idPliCI"); //MODIFICAR
    const callId8 = document.getElementById("idPliAbd"); //MODIFICAR
    const callId9 = document.getElementById("idPliSup"); //MODIFICAR
    const callId10 = document.getElementById("idPliMA"); //MODIFICAR
    const callId11 = document.getElementById("idPliPM"); //MODIFICAR
    const callId12 = document.getElementById("idPerBR"); //MODIFICAR
    const callId13 = document.getElementById("idPerBF"); //MODIFICAR
    const callId14 = document.getElementById("idPerCin"); //MODIFICAR
    const callId15 = document.getElementById("idPerGlu"); //MODIFICAR
    const callId16 = document.getElementById("idPerPie"); //MODIFICAR
    const callId17 = document.getElementById("idMasaMusc1"); //MODIFICAR
    const callId19 = document.getElementById("idMasaGrasa1"); //MODIFICAR
    const callId18 = document.getElementById("idMasaOsea1"); //MODIFICAR
    const callId20 = document.getElementById("idMasaMusc2"); //MODIFICAR
    const callId21 = document.getElementById("idMasaOsea2"); //MODIFICAR
    const callId22 = document.getElementById("idMasaGrasa2"); //MODIFICAR
    if (doc && doc.exists) {
      callId1.innerText = doc.data().Peso; //MODIFICAR
      // callId2.innerText = doc.data().Talla; //MODIFICAR
      callId3.innerText = doc.data().IMC; //MODIFICAR
      callId4.innerText = doc.data().PliBic; //MODIFICAR
      callId5.innerText = doc.data().PliTri; //MODIFICAR
      callId6.innerText = doc.data().PliSub; //MODIFICAR
      callId7.innerText = doc.data().PliCI; //MODIFICAR
      callId8.innerText = doc.data().PliSup; //MODIFICAR
      callId9.innerText = doc.data().PliAbd; //MODIFICAR
      callId10.innerText = doc.data().PliMA; //MODIFICAR
      callId11.innerText = doc.data().PliPM; //MODIFICAR
      callId12.innerText = doc.data().PerBR; //MODIFICAR
      callId13.innerText = doc.data().PerBF; //MODIFICAR
      callId14.innerText = doc.data().PerCin; //MODIFICAR
      callId15.innerText = doc.data().PerGlu; //MODIFICAR
      callId16.innerText = doc.data().PerPie; //MODIFICAR
      callId17.innerText = doc.data().MasaMusc1; //MODIFICAR
      callId19.innerText = doc.data().MasaGrasa1; //MODIFICAR
      callId18.innerText = doc.data().MasaOsea1; //MODIFICAR
      callId20.innerText = doc.data().MasaMusc2; //MODIFICAR
      callId21.innerText = doc.data().MasaOsea2; //MODIFICAR
      callId22.innerText = doc.data().MasaGrasa2; //MODIFICAR
    }}
    );}

//DATA RESUMEN DATOS USUARIOS
export const dataResDatos = async function() { //MODIFICAR
  let {currentUser : user} = await firebase.auth();
  if (user != null) {
    var uid = user.uid;
  }
  const db = firebase.firestore(); 
  var docRef = await db.collection("infoUsuarios").doc(uid)
  docRef.onSnapshot(function(doc) {
    const callId0 = document.getElementById("idNombeUsuarioRes");
    const callId1 = document.getElementById("idPeso"); //MODIFICAR
    const callId3 = document.getElementById("idIMC"); //MODIFICAR
    const callId17 = document.getElementById("idMasaMusc1"); //MODIFICAR
    const callId19 = document.getElementById("idMasaGrasa1"); //MODIFICAR
    if (doc && doc.exists) {
      callId0.innerText = " " + doc.data().Nombre;
      callId1.innerText = " " + doc.data().Peso; //MODIFICAR
      callId3.innerText = " " + doc.data().IMC; //MODIFICAR
      callId17.innerText = " " + doc.data().MasaMusc1; //MODIFICAR
      callId19.innerText = " " + doc.data().MasaGrasa1; //MODIFICAR
    }}
    );}


//PROBANDO

//DATA GRAFICO COMPONENTES
export const dataComp1 = async function(){
    let {currentUser : user} = await firebase.auth();
    if (user != null) {
      var uid = user.uid;
    }
    const db = firebase.firestore(); 

    var docRef = await db.collection("infoUsuarios").doc(uid);
    docRef.get().then((doc) => {
      if (doc.exists) {
        console.log(doc.data().MasaMusc1); //ME IMPRIME ESTO EN CONSOLA
        // const hola = doc.data().MasaMusc1;
        // return hola;
        // return doc.data().MasaMusc1;
    } else {
        console.log("No such document!");
    }
    }).catch((error) => {
      console.log("Error getting document:", error);
});
}
//
export const dataComp2 = async function(){
  let {currentUser : user} = await firebase.auth();
  if (user != null) {
    var uid = user.uid;
  }
  const db = firebase.firestore(); 

  var docRef = await db.collection("infoUsuarios").doc(uid);
  docRef.get().then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data().MasaMusc1);
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
  }).catch((error) => {
    console.log("Error getting document:", error);
});
}


//DATA TAREAS
export const dataTareas = async function() { //MODIFICAR
  let {currentUser : user} = await firebase.auth();
  if (user != null) {
    var uid = user.uid;
  }
  const db = firebase.firestore(); 
  var docRef = await db.collection("infoUsuarios").doc(uid)
  docRef.onSnapshot(function(doc) {
    const callId1 = document.getElementById("idTarea1"); //MODIFICAR
    const callId2 = document.getElementById("idTarea2"); //MODIFICAR
    const callId3 = document.getElementById("idTarea3"); //MODIFICAR
    const callId4 = document.getElementById("idTarea4"); //MODIFICAR
    const callId5 = document.getElementById("idTarea5"); //MODIFICAR
    if (doc && doc.exists) {
      callId1.innerText = doc.data().Tarea1; //MODIFICAR
      callId2.innerText = doc.data().Tarea2; //MODIFICAR
      callId3.innerText = doc.data().Tarea3; //MODIFICAR
      callId4.innerText = doc.data().Tarea4; //MODIFICAR
      callId5.innerText = doc.data().Tarea5; //MODIFICAR
    }}
    );}





  