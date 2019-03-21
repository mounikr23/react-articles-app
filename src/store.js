// import LogRocket from 'logrocket';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';

// const composeEnhancers =
//     process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(
//     applyMiddleware(thunk),
//     composeEnhancers
// );

const store = createStore(
    reducers,
    applyMiddleware(thunk),
);

export default store;
