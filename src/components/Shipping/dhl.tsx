import React, { Component } from 'react'
import { Paragraph } from 'grommet'

interface Props {
    cost: string
}

export default class Dhl extends Component<Props> {
    render() {
        return (
            <div>
                <Paragraph>Your items will be delivered in 24 hours</Paragraph>
                <Paragraph>{this.props.cost}</Paragraph>
            </div>
        )
    }
}
