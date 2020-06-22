import {IonCheckbox, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle,IonIcon, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonItem, IonImg, IonText, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import './Page.css';
import { optionsOutline,checkbox,menuOutline, logoAmazon } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        
        <IonToolbar class="new-background-color">
          <IonButtons slot="end"><IonMenuButton><IonIcon size="large" icon={menuOutline}></IonIcon></IonMenuButton></IonButtons>
          <IonTitle color="dark"><IonImg src={".logo.png"}></IonImg></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="principal">
        <IonCard>
          <IonCardHeader>        
          <h1>Plantão do dia</h1>

          </IonCardHeader>
          <IonCardContent>
            <IonItem >
              <IonItem class="linha"></IonItem>
              <IonContent class="centralizar">9h00 - 12h00</IonContent>

            </IonItem>
              

              
          </IonCardContent>

        </IonCard>
        <IonCard class="ioncard">
          <IonCardHeader>
            <h1>Plantão do dia</h1>
          </IonCardHeader>
          <IonCardContent>
            <IonItem class="box">

              <IonItem class="linha"></IonItem>
              <IonText class="rodape">Pessoa 1</IonText>

              
            </IonItem>
            <IonItem>
              pessoa 2
            </IonItem>
     

          </IonCardContent>
        </IonCard>
        
      </IonContent >
    </IonPage>
  );
};

export default Tab1;
