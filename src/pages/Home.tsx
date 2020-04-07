import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItemDivider, IonItem, IonLabel, IonCheckbox, IonThumbnail, IonImg } from '@ionic/react';
import React, { useState } from 'react';
import './Home.css';

const checkboxList = [
  { val: 'Ativar notificações', isChecked: true },
  { val: 'Vibrar ao receber notificação', isChecked: false },
];

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: 'http://placekitten.com/g/200/300', text: 'Nome de perfil acompanhado com figura' }];

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
        <IonList>
          {items.map((image, i) => (
            <IonItem key={i}>
              <IonThumbnail slot="start">
                <IonImg src={image.src} />
              </IonThumbnail>
              <IonLabel>{image.text}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonButton expand="block" fill="outline">Editar perfil</IonButton>
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