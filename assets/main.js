import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/hello';

var data = function () {};

ReactDOM.render(
    <App name={data}>
        <span>hello</span>
        <span>world</span>
    </App>,
    document.querySelector('#APP')
);
