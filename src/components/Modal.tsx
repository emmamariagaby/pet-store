import React, { Component } from 'react'
import { Grommet, Button, Box, grommet, Layer } from 'grommet'
import { Food } from './App';

interface Props {
    food: Food
}

interface State {
    showLayer: boolean
}


export default class Modal extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            showLayer: false,
        }

        this.handleProductInfo = this.handleProductInfo.bind(this);
    }
    handleProductInfo() {
        this.setState(prevState => ({
            showLayer: !prevState.showLayer
        }));



    }



    render() {
        return (
            <Grommet theme={grommet}>
                <Button
                    primary
                    color="accent-3"
                    label="Show"
                    onClick={this.handleProductInfo}

                />
                {this.state.showLayer && (
                    <Layer full animation="fadeIn">
                        <Box fill background="light-4" align="center" justify="center">
                            <Button
                                primary
                                label="Close"
                                onClick={this.handleProductInfo}

                            />

                            <img src={this.props.food.img} />
                            <p>{this.props.food.type}</p>
                            <p>{this.props.food.price + ' ' + 'kr'}</p>
                            <p></p>
                        </Box>
                    </Layer>
                )}
            </Grommet >
        )
    }
}
