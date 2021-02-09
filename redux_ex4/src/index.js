
// sandeeps

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import reducer from "./Reducer"
// const store = createStore(reducer);
// ReactDOM.render(
//   <Provider store = {store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );


// step 1
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { Provider } from "react-redux";
// import { createStore } from "redux";

// ReactDOM.render(
//     <App />
//   ,
//   document.getElementById('root')
// );


// 2. step without redux
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { Provider } from "react-redux";
// import { createStore } from "redux";

// ReactDOM.render(
//     <App />
//   ,
//   document.getElementById('root')
// );


//////////////////////////with redux, created Reducer.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Reducer"

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);