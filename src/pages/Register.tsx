import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonIcon, IonInput, IonLabel, IonLoading } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';

import {checkmark, key, logoGoogle} from 'ionicons/icons'
import { Link, Router, Route } from 'react-router-dom';
import { toast } from '../toast';
import { registerUser } from '../firebaseConfig'

const Register: React.FC = () => {
  // Criando variáveis login e senha

  const [espera, setEspera] = useState<boolean>(false)
  const [login, setLogin] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [confirm, setConfirm] = useState<string>('')
  /*let tamLogin: number
  let tamFinal: number
  let i: number
  let j: number
  let membroBT: number
  var btfinal = new String("@biotechconsultoria.com") */

  async function registrar(){
    setEspera(true)
    if(senha !== confirm){
      return toast('Senhas não coincidem!')
    }
    if(login.trim() === '' || senha.trim() === ''){
      return toast('Login e senha são obrigatórios!')
    }

    const res = await registerUser(login, senha)
    if(res){
          toast('Registrado com sucesso!')
          setEspera(false)
    }
    setEspera(false)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TELA DE REGISTRO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Confirmando..." duration={0} isOpen={espera} />
      <IonContent className="ion-padding">

        <IonItem>
          <IonLabel position="stacked">E-mail</IonLabel>
          <IonInput
            placeholder="Nome de usuário"
            value={login} 
            onIonChange={(e: any) => setLogin(e.target.value)}
          ></IonInput>
        </IonItem><p></p>

        <IonItem>
          <IonLabel position="stacked">Senha</IonLabel>
          <IonInput
            type="password"
            placeholder="Senha"
            value={senha} 
            onIonChange={(e: any) => setSenha(e.target.value)}
          ></IonInput>
        </IonItem><p></p>

        <IonItem>
          <IonLabel position="stacked">Confirmação</IonLabel>
          <IonInput
            type="password"
            placeholder="Confirme sua senha"
            value={confirm} 
            onIonChange={(e: any) => setConfirm(e.target.value)}
          ></IonInput>
        </IonItem><p></p>

        <IonButton onClick={registrar} expand="full" color="primary">
            <IonIcon slot="start" icon={key}></IonIcon>
            Registrar-se
        </IonButton>

        <p>Já tem uma conta? <Link to="/home">Faça o login</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
