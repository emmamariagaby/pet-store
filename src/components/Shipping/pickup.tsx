import React, { Component } from 'react'

interface Props {
    cost: string
}

export default class Pickup extends Component<Props> {

    render() {
        return (
            <div>
                <p>Pick up your order from our store in an hour</p>
                <p>{this.props.cost}</p>
            </div>
        )
    }
}
