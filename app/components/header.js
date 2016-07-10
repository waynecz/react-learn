import React from 'react'
import Navs from './nav.js'
import {Link} from 'react-router'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header className="brain">
                <Navs />
                
            </header>
        )
    }
}
