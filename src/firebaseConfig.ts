import * as firebase from 'firebase'
import { toast } from './toast';
const config = {
    apiKey: "AIzaSyBA0HGE2zylNKn-E3siPEUqclyejZPF1Uc",
    authDomain: "appbiotech-15022.firebaseapp.com",
    databaseURL: "https://appbiotech-15022.firebaseio.com",
    projectId: "appbiotech-15022",
    storageBucket: "appbiotech-15022.appspot.com",
    messagingSenderId: "61464298911",
    appId: "1:61464298911:web:0f3879e281045e4140e9aa",
    measurementId: "G-J3BEEGBGNF"
};

firebase.initializeApp(config)

export async function loginUser(login: string,senha: string){
    const email = `${login}@biotechconsultoria.com`
    try{   
        const res = await firebase.auth().signInWithEmailAndPassword(login, senha)
        console.log(res)
        return true
    } catch(error){
        return false
    }
    
}

export async function registerUser(login: string, senha: string){
    const email = `${login}@biotechconsultoria.com` 
    try{
        const res = await firebase.auth().createUserWithEmailAndPassword(login, senha)
        console.log(res)
        return true
    }catch(error){
        toast(error.message, 3000)
        return false
    }

}