import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store/index.js"
import {Provider} from "react-redux";
import {HashRouter as Router ,Route} from "react-router-dom"
import 'antd/dist/antd.min.css';

ReactDOM.render( 
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
    ,document.getElementById('root'));


