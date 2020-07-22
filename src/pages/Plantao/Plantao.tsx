import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel, IonCheckbox, IonThumbnail, IonImg, IonInput, IonItemDivider, IonCard, IonCardHeader, IonCardContent, IonGrid, IonRow, IonSelect, IonAlert, IonSelectOption, IonText, IonCol, IonIcon } from '@ionic/react';
import React, { useState } from 'react';
import "./Plantao.css";

const Home: React.FC = () => {
  return (
    <IonPage>
            <IonCard className="cardPlantao">
                <IonCardHeader className="cardPlantaoHeader">
                    CICLANO
                </IonCardHeader>
                <IonCardContent>
                     <IonGrid>
                       <IonRow>
                         <IonCol>
                             <IonText className="diasDaSemana">QUA</IonText>
                         </IonCol>
                         <IonCol>
                            <IonText className="horario">14h00 </IonText>
                            <IonText className="menosCinza">-</IonText>
                            <IonText className="horario"> 15h00</IonText>
                         </IonCol>
                         <IonCol>
                         <IonButton fill="clear" className="menosLaranja">--</IonButton>
                         </IonCol>
                         </IonRow>
                     </IonGrid>
                     <IonGrid>
                        <IonRow>
                         <IonCol>
                         <IonText className="diasDaSemana">QUI</IonText>
                         </IonCol>
                         <IonCol>
                            <IonText className="horario">08h00 </IonText>
                            <IonText className="menosCinza">-</IonText>
                            <IonText className="horario"> 12h00</IonText>
                         </IonCol>
                         <IonCol>
                         <IonButton fill="clear" className="menosLaranja">--</IonButton>
                         </IonCol>
                         </IonRow>
                     </IonGrid>
                     <IonGrid>
                     <IonRow>
                         <IonCol>
                         <IonText className="diasDaSemana">SEX</IonText>
                         </IonCol>
                         <IonCol>
                         <IonText className="horario">09h30 </IonText>
                            <IonText className="menosCinza">-</IonText>
                            <IonText className="horario"> 10h30</IonText>
                         </IonCol>
                         <IonCol>   
                         <IonButton fill="clear" className="menosLaranja">-
                         </IonButton>
                         </IonCol>
                         </IonRow>
                     </IonGrid>
                     <IonGrid>
                      <IonRow>
                        <IonCol>
                          <IonSelect className="DIA" interface="popover" placeholder="DIA">
                          <IonSelectOption className="diasDaSemana" value="seg">SEG</IonSelectOption>
                          <IonSelectOption className="diasDaSemana" value="ter">TER</IonSelectOption>
                          <IonSelectOption className="diasDaSemana" value="qua">QUA</IonSelectOption>
                          <IonSelectOption className="diasDaSemana" value="qui">QUI</IonSelectOption>
                          <IonSelectOption className="diasDaSemana" value="sex">SEX</IonSelectOption>
                          </IonSelect>
                        </IonCol>
                        <IonCol>
                        <IonInput required type="text" placeholder="00h00-00h00"></IonInput>
                        </IonCol>
                        <IonCol>
                        <IonButton fill="clear" className="maisLaranja">+</IonButton>
                        </IonCol>
                    </IonRow>
                     </IonGrid>
                </IonCardContent>
            </IonCard>
        </IonPage>
    );
};

export default Home;
