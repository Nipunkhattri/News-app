// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>,
  //   document.getElementById("root")
  // );
  
  // import {StrictMode} from 'react';
  import {createRoot} from 'react-dom/client';
  import { BrowserRouter } from "react-router-dom";

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
);