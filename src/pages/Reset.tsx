import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonIcon, IonInput, IonLabel, IonLoading, IonImg, IonBackButton } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';

import './style.css';
import { mail } from 'ionicons/icons'
import { loginUser, resetPassword } from '../firebaseConfig';
import { toast } from '../toast';
import {checkmark, key, help, logoGoogle, image} from 'ionicons/icons';


const Reset: React.FC = () => {

    const [espera, setEspera] = useState<boolean>(false)
    const [login, setLogin] = useState<string>('')

    async function resetar(){
      setEspera(true)
      const res = await resetPassword(login)
      setEspera(false)
    }

    return (
      <IonPage>
        <div id="headerRegister">
        <IonBackButton defaultHref="/main" type="button" color="dark"/>
        <IonImg src="https://images.even3.com.br/D77mAtK8bAJ_L4V7WEnu2UP8Kr0=/fit-in/250x250/smart/even3.blob.core.windows.net/logos/Logooficial.bc0b0f59aaf549139cdf.png" class="logoRegister"/>
        </div>

        <div id="titleReset">
          <p><h2><b>Esqueceu a senha?</b></h2><br/>Digite seu e-mail institucional e<br/> cheque sua caixa de entrada</p>
        </div>

        <IonContent class="ion-padding">
          <div id="contentReset">
            <IonItem id="lastInputReset">
              <IonLabel position="stacked"><IonIcon slot="start" icon={mail}/> E-mail</IonLabel>
              <IonInput
                clear-input="true"
                placeholder=""
                value={login} 
                onIonChange={(e: any) => setLogin(e.target.value)}
              ></IonInput>
            </IonItem><p></p>
          </div>
          
          <IonButton onClick={resetar} color="primary" size="large">
            Enviar
          </IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Reset;
  