import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton ,IonButtons ,IonIcon} from '@ionic/react';
import "./Page.css"
import {optionsOutline,menuOutline} from "ionicons/icons";


const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="new-background-color">
          <IonButtons slot="end"><IonMenuButton><IonIcon size="large" icon={menuOutline}></IonIcon></IonMenuButton></IonButtons>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
    
      </IonContent>
    </IonPage>
  );
};

export default Tab2;