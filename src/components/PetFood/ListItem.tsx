import React from 'react'
import { Food } from '../ProductScreen'
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
      this.props.addToCart({id: this.props.food.id,type: this.props.food.type, animal: this.props.food.animal, img: this.props.food.img})
    }

    render() {
    return (
        <Grommet>  
            
        </Grommet>
        )
    }
}

export default ListItem