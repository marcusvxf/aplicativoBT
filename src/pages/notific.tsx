import { IonCardContent, IonButton, IonCard, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonList, IonItem, IonLabel, IonItemDivider } from '@ionic/react';
import React, { useState } from 'react';
import { arrowBack } from 'ionicons/icons';
import './notific.css';

const Home: React.FC = () => {
  
  return (

    <IonPage>

      <IonHeader>

        <IonToolbar>

          <IonTitle>

            <span className="config-span">
              <IonIcon icon={arrowBack}></IonIcon>
            </span>

            <p className="name-toolbar">Notificações</p>

          </IonTitle>

        </IonToolbar>

      </IonHeader>

      <IonContent>

        <div className="space-options">

          <IonItem>

            <IonLabel color="tertiary" className="label"> Ativar notificações</IonLabel>

            <IonToggle  name="ativar" className="style-toggle" />

          </IonItem>

          <IonItem>

            <IonLabel color="tertiary" className="label">Vibrar ao tocar </IonLabel>

            <IonToggle name="vibrar" className="style-toggle" />

          </IonItem>

        </div>

      </IonContent>

    </IonPage>

  );
};

export default Home;