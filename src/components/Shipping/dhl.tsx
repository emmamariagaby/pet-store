import React, { Component } from 'react'

interface Props {
    cost: string
}

export default class Dhl extends Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return (
            <div>
                <p>Your items will be delivered in 1-2 days</p>
                <p>{this.props.cost}</p>

            </div>
        )
    }
}
