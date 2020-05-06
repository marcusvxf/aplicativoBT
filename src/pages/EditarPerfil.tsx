import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel, IonCheckbox, IonThumbnail, IonImg, IonInput, IonItemDivider } from '@ionic/react';
import React, { useState } from 'react';
import './EditarPerfil.css';

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
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="new-background-color">
          <IonTitle color="dark"><h2>Editar Perfil</h2></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="principal">

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Editar Perfil</IonTitle>
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

        <IonButton expand="block" fill="solid" href="/Home">Home</IonButton>

        <h2>Editando o perfil</h2>
          <IonItem class="principal">
            <IonLabel position="floating">Novo nome de perfil</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem class="principal">
            <IonLabel position="floating">Nova senha</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem class="principal">
            <IonLabel position="floating">Digite a nova senha novamente</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>
        <IonButton expand="block" fill="solid">Confirmar edição</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;