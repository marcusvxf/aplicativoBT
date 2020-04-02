import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItemDivider, IonItem, IonLabel, IonCheckbox } from '@ionic/react';
import React, { useState } from 'react';
import './Home.css';

const checkboxList = [
  { val: 'Ativar notificações', isChecked: true },
  { val: 'Vibrar ao receber notificação', isChecked: false },
];

const Home: React.FC = () => {

  const [checked, setChecked] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Configurações</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Configurações</IonTitle>
          </IonToolbar>
        </IonHeader>

        <h2>Conta</h2>
        <p>E-mail: abc@biotechconsultoria.com</p>
        <IonButton expand="block" fill="outline">Logout</IonButton>

        <h2>Notificações</h2>
        <IonList>
            {checkboxList.map(({ val, isChecked }, i) => (
              <IonItem key={i}>
                <IonLabel>{val}</IonLabel>
                <IonCheckbox slot="end" value={val} checked={isChecked} />
              </IonItem>
            ))}
          </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Home;