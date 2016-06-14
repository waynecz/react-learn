import React from 'react'

class list extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rst,
            data = this.props.data;

        if (data && Object.prototype.toString.call(data) == '[object Array]') {
            rst = this.props.data.map(repo => {
                return (
                    <li>
                        <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars)
                        <br/> {repo.description}
                    </li>
                )
            });
        } else if (data == 'loading') {
            rst = data
        } else {
            rst = '没有数据';
        }

        return (
            <ol>
                {rst}
            </ol>
        )
    }
}


export default list