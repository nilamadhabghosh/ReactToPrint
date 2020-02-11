// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.createElement('div');
  appContainer.style.height = '100%';
  document.body.appendChild(appContainer);

  ReactDOM.render(
    <App />,
    appContainer,
  );
});