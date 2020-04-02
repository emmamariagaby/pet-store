import React, { Component } from 'react'
import { Grommet, Button, Box, grommet, Layer } from 'grommet'
import { Food } from './App';
import { Link } from 'react-router-dom';


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
        const img = {
            width: "20%"
          };
        return (
            <Grommet theme={grommet}>
                <Button
                    label="Info"
                    onClick={this.handleProductInfo}

                />
          }
          
        return (
            <Grommet theme={grommet}>
                <Link
                  to={{
                    pathname: "/ProductScreen/" + this.props.food.infoUrl
                  }}
                ><Button
                label="Info"
                onClick={this.handleProductInfo}
                
            /></Link>
                
                {this.state.showLayer && (
                    <Layer full animation="fadeIn">
                        <Box width="large" height="large" align="center" justify="center" fill background="white" pad="medium">
                        <Box width="large" height="large" align="center" justify="center" pad="medium" border={{ color: '#DADADA', size: 'small' }}>
                            <img style={img} src={this.props.food.img} alt="pet food" />
                            <p>{this.props.food.info}</p>
                            <p>{this.props.food.type}</p>
                            <p>{this.props.food.price + ' ' + 'kr'}</p>

                            <Link
                            to={{
                                pathname: "/ProductScreen"
                            }}
                            >
                            <Button
                                primary
                                label="Close"
                                onClick={this.handleProductInfo}
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
