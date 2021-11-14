export const ADD_FRUIT = 'ADD_FRUIT';
export const CLEAR = 'CLEAR';

export const addApple = () => ({
  type: ADD_FRUIT,
  fruit: 'apple'
});

export const addOrange = () => ({
  type: ADD_FRUIT,
  fruit: "orange",
});

export const clearFruit = () =>({
  type: CLEAR
})