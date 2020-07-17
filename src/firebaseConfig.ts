import * as firebase from 'firebase'
import { toast } from './toast';
import { IonIcon } from '@ionic/react';
const config = {
    apiKey: "AIzaSyAil0PaywCl0zJCe0PQiR8cQ5w1-fxsP5I",
    authDomain: "aplicativo-bt.firebaseapp.com",
    databaseURL: "https://aplicativo-bt.firebaseio.com",
    projectId: "aplicativo-bt",
    storageBucket: "aplicativo-bt.appspot.com",
    messagingSenderId: "858707234248",
    appId: "1:858707234248:web:09f35512189d0c95dfc4fd",
    measurementId: "G-QH3JNDE49S"
}

firebase.initializeApp(config)

export async function loginUser(login: string,senha: string){
    try{   
        const res = await firebase.auth().signInWithEmailAndPassword(login, senha)
        firebase.auth().useDeviceLanguage()
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                if(!user.emailVerified){
                    user.sendEmailVerification().then(() => {
                        toast('Um e-mail de verificação foi enviado para você.', 3000);
                    })
                    return false
                }else{
                    toast('Logado com sucesso!', 3000)
                    return true
                }
            }else{
                console.log("No users logged.")
                return false
        }})
    }catch(error){
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

export async function resetPassword(login: string){
    try{
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                firebase.auth().sendPasswordResetEmail(login).then(() =>
                    toast('E-mail de recuperação enviado.', 3000)
                )
                return true
            }else{
                return false
            }
        })
    }catch(error){
        return false
    }
}