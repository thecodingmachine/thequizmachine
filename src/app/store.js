import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import appShellReducer from './components/shell/appShellReducers';

var reducers = combineReducers({
    appShellReducer: appShellReducer
    // more if you want...
});

var store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;

