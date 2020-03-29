import React from 'react'
import { Food } from '../App'
import { Grommet, Button, Header, Menu, Main, Paragraph, Box, Image, Grid} from 'grommet';
import './PetFood.css'


interface Props {
    food: Food
    addToCart: (food: Food) => void
    
}

interface State {
  message: string
}

export default class PetFood extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            message: ' '
            }
        }
    handleClick(){
        this.props.addToCart({id: this.props.food.id,type: this.props.food.type, animal: this.props.food.animal, img: this.props.food.img, price: this.props.food.price, total: this.props.food.total, quantity: this.props.food.quantity})
        
        this.setState({ 
           message: 'Added To Cart'
        })
      }

    render() {
        return (
            <Grommet>
                <Box justify="center" align="center"
                     width="small" height="small" direction="row"
                    border={{ color: '#DADADA', size: 'small' }}
                    pad="small" margin="small">
                    <Box justify="between" align="center"
                        width="small"height="small"
                        pad="medium">
                        <img src={this.props.food.img}/>
                        <li>{this.props.food.type + ' '} {this.props.food.animal}</li>
                        <li>{this.props.food.price + ' kr'}</li>
                        <Button
                            label="Add"
                            onClick={() => this.handleClick()} primary
                            />{this.state.message}
                    </Box>
                </Box>
            </Grommet>
        )
    }
}