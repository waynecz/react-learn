import React from 'react'
import List from './list'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state        = {
            loading: false,
            fetched: false,
            err    : null,
            data   : null,
            opacity: 1.0
        }
    }

    static log(p) {
        console.log(p)
    }

    handleChange(e){
        console.log(e);
        this.setState({value: e.target.value});
    }

    fetch() {
        if (this.state.fetched) {
            // document
        } else {
            this.setState({loading: true});
            fetch('https://api.github.com/search/repositories?q=javascript&sort=stars')
                .then(response => response.json())
                .then(data => {
                    this.setState({loading: false, data: data, fetched: true});
                    // console.log(data)
                })
                .catch(err => {
                    console.log("Oops, error");
                    this.setState({loading: false, err: err})
                })
        }

    }

    componentDidMount() {
        // this.timer = setInterval(() => {
        //     let opacity = this.state.opacity;
        //     let chip = 0 - .05;
        //
        //     if (opacity < 0.1) {
        //         chip = .06
        //     } else if (opacity > 1) {
        //         chip = 0 - .05
        //     }
        //     opacity += chip;
        //     this.setState({
        //         opacity: opacity
        //     })
        // }, 100)
    }

    render() {
        let isLoading  = this.state.loading,
            isFetching = this.state.startFetchL,
            rst;
        // App.log(isLoading + '\n' + isFetching);
        if (isLoading) {
            rst = 'loading';
        } else if (!isLoading && this.state.data) {
            rst = this.state.data.items;
        } else {
            rst = '';
        }

        return (
            <div>
                <input type="text" ref="myIut" onChange={this.handleChange}/>
                <div ref="myDiv" style={{opacity: this.state.opacity}}></div>
                <input type="button" value="anniu" onClick={this.fetch.bind(this)}/>
                <List data={rst}/>
            </div>
        )
    }
}

App
    .propTypes    = {
    name: React.PropTypes.string.isRequired
};
App
    .defaultProps = {
    title: 'waynecz'
};