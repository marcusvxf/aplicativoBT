import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonInput, IonBackButton, IonIcon, IonButtons,IonButton, IonItem, IonLabel, IonCheckbox, IonFab, IonFabButton } from '@ionic/react';
import React, { useState } from 'react';
import {arrowBackOutline, star} from "ionicons/icons" ;
import './EditarPerfil.css';

const Home: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="toolbar">
        <IonButtons slot="start"><IonBackButton defaultHref="tab3" color="dark" text="" icon={arrowBackOutline}> </IonBackButton></IonButtons>
          <IonTitle color="dark"><h3>Perfil</h3></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="perfil">
          <img className="imagemPerfil" src="https://image.freepik.com/vetores-gratis/homem-negocios-perfil-caricatura_18591-58479.jpg"/>
          <div className="edit-text">Editar</div>
        </div>
        <div className="alinhamento-conteudo">
          <IonItem>
            <IonLabel position="floating">Nome</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Senha</IonLabel>
            <IonInput type="password" value={text}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Confirmar senha</IonLabel>
            <IonInput type="password" value={text}></IonInput>
          </IonItem>
        </div>
        <div className="save-bt">
          <IonButton className="btnSave" href="tab3" fill="outline">Salvar</IonButton>
        </div>
        </IonContent>
        </IonPage>
  );
};

export default Home;