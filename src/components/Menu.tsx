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
  IonHeader, IonToolbar, IonTitle
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, checkmarkOutline } from 'ionicons/icons';
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
            <IonItem>
              Configuração
              <IonIcon slot="start" icon={checkmarkOutline}>

              </IonIcon>
            </IonItem>
          </IonList>
      </IonContent>
  </IonMenu>
  );
}

export default withRouter(Menu);
