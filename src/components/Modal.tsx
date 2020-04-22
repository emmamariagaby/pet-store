import React, { Component } from 'react'
import { Button, Box, Layer } from 'grommet'
import { Food } from './App';
import { Link, RouteComponentProps } from 'react-router-dom';
import { data } from './../Products'

interface Params {
    infoUrl: string
}

interface Props extends RouteComponentProps<Params> {}

export default class Modal extends Component<Props> {

    render() {
        const img = {
            width: "20%"
        };

        const { params } = this.props.match
        const food = data.find(product => product.infoUrl === params.infoUrl)
        if (!food) {
            return (
                <Layer full animation="fadeIn">
                    <h3>Tyvärr finns inte produkten som du letar efter...</h3>
                </Layer>
            )
        }

        return (
            <Layer full animation="fadeIn">
                <Box width="large" height="large" align="center" justify="center" fill background="white" pad="medium">
                <Box width="large" height="large" align="center" justify="center" pad="medium" border={{ color: '#DADADA', size: 'small' }}>
                    <img style={img} src={food.img} alt="pet food" />
                    <p>{food.info}</p>
                    <p>{food.type}</p>
                    <p>{food.price + ' ' + 'kr'}</p>

                    <Link to="/ProductScreen">
                        <Button primary label="Close" />
                    </Link>

                    </Box> 
                </Box>
            </Layer>
        )
    }
}
