import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton ,IonButtons} from '@ionic/react';
import { RouteComponentProps } from 'react-router';


const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"><IonMenuButton></IonMenuButton></IonButtons>
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