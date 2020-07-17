import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonIcon, IonInput, IonLabel, IonLoading, IonImg, IonAvatar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';

import './style.css';
import { loginUser, resetPassword } from '../firebaseConfig';
import { toast } from '../toast';
import {checkmark, key, help, logoGoogle, image} from 'ionicons/icons';

const Main: React.FC = () => {
    
    return (
      <IonPage>
        <IonContent class="ion-padding">
        
            <IonImg src="https://images.even3.com.br/D77mAtK8bAJ_L4V7WEnu2UP8Kr0=/fit-in/250x250/smart/even3.blob.core.windows.net/logos/Logooficial.bc0b0f59aaf549139cdf.png" class="logoMain"/>

            <IonButton routerLink="/login" color="primary" size="large">
                ENTRAR
            </IonButton><p></p>

            <IonButton class="orangeText" routerLink="/register" color="white" size="large">
                CADASTRE-SE
            </IonButton><p></p>

            <a href="/reset">
                <IonLabel color="dark">
                    Esqueceu a senha?
                </IonLabel>
            </a>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Main;
  