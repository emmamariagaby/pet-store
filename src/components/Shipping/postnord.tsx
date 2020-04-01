import React, { Component } from 'react'

interface Props {
    cost: string
}

export default class Postnord extends Component<Props> {

    render() {
        return (
            <div>
                <p>Your items will be delivered in 2-5 working days</p>
                <p>{this.props.cost}</p>
            </div>
        )
    }
}
