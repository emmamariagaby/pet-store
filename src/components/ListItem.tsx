import React from 'react'
import { Food } from './ProductScreen'
import { Grommet, Button, Header, Menu, Main, Paragraph, Box, Image} from 'grommet';

interface Props {
    food: Food
    onButtonClick: () => void
}

class ListItem extends React.Component<Props> {
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
                onClick={() => {}}
                />
            </Box>
        </Grommet>
        )
    }
}

export default ListItem