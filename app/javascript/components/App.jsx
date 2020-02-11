import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Base from 'terra-base';
import ApplicationLayout, { RoutingMenu } from 'terra-application-layout';

import HomePage from './HomePage';
import PrintReport from './PrintReport';

const navigationItems = [{
  path: '/',
  text: 'Introduction',
}];

const routingConfig = {
  /**
   * Components defined under `content` will render within the ApplicationLayout's body.
   */
  content: {
    /**
     * Each entry must be keyed; typically, this key matches the path for the component.
     */
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: HomePage,
        },
        small: {
          componentClass: HomePage,
        }
      },
    },
    '/printreport': {
      path: '/printreport',
      component: {
        default: {
          componentClass: PrintReport,
        },
        small: {
          componentClass: PrintReport,
        }
      },
    },
  },
  // menu: {
  //   'Page 1': {
  //     path: '/',
  //     component: {
  //       default: {
  //         componentClass: RoutingMenu,
  //         props: {
  //           title: 'Application Menu',
  //           menuItems: [{
  //             text: 'Home',
  //             path: '/',
  //           }],
  //         },
  //       },
  //     },
  //   },
  // },
};

const nameConfig = {
  title: 'HealtheIntent Web App'
};

const App = () => (
  <BrowserRouter>
    <Base style={{ height: '100%' }} locale="en">
      <ApplicationLayout
        nameConfig={nameConfig}
        routingConfig={routingConfig}
        // navigationItems={navigationItems}
        indexPath="/"
        navigationAlignment="start"
      />
    </Base>
  </BrowserRouter>
);

export default App;
