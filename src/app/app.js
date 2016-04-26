import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import AppShell from './components/shell/AppShell';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>

            <Route path="/" component={AppShell}>
            </Route>

        </Router>
    </Provider>
, document.getElementById('root'));
