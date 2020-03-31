import React, { Component } from 'react'
import { Grommet, Button, Box, grommet, Layer } from 'grommet'
interface Props {

}

interface State {
    showLayer: boolean
}


export default class Modal extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            showLayer: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
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
                    onClick={this.handleClick}

                />
                {this.state.showLayer && (
                    <Layer full animation="fadeIn">
                        <Box fill background="light-4" align="center" justify="center">
                            <Button
                                primary
                                label="Close"
                                onClick={this.handleClick}
                            />
                        </Box>
                    </Layer>
                )}
            </Grommet >
        )
    }
}
