import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

/*LLAMANDO DATO DE MI GRAFICO: Lo que pretendo aqui es llamar un dato
desde mi base de datos, el cual se llama "MasaMusc1", para poder
entregarselo a mi gráfico. Lo que he intentado es llamar el dato
que necesito y guardarlo en una constante para importarlo en el
archivo de mi gráfico, sin embargo no he logrado hacerlo de forma 
exitosa. Otro tema es que este código probablemente tire asincronías*/

//Aqui almaceno la id del usuario dentro de la variable "uid"
let {currentUser : user} = firebase.auth();
if (user != null) {
    var uid = user.uid;
}

const db = firebase.firestore(); 

/*La documentación de firebase me da el siguiente código para solicitar
datos de mi base de datos. Yo he añadido el nombre de la coleccion de la
cual solicito datos, que es "infoUsuarios" y el nombre del documento, que
corresponde a la id del usuario.*/

var docRef = db.collection("infoUsuarios").doc(uid);

docRef.get().then((doc) => {
    if (doc.exists) {
        //llamando mi dato "MasaMusc1"
        console.log("Document data:", doc.data().MasaMusc1);
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});