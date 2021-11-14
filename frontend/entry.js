import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { addApple, addOrange, clearFruit } from './actions';
import FruitStandContainer from './components/fruit_stand_container';
import { Provider } from 'react-redux';

// for testing only
window.store = store;
window.addApple = addApple;
window.addOrange = addOrange;
window.clearFruit = clearFruit;

const App = () => (
  <Provider store={store}>
    <FruitStandContainer/>
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
	<App/>,
	document.getElementById('root')
	);
});