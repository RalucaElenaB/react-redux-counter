// components/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './reducers'; // ajustează calea în funcție de structura proiectului

export const App = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
