import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle,IonIcon, IonToolbar } from '@ionic/react';
import React from 'react';
import './Page.css';
import { settingsOutline } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        
        <IonToolbar class="new-background-color">
          <IonButtons slot="end"><IonMenuButton><IonIcon size="large" icon={settingsOutline}></IonIcon></IonMenuButton></IonButtons>
          <IonTitle>Bem vindo "nome da pessoa"</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="principal">
        <IonContent class="login">

        </IonContent>
        
      </IonContent >
    </IonPage>
  );
};

export default Tab1;
