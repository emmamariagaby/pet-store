import React, { Component } from 'react'
import { Grommet, Button, Box, grommet, Layer } from 'grommet'
import { Link } from 'react-router-dom';
import { complete } from '../../CompleteOrder'

export type Complete = {
    info: string
}

export type CompleteOrder = {
    info: string
}

interface Props {
    clearCart: () => void;
}

interface State {
    showLayer: boolean
    text: Complete
    order: string
    random: number
}


export default class ModalCheckout extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            showLayer: true,
            text: complete,
            order: '',
            random: Math.floor(Math.random() * 100000) + 1000
        }
    }

    componentDidMount() {
        this.props.clearCart();
    }

    render() {


        console.log(this.state.text.info)

        return (
            <>

                {this.state.showLayer && (
                    <Layer full animation="fadeIn">
                        <Box width="large" height="large" align="center" justify="center" fill background="white" pad="medium">
                            <Box width="large" height="large" align="center" justify="center" pad="medium" border={{ color: '#DADADA', size: 'small' }}>

                                <p>{this.state.text.info + this.state.random}</p>

                                <Link
                                    to={{
                                        pathname: "/"
                                    }}
                                >
                                    <Button
                                        primary
                                        label="Close"
                                        onClick={this.props.clearCart}
                                    />
                                </Link>
                            </Box>
                        </Box>
                    </Layer>
                )}
            </>
        )
    }
}
