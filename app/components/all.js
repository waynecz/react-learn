import React from 'react'

export default class All extends React.Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this)
        this.state   = {
            resolveData: null,
            isFetching : false
        }
    }

    lg(p) {
        console.log(p)
    }

    componentDidMount() {
        // let btn = document.querySelector('#btn');
        // btn.addEventListener('click', function () {
        //     lg(this)
        // }, false)
    }

    getData() {
        // this.setState({isFetching: true});
        fetch('./tst.json')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({resolveData: data, isFetching: false})
            })
            .catch(err => console.log(err))

    }

    render() {
        let renderData = this.state.resolveData;
        // let loading    = this.state.isFetching;
        let rstDOM;



        if (renderData) {
            rstDOM = renderData.annotations.map((listUnit) => {
                return (
                    <li>
                        <div className="col l2">{listUnit.id}</div>
                        <div className="col l2">{listUnit.text}</div>
                        <div className="col l2">{listUnit.type}</div>
                        <div className="col l2">{listUnit.begin}</div>
                        <div className="col l2">{listUnit.end}</div>
                    </li>
                )
            })
        }

        return (
            <div className="wrap">
                <div className="input-wrap">
                    <textarea name="" id="" cols="30" rows="10" className="input-area">ss</textarea>
                    <button id="btn" className="input-btn" onClick={this.getData}>
                        提交
                    </button>
                </div>
                <div className="result-wrap row">
                    <div className="t-header">
                        <div className="title col l2">tyoe</div>
                        <div className="title col l2">text</div>
                        <div className="title col l2">result</div>
                        <div className="title col l2">time</div>
                        <div className="title col l2">negeated</div>
                    </div>
                    <ul className="t-body">
                        {rstDOM}
                    </ul>
                </div>
            </div>

        )
    }
}

All.defaultProps = {
    initText: 'test'
};