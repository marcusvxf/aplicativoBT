import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonIcon } from '@ionic/react';
import './Tab1.css';
import { menuOutline, gridOutline } from 'ionicons/icons';

const x="nome da pessoa"


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        
        <IonToolbar class="new-background-color">
          <IonIcon slot="start" icon={gridOutline} size="large"/>
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
