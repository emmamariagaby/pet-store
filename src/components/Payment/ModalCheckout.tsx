import React, { Component } from 'react'
import { Grommet, Button, Box, grommet, Layer } from 'grommet'
import { Link } from 'react-router-dom';
import  { complete }  from '../../CompleteOrder'

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
            random: Math.floor(Math.random() * 100000)+1000
        }

        this.completeOrder = this.completeOrder.bind(this);
        
       
    }
    completeOrder() {
        this.setState(prevState => ({
            showLayer: !prevState.showLayer,
            order: this.state.text.info
        }));
    }

    render() {
       
        
        console.log(this.state.text.info)

        return (
            <Grommet theme={grommet}>
                <Link
                  to={{
                    pathname: "/CheckoutScreen"
                  }}
                ><Button
                label="Create order"
                onClick={this.completeOrder}
                primary
                
            /></Link>
                
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
                                onClick={this.completeOrder}
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
