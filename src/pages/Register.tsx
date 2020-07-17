import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonIcon, IonInput, IonLabel, IonLoading, IonBackButton, IonImg } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';

import './style.css';
import { mail, key } from 'ionicons/icons'
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
      setEspera(false)
      return toast('Senhas não coincidem!', 3000)
    }
    if(login.trim() === '' || senha.trim() === ''){
      setEspera(false)
      return toast('Login e senha são obrigatórios!', 3000)
    }

    const res = await registerUser(login, senha)
    if(res){
      toast('Quase lá, faça o login.', 3000)
      setEspera(false)
    }
    setEspera(false)
  }

  return (
    <IonPage>
      <div id="headerRegister">
        <IonBackButton defaultHref="/main" type="button" color="dark"/>
        <IonImg src="https://images.even3.com.br/D77mAtK8bAJ_L4V7WEnu2UP8Kr0=/fit-in/250x250/smart/even3.blob.core.windows.net/logos/Logooficial.bc0b0f59aaf549139cdf.png" class="logoRegister"/>
      </div>

      <div id="titleRegister">
        <h2><b>Cadastro</b></h2>
      </div>

      <IonLoading message="Confirmando..." duration={0} isOpen={espera} />
      <IonContent className="ion-padding">
        <div id="contentRegister">
          <IonItem>
            <IonLabel position="stacked"><IonIcon slot="start" icon={mail}/> E-mail</IonLabel>
            <IonInput
              clear-input="true"
              placeholder=""
              value={login} 
              onIonChange={(e: any) => setLogin(e.target.value)}
            ></IonInput>
          </IonItem><p></p>

          <IonItem>
            <IonLabel position="stacked"><IonIcon slot="start" icon={key}/> Senha</IonLabel>
            <IonInput
              clear-input="true"
              type="password"
              placeholder=""
              value={senha} 
              onIonChange={(e: any) => setSenha(e.target.value)}
            ></IonInput>
          </IonItem><p></p>

          <IonItem id="lastInputRegister">
            <IonLabel position="stacked"><IonIcon slot="start" icon={key}/> Confirme sua senha</IonLabel>
            <IonInput
              clear-input="true"
              type="password"
              value={confirm}
              onIonChange={(e: any) => setConfirm(e.target.value)}
            ></IonInput>
          </IonItem><p></p>
        </div>
        <IonButton onClick={registrar} color="primary" size="large">
            Cadastre-se
        </IonButton>
        <p>Já tem uma conta? <Link to="/login">Faça o login</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
