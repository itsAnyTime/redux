
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Reducer"
/* const initialState = {
  count1: 0,
  count2: 0
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENTX":
      return {
        ...state, count1: state.count1 + 1
        // count1: state.count1 + 1,
        // count2: state.count2
      };
    case "INCREMENTY":
      return {
        ...state, count2: state.count2 + 1
        // count2: state.count2 + 1,
        // count1: state.count1
      };
    default:
      return state;
  }
} */
const store = createStore(reducer);
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);