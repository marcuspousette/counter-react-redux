import React from 'react';

const Counter = (props) => {
	const incrementIfOdd = () => {
		if (props.value % 2 !== 0) {
			props.onIncrement();
		}
	};

	const incrementAsync = () => {
		setTimeout(props.onIncrement, 1000);
	};

	return (
		<p>
			Clicked: {props.value} times <button onClick={props.onIncrement}>+</button>{' '}
			<button onClick={props.onDecrement}>-</button>
			<button onClick={incrementIfOdd}>Increment if odd</button>
			<button onClick={incrementAsync}>Increment async</button>
		</p>
	);
};

export default Counter;
