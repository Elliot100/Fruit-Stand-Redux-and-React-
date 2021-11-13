import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

window.store = store;

const App = () => (
	<div>Hello Elliot!</div>
);

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
	<App/>,
	document.getElementById('root')
	);
});