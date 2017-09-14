import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
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

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router children={routes} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
