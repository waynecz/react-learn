import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/hello';

var data = '222';

ReactDOM.render(
    <App name={data} url="./package.json">
    </App>,
    document.querySelector('#APP')
);
