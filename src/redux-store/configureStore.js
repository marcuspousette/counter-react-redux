import { createStore, combineReducers, compose } from 'redux';
import counter from './reducers/counter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// If we want multiple reducers
// const rootReducer = combineReducers({ counter });

const configureStore = () => {
	const store = createStore(counter, composeEnhancers());
	return store;
};

export default configureStore;
