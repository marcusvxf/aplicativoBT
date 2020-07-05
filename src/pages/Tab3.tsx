import { IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons,IonMenuButton,IonIcon, IonItem, IonLabel, IonCheckbox, IonFab, IonFabButton, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import {menuOutline, close, cog} from "ionicons/icons" ;
import "./check.css";

const checkboxList = [
  { val: 'RG', isChecked: false}, 
  { val: 'Estudar MKT', isChecked: false}, 
  { val: 'Estudar MKT', isChecked: false}, 
  { val: 'Prospectar', isChecked: false}, 
  { val: 'Fazer Desafio', isChecked: false}, 
  { val: 'Fazer arte', isChecked: false}, 
  { val: 'Fazer postagem', isChecked: false}, 

]

const Tab3: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="toolbar">
          <IonButtons slot="end"><IonMenuButton><IonIcon size="large" icon={menuOutline}></IonIcon></IonMenuButton></IonButtons>
            <div className="container">

              <div className="container-logo">

                <div>

                  < IonImg className="img" src="https://i.ibb.co/qgTwBTd/Nova-logo-laranja-e-azul.png"></IonImg>

                </div> 

                  <div className="name-logo">

                    <p className="biotech-name"><strong>Bio</strong><span>tech</span> </p>
                    <p className="biotech-name-consultoria">CONSULTORIA</p>

                  </div>

               </div>

            </div>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className= "check-title">

          <p className="report-title">Report</p>
          <p className="date-title">22/06</p>

        </div>

        {checkboxList.map(({ val, isChecked }, i) => (
          <IonItem key={i}>

            <IonLabel color="secondary-contrast"  className="label" ><p className="label-text">{val}</p></IonLabel>

            <IonCheckbox className="checkbox" slot="start" value={val} checked={isChecked} />
              <IonIcon className="icon-close" icon={close} />
          </IonItem  >

        ))}
       
         <IonButton className="button-add" fill="clear"><span>+</span><p>Nova tarefa</p></IonButton> 
          
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
