import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

import './Tab3.css';
import { Link } from 'react-router-dom';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 4</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/tab1">oloco</IonButton>
        <h1><Link to='/tab1'>aloalo</Link></h1>

      </IonContent>
    </IonPage>
  );
};

export default Tab4;