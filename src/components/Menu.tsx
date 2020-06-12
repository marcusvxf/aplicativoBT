import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonHeader, IonToolbar, IonTitle, IonFooter, IonButton
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { checkmarkOutline, settingsOutline, personOutline } from 'ionicons/icons';
import './Menu.css';

interface MenuProps extends RouteComponentProps {
  selectedPage: string;
}

interface AppPage {
  url: string;
  iosIcon: string;
  title: string;
}

const appPages: AppPage[] = [

];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FunctionComponent<MenuProps> = ({ selectedPage }) => {

  return (
      <IonMenu side="end" contentId="main">
      <IonHeader>
          <IonToolbar>
              <IonTitle>
                  Menu
              </IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonList>
            <IonItem routerLink="/Config">
              Configuração
              <IonIcon slot="start" icon={settingsOutline}/>
            </IonItem>
            <IonItem routerLink="/tab2">
              Sobre
              <IonIcon slot="start" icon={personOutline}>
              </IonIcon>
            </IonItem>
          </IonList>

      </IonContent>          
          <IonFooter class="rodape">
            <h4>Versão Beta</h4>
          </IonFooter>
  </IonMenu>
  );
}

export default withRouter(Menu);
