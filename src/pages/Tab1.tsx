import {IonCheckbox, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle,IonIcon, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonItem, IonImg, IonText, IonRow, IonCol, IonGrid, IonFooter } from '@ionic/react';
import React from 'react';
import './Page.css';
import { optionsOutline,checkbox,menuOutline, logoAmazon, checkmarkOutline, checkmarkSharp } from 'ionicons/icons';
import {IonInfiniteScroll, IonInfiniteScrollContent}from '@ionic/react';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        
        <IonToolbar class="new-background-color">
          <IonButtons slot="end"><IonMenuButton><IonIcon size="large" icon={menuOutline}></IonIcon></IonMenuButton></IonButtons>
          <IonTitle color="dark"><IonImg src={"https://drive.google.com/file/d/1oXpaCcXhpdCI-bacL65rRPJ1y7IPsQrQ/view?usp=sharing"}></IonImg></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="principal">
        <IonCard class="ioncardplantao">
          <IonCardHeader>        
          <h1>Plantão do dia</h1>

          </IonCardHeader>
          <IonCardContent>
          
              <IonRow>
                <IonCol className="circulocentral" size="3">
                  <IonContent className="circulo"/>
                 

                </IonCol>
                <IonCol size="1">
                  <IonContent class="linha2"/>

                </IonCol>
                <IonCol>
                  <IonContent class="centralizar2">9h00 - 12h00</IonContent>
                </IonCol>
              </IonRow>

   
          </IonCardContent>

        </IonCard>
        <IonCard class="ioncard">
          <IonCardHeader>
            <h1>Report - 17/06</h1>
          </IonCardHeader>
          <IonContent scrollEvents={true} >
            <IonInfiniteScroll>
              <IonInfiniteScrollContent>

                <IonCardContent>

                  <IonGrid>
                    <IonRow class="box">
                      <IonCol className="circulocentral2" size="3">
                        <IonContent className="circulo2" /><br/>Leticia

                      </IonCol>
                      <IonCol size="1" >
                        <IonItem class="linha"/>

                      </IonCol>
                      <IonCol >
                        <IonContent class="centralizar"><IonIcon size="large" icon={checkmarkSharp}/>to vendendo <br/><br/><IonIcon size="large" icon={checkmarkSharp}/>huehue<br/><br/><IonIcon size="large" icon={checkmarkSharp}/>juiyyth</IonContent>

                      </IonCol>

                    </IonRow>


                    <IonRow class="box">
                      <IonCol className="circulocentral2" size="3">
                        <IonContent className="circulo2" /><br/>João

                      </IonCol>
                      <IonCol size="1" >
                        <IonItem class="linha"/>

                      </IonCol>
                      <IonCol >
                        <IonContent class="centralizar"><IonIcon size="large" icon={checkmarkSharp}/>to vendendo <br/><br/><IonIcon size="large" icon={checkmarkSharp}/>huehue<br/><br/><IonIcon size="large" icon={checkmarkSharp}/>juiyyth</IonContent>

                      </IonCol>

                    </IonRow>


                  </IonGrid>
                  
          
                </IonCardContent>

              </IonInfiniteScrollContent>
              
            </IonInfiniteScroll>

          </IonContent>

        </IonCard>
        
      </IonContent >
    </IonPage>
  );
};

export default Tab1;

