import React from 'react'

export default class App extends React.Component {
    render() {
        console.log(this);
        return <div>hello</div>
    }
}
App.propTypes = {
    name: React.PropTypes.string.isRequired
};

