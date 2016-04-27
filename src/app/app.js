import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import AppShellContainer from './components/shell/AppShellContainer';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>

            <Route path="/" component={AppShellContainer}>
            </Route>

        </Router>
    </Provider>
, document.getElementById('root'));
