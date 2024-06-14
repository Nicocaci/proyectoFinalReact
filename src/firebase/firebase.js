// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5MQBcGVdVrtmvcKFGVadzp2hnC5VEpLI",
  authDomain: "proyectoreact-ec611.firebaseapp.com",
  projectId: "proyectoreact-ec611",
  storageBucket: "proyectoreact-ec611.appspot.com",
  messagingSenderId: "788762073372",
  appId: "1:788762073372:web:44f58017ce4aa6286d42d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const dataBase = getFirestore(app);


// Funcion que llama a los productos

export async function getProducts(){
    const response = await getDocs(collection(dataBase,'products'));

    const listaprodcutos = [];
    response.forEach((documentos) => listaprodcutos.push({id: documentos.id,...documentos.data()}));
    return listaprodcutos
}

// funcion que llama a los productos segun su categoria 

export async function getCategory(category){
    const response = await getDocs(collection(dataBase,"products"));
    const listaProductos=[];
    response.forEach((documentos) => {
        if (documentos.data().category === category) {
            listaProductos.push({id: documentos.id,  ...documentos.data()});
        }
    });
    return listaProductos;
}   

export async function addOrder(order){
    const ordersCollections = collection(dataBase, "orders");
    const docRef = await addDoc(ordersCollections, order);
    console.log("Doc ref generado:" +docRef);
    console.log("id generado: " +docRef.id);
    return docRef.id;
}
