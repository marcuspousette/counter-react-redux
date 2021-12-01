import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './redux-store/configureStore';
import Counter from './components/Counter';

const store = configureStore();
console.log(store);

const render = () =>
	ReactDOM.render(
		<Counter
			value={store.getState()}
			onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
			onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
		/>,
		document.getElementById('root')
	);

render();
store.subscribe(render);
