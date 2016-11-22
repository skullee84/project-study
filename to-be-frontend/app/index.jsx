import 'babel-polyfill';
import 'bootstrap/dist/js/bootstrap.min';
import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';

import StudyApp    from './components/StudyApp.jsx';
import Home        from './components/home/Home.jsx';
import View        from './components/view/View.jsx';

var routes = {
  path: '/',
  component: StudyApp,
  indexRoute: { component: Home },
  childRoutes : [
    { path: 'home', component: Home },
    { path: 'view', component: View }
  ]
};

ReactDOM.render(
  <Router
    history={hashHistory}
    routes={routes}>
  </Router>,
  document.getElementById('StudyApp')
);
