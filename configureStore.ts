import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import index from './src/store';

const enhancers: [] = [];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = (window && (window as any)).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    if (typeof devToolsExtension === 'function') {
        // @ts-ignore
        enhancers.push(devToolsExtension());
    }
}

function configureStore(preloadedState = {}) {
    const store = createStore(
        index(),
        preloadedState,
        compose(
            applyMiddleware(thunk),
            ...enhancers
        )
    );
    return store;
}

export default configureStore;