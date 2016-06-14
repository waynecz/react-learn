import React from 'react'
import ReactDOM from 'react-dom'
import './style/main.scss'
import All from './components/all'
// import {Router, Link, Route, browserHistory} from 'react-router'

//
// class Main extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Demos</h1>
//                 <All />
//             </div>
//         )
//     }
// }

//
// const routerConfig = [
//     {
//         path       : '/',
//         component  : Main
//     }
// ];

ReactDOM.render(
    <All/>,
    document.querySelector('#APP')
);