import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import store from './store'
ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>        
    </MuiThemeProvider>,    
    document.getElementById('app')
)