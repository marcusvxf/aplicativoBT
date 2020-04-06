import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle,IonIcon, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonItem } from '@ionic/react';
import React from 'react';
import './Page.css';
import { optionsOutline,checkbox } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        
        <IonToolbar class="new-background-color">
          <IonButtons slot="end"><IonMenuButton><IonIcon size="large" icon={optionsOutline}></IonIcon></IonMenuButton></IonButtons>
          <IonTitle color="dark"><h2>Bem vindo</h2></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="principal">
        <IonCard>
          <IonCardHeader>        
            <h1>Horarios de plantões</h1>

          </IonCardHeader>
          <IonCardContent>              
    
              <h1>Seg - 13h as 15h</h1>
              <h1>Qua - 15h as 17h</h1>

          </IonCardContent>

        </IonCard>
        <IonCard>
          <IonCardHeader>
            <h1>Atividades</h1>
          </IonCardHeader>
          <IonCardContent>

               <h1>Atualizar planilhas</h1>                 
               <h1>RG</h1>
     

          </IonCardContent>
        </IonCard>
       {/* <IonContent class="login" >


       </IonContent>*/}
        
      </IonContent >
    </IonPage>
  );
};

export default Tab1;
