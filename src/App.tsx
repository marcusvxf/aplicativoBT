import Menu from './components/Menu';
import Tab1 from './pages/Tab1';
import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, IonTabs, IonTabBar, IonButton, IonTabButton, IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home';
import EditarPerfil from './pages/EditarPerfil';
import { Redirect, Route } from 'react-router-dom';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { home, checkmark, checkmarkOutline, calendar } from 'ionicons/icons';

const App: React.FC = () => {

  const [selectedPage, setSelectedPage] = useState('');

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">

            <Menu selectedPage={selectedPage} />

          <IonTabs>
            <IonRouterOutlet id="main">
              <Route path="/Home" component={Home} exact={true} />
              <Route path="/EditarPerfil" component={EditarPerfil} exact={true} />
              <Route path="/Tab1" component={Tab1} exact={true}/>
              <Route path="/Tab2" component={Tab2} exact={true}/>
              <Route path="/Tab3" component={Tab3} exact={true}/>
              <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />

            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="Tab1" href="/tab1">
                <IonIcon size="large" icon={home} />
              </IonTabButton>

            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon size="large" icon={checkmark} />
            </IonTabButton>

            <IonTabButton tab="Tab3" href="/tab3">
              <IonIcon size="large" icon={calendar} />
            </IonTabButton>

            </IonTabBar>
          </IonTabs>

        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
