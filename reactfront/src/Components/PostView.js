import React, { Component } from 'react'

// props가 필요할 것 같을 때 사용하자.

export default class PostView extends Component {
    render() {
        const {id, title, content} = this.props
        return (
            <div>
                {id}
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        )
    }
}


