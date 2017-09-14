import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import './index.css';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue600 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue600,
    primary2Color: 'rgba(106, 183, 255, 1)',
    primary3Color: 'rgba(0, 92, 178, 1)',
    accent1Color: 'rgba(255, 20, 254, 1)',
    accent2Color: 'rgba(255, 103, 255, 1)',
    accent3Color: 'rgba(199, 0, 202, 1)'
  },
  appBar: {
    height: 50,
  },
});
debugger

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
