import {IonCheckbox, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle,IonIcon, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonItem, IonImg, IonText, IonRow, IonCol, IonGrid } from '@ionic/react';
import React from 'react';
import './Page.css';
import { optionsOutline,checkbox,menuOutline, logoAmazon, checkmarkOutline, checkmarkSharp } from 'ionicons/icons';

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
          
              <IonRow>
                <IonCol size="4">
                  sluodiuodiukasgdiubiaidhgfhbaofpjkiuabguidb

                </IonCol>
                <IonCol size="1">
                  <IonContent class="linha2"/>

                </IonCol>
                <IonCol>
                  <IonContent class="centralizar">9h00 - 12h00</IonContent>
                </IonCol>
              </IonRow>

   
          </IonCardContent>

        </IonCard>
        <IonCard class="ioncard">
          <IonCardHeader>
            <h1>Report - 17/06</h1>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>

              <IonRow class="box">
                <IonCol size="4">oishnfioshifhohfiu8tuyffiugfifgsaiufgiugaiuiugugusiu

                </IonCol>
                <IonCol size="1" >
                  <IonItem class="linha"/>

                </IonCol>
                <IonCol >
                  <IonContent class="centralizar"><IonIcon icon={checkmarkSharp}/>to vendendo <br/><IonIcon icon={checkmarkSharp}/>huehue<br/><IonIcon icon={checkmarkSharp}/>juiyyth</IonContent>

                </IonCol>

              </IonRow>


              <IonRow class="box">
                <IonCol size="4">oishnfioshifhohfiu8tuyffiugfifgsaiufgiugaiuiugugusiu

                </IonCol>
                <IonCol size="1" >
                  <IonItem class="linha"/>

                </IonCol>
                <IonCol >
                  <IonContent class="centralizar"><IonIcon icon={checkmarkSharp}/>to vendendo <br/><IonIcon icon={checkmarkSharp}/>huehue<br/><IonIcon icon={checkmarkSharp}/>juiyyth</IonContent>

                </IonCol>

              </IonRow>
              

            </IonGrid>
            
     
          </IonCardContent>
        </IonCard>
        
      </IonContent >
    </IonPage>
  );
};

export default Tab1;
