import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import Headers from './components/header';
import {Router, Link, browserHistory} from 'react-router';


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Headers />
            </div>
        )
    }
}

const routerConfig = [
    {
        path     : '/',
        component: Main
    }
];

ReactDOM.render(
    <Router routes={routerConfig} history={browserHistory}/>,
    document.querySelector('#APP')
);