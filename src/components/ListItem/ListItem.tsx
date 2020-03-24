import React from 'react'
import { Food } from '../ProductScreen'
import { Grommet, Button, Header, Menu, Main, Paragraph, Box, Image} from 'grommet';
import './ListItem.css'

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
            <Box direction="column" border={{ color: 'brand', size: 'medium' }}
             background={{color:"accent-1", opacity: 0.1}} 
             pad="medium" width="medium" height="medium">
                <Box pad="small" gap= 'medium'>
                    <li>{this.props.food.type}</li>
                    <li>{this.props.food.animal}</li>
                </Box>
                <Box pad="small" gap= 'medium'>
                    <img src={this.props.food.img}/>
                </Box>
                <Box pad="xxsmall" gap= 'medium'>
                    <Button
                    label="Add"
                    color='brand'
                    onClick={() => this.handleClick()}
                    />
                </Box>
            </Box>
        </Grommet>
        )
    }
}

export default ListItem