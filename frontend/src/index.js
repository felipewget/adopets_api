import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,
         Switch,
         Route } from 'react-router-dom';

import './assets/css/main.css';
import 'antd/dist/antd.css';

import * as serviceWorker from './serviceWorker';

import SearchScreen from './screens/SearchScreen';
import LoginScreen  from './screens/LoginScreen';
import Page404 from './screens/Page404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/login"  component={LoginScreen}  exact={true}  />
      <Route path="/"  component={SearchScreen} exact={true}  />
      <Route path="*"  component={Page404}      />
    </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
);

serviceWorker.unregister();