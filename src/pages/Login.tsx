import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonIcon, IonInput, IonLabel, IonLoading, IonImg, IonBackButton } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';

import './style.css';
import { loginUser, resetPassword } from '../firebaseConfig';
import { toast } from '../toast';
import { mail, key} from 'ionicons/icons';
import { Link } from 'react-router-dom';


const Login: React.FC = () => {
  // Criando variáveis login e senha
  const [espera, setEspera] = useState<boolean>(false)
  const [login, setLogin] = useState<string>('')
  const [senha, setSenha] = useState<string>('')

  async function logar(){
    setEspera(true)
    const res = await loginUser(login, senha)
    if(login.trim() === '' || senha.trim() === ''){
      setEspera(false)
      return toast('Login e senha são obrigatórios!', 3000)
    }
    setEspera(false)
  }

  async function trocarSenha(){
    setEspera(true)
    const res = await resetPassword(login)
    setEspera(false)
  }

  // Criando variáveis login e senha

  return (
    <IonPage>
      <div id="headerLogin">
        <IonBackButton defaultHref="/main" type="button" color="dark"/>
      </div>

      <div>
        <IonImg src="https://static.wixstatic.com/media/8532d7_64fcfaf489784db6ae10e4ae8813ee77~mv2.png/v1/fill/w_1080,h_1080,al_c/8532d7_64fcfaf489784db6ae10e4ae8813ee77~mv2.png" class="logoLogin"/>
      </div>

      <IonLoading message="Aguarde..." duration={0} isOpen={espera} />
      <IonContent class="ion-padding">
        <div id="contentLogin">
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

          <p id="forgotLogin"><Link to="/reset">Esqueceu a senha?</Link></p>
        </div>
        
        <IonButton onClick={logar} size="large" color="primary">
            Entrar
        </IonButton><p></p>
        
      </IonContent>
    </IonPage>
  );
};

export default Login;
