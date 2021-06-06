import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

//SOLICITANDO NOMBRE
export const dataSaludarUser = async function() {
    let {currentUser : user} = await firebase.auth();
    if (user != null) {
      var uid = user.uid;
    }
    const db = firebase.firestore(); 
    var docRef = await db.collection("infoUsuarios").doc(uid)
    docRef.onSnapshot(function(doc) {
      const callId = document.getElementById("idSaludarUser");
      if (doc && doc.exists) {
        callId.innerText = "Bienvenido " + doc.data().Nombre;
      }}
      );}