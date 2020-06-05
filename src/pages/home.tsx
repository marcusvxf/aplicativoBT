import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel, IonCheckbox, IonThumbnail, IonImg } from '@ionic/react';
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
        <IonToolbar class="new-background-color">
          <IonTitle color="dark"><h2>Configurações</h2></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="principal">

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Configurações</IonTitle>
          </IonToolbar>
        </IonHeader>

        <h2>Conta</h2>
        <p>E-mail: abc@biotechconsultoria.com</p>
          {items.map((image, i) => (
            <IonItem key={i} class="principal">
              <IonThumbnail slot="start">
                <IonImg src={image.src}/>
              </IonThumbnail>
              <IonLabel>{image.text}</IonLabel>
            </IonItem>
          ))}
        <IonButton expand="block" fill="solid" href="/EditarPerfil">Editar perfil</IonButton>
        <IonButton expand="block" fill="solid">Logout</IonButton>

        <h2>Notificações</h2>
            {checkboxList.map(({ val, isChecked }, i) => (
              <IonItem key={i} class="principal">
                <IonLabel>{val}</IonLabel>
                <IonCheckbox slot="end" value={val} checked={isChecked} />
              </IonItem>
            ))}

      </IonContent>
    </IonPage>
  );
};

export default Home;
