import React, { Component } from 'react'
import { Paragraph } from 'grommet'

interface Props { cost: string }

export default class Pickup extends Component<Props> {
    render() {
        return (
            <div>
                <Paragraph>Pickup your items from our shop in an hour</Paragraph>
                <Paragraph>{this.props.cost}</Paragraph>
            </div>
        )
    }
}
