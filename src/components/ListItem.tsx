import React from 'react'
import { Food } from './ProductScreen'
import { Grommet, Button, Header, Menu, Main, Paragraph, Box, Image} from 'grommet';

interface Props {
    food: Food
    addToCart: (food: Food) => void
}

interface State {
  
}


class ListItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        
    }
    handleClick(){
      this.props.addToCart({type: this.props.food.type, animal: this.props.food.animal, img: this.props.food.img, index: this.props.food.index})
    }

    render() {
    return (
        <Grommet>   
            <Box height="small" width="small">
                <Image 
                />
                <li>{this.props.food.type}</li>
                <li>{this.props.food.animal}</li>
                <li>{this.props.food.img}</li>
                <Button
                label="Add"
                onClick={() => this.handleClick()}
                />
            </Box>
        </Grommet>
        )
    }
}

export default ListItem