import React from 'react'
import { Food } from '../App'
import { Grommet, Button, Header, Menu, Main, Paragraph, Box, Image, Grid} from 'grommet';
import './PetFood.css'


interface Props {
    food: Food
    addToCart: (food: Food) => void
}

interface State {
  
}

export default class PetFood extends React.Component<Props, State> {
    handleClick(){
        this.props.addToCart({id: this.props.food.id,type: this.props.food.type, animal: this.props.food.animal, img: this.props.food.img, price: this.props.food.price, quantity: this.props.food.quantity})
      }

    render() {
        return (
            <Grommet>
                <Box justify="center" align="center"
                     width="medium" height="medium" direction="row"
                    border={{ color: 'brand', size: 'small' }}
                    pad="small" margin="small">
                    <Box justify="center" align="center"
                        width="medium"height="medium"
                        pad="small">
                        <Box justify="center" width="small"
                            height="small" direction="row"
                            pad="small"><h2>Food</h2>
                        </Box>
                        <Box width="small"
                            height="small" justify="center" direction="row"
                            pad="small">
                            <li>{this.props.food.type}</li>
                        </Box>
                        <Box width="small"
                            height="small" justify="center" direction="row"
                            pad="small">
                            <li>{this.props.food.animal}</li>
                        </Box>
                        <Box width="small"
                            height="small" justify="center" direction="row"
                            pad="small">
                            <li>{this.props.food.price + ' kr'}</li>
                        </Box>
                        <Box width="medium" justify="center"
                            height="medium" direction="row"
>
                            <img src={this.props.food.img}/>
                        </Box>
                        <Box justify="center" width="small"
                            height="small" direction="row"
                            pad="small">
                                <Button
                                label="Add To Cart"
                                color='brand'
                                onClick={() => this.handleClick()}
                                />
                        </Box>
                    </Box>
                </Box>
            </Grommet>
        )
    }
}