import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import ParticlesBg from "particles-bg";


ReactDOM.render(
  <Router>
    <App />
    {/* <ParticlesBg type="square" bg={true}/> */}
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
