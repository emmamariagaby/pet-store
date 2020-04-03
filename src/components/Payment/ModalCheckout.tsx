import React, { Component } from 'react'
import { Grommet, Button, Box, grommet, Layer } from 'grommet'
import { Link } from 'react-router-dom';
import { complete } from '../../CompleteOrder'
import { Refresh } from 'grommet-icons';

export type Complete = {
    info: string
}

export type CompleteOrder = {
    info: string
}

interface Props {
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
            showLayer: false,
            text: complete,
            order: '',
            random: Math.floor(Math.random() * 100000) + 1000
        }

        this.completeOrder = this.completeOrder.bind(this);
        this.refresh = this.refresh.bind(this);


    }
    completeOrder() {
        this.setState(prevState => ({
            showLayer: !prevState.showLayer,
            order: this.state.text.info
        }));
    }

    refresh() {
        window.location.reload();
    }

    render() {


        console.log(this.state.text.info)

        return (
            <Grommet theme={grommet}>
                <Link
                    to={{
                        pathname: "/CheckoutScreen"
                    }}
                ><Button type="submit"
                    label="Create order"
                    primary
                    onClick={e => {
                        {
                            const promise = new Promise(resolve => {
                                setTimeout(() => {
                                    resolve()
                                }, 2000)
                            })
                            promise.then(() => {
                                this.completeOrder()
                                return
                            })
                        }
                    }} />
                </Link>

                {this.state.showLayer && (
                    <Layer full animation="fadeIn">
                        <Box width="large" height="large" align="center" justify="center" fill background="white" pad="medium">
                            <Box width="large" height="large" align="center" justify="center" pad="medium" border={{ color: '#DADADA', size: 'small' }}>

                                <p>{this.state.order + this.state.random}</p>

                                <Link
                                    to={{
                                        pathname: "/CheckoutScreen"
                                    }}
                                >
                                    <Button
                                        primary
                                        label="Close"
                                        onClick={this.completeOrder && this.refresh}
                                    />
                                </Link>
                            </Box>
                        </Box>
                    </Layer>
                )}
            </Grommet >
        )
    }
}
