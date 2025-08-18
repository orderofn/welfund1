import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';

// Font Awesome Icons
import 'font-awesome/css/font-awesome.min.css';

//ReactDOM.render(<App />, document.getElementById('root'));


const clientRender = () => {
        ReactDOM.render(
            <BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
    };
    
    const serverRender = () => {};
    
    if (typeof window === 'object') {
        clientRender();
    } else {
        serverRender();
    };