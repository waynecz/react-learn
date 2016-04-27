import React from 'react'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state       = {
            liked: false,
            value: 'aaaa',
            opacity: 1.0
        }
    }

    handleClick(e) {
        console.log(e);
        this.setState({value: e.target.value});
    }
    fetch() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log("Oops, error"))
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0
            }
            this.setState({
                opacity: opacity
            })
        }, 100)
    }

    render() {
        let text = this.state.liked ? '爱️' : '💔',
            value = this.state.value;
        return (
            <div>
                <input type="text" ref="myIut" value={value} onChange={this.handleClick}/>
                <div ref="myDiv" style={{opacity: this.state.opacity}}>{text}</div>
                <input type="button" value="aaa" onClick={this.fetch.bind(this)}/>
            </div>
        )
    }
}
App.propTypes    = {
    name: React.PropTypes.string.isRequired
};
App.defaultProps = {
    title: 'waynecz'
};

