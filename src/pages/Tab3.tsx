import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons,IonMenuButton,IonIcon, IonItem, IonLabel, IonCheckbox, IonFab, IonFabButton } from '@ionic/react';
import React, { useState } from 'react';
import {optionsOutline, add} from "ionicons/icons" ;
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
          <div className="logobt">
            <img src="https://i.ibb.co/C2mqVnL/Logo-horizontal-fundo-transparente.png"/>
          </div>
          <IonButtons slot="end"><IonMenuButton><IonIcon size="large" icon={optionsOutline}></IonIcon></IonMenuButton></IonButtons>

        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className= "check-title">

          <h1 className="report-title">Report</h1>
          <h5 className="date-title">22/06</h5>

        </div>
        {checkboxList.map(({ val, isChecked }, i) => (
          <IonItem key={i}>

            <IonLabel className="label" >{val}</IonLabel>

            <IonCheckbox className="checkbox" slot="start" value={val} checked={isChecked} />

          </IonItem  >

        ))}
        <div className="new-list">

          <IonIcon  icon={add} />
          <p className="new-list-name">  Nova tarefa</p>
       
        </div>
      



      </IonContent>
    </IonPage>
  );
};

export default Tab3;
