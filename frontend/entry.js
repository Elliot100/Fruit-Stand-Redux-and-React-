import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { addApple, addOrange, clearFruit } from './actions';

// for testing only
window.store = store;
window.addApple = addApple;
window.addOrange = addOrange;
window.clearFruit = clearFruit;

const App = () => (
	<div>Hello Elliot!</div>
);

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
	<App/>,
	document.getElementById('root')
	);
});