import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import * as atatus from 'atatus-js';

ReactDOM.render(<App />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

serviceWorker.unregister();
atatus.config('19d30c26c1ae42f5a22f55b72dc63c64').install();

atatus.notify(newError('Test Atatus Setup'));