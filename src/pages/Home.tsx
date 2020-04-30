import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonIcon, IonInput, IonLabel, IonLoading, IonImg } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { loginUser } from '../firebaseConfig';
import { toast } from '../toast';
import {checkmark, key, logoGoogle, image} from 'ionicons/icons';


const Home: React.FC = () => {
  // Criando variáveis login e senha
  const [espera, setEspera] = useState<boolean>(false)
  const [login, setLogin] = useState<string>('')
  const [senha, setSenha] = useState<string>('')

  async function logar(){
    setEspera(true)
    const res = await loginUser(login, senha)
    if(res){
      toast('Logado com sucesso!')
    }else{
      toast('Login ou Senha incorretos...')
    }
    setEspera(false)
  }

  // Criando variáveis login e senha

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TELA DE LOGIN</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Aguarde..." duration={0} isOpen={espera} />
      <IonContent class="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Usuário</IonLabel>
          <IonInput
            placeholder="Nome de usuário / E-mail"
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

        <IonButton onClick={logar} expand="full" color="secondary">
          <IonIcon slot="start" icon={checkmark}></IonIcon>
          Fazer Login
        </IonButton><p></p>

        <IonButton routerLink="/register" expand="full" color="secondary">
          <IonIcon slot="start" icon={key}></IonIcon>
          Registrar-se
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
