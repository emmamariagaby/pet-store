import React from 'react';
import { Cart } from '../ProductScreen'
import { Food } from '../ProductScreen'
import './CheckoutScreen.css'
import { Grommet, Button, Header, Menu, Main, Paragraph, Box, Image} from 'grommet';

interface Props {
    cart: Cart[]
    handleRemove:(food: Food) => void
}

interface State {
}
/**
 * Checkout page with chart, payment method and customer information
 */

 class CheckoutScreen extends React.Component<Props, State> {
    render() {
        return (
            <Grommet>  
                <h2>Din Varukorg</h2>
                {this.props.cart.map(food => (
                    <>  
                <Box justify="center" align="center"
                     width="medium" height="medium" direction="row"
                    border={{ color: 'brand', size: 'small' }}
                    pad="small" margin="small">
                    <Box justify="center" align="center"
                        width="medium"height="medium"
                        pad="small" margin="small">
                        <Box justify="center" width="small"
                            height="small" direction="row"
                            pad="small" margin="small"><h2>Food</h2>
                        </Box>
                        <Box width="small"
                            height="small" justify="center"
                            pad="small" margin="small">
                            <ul className="added_item">
                                <li className="food" key={food.id}>{food.type}</li>
                                <li className="food" key={food.id}>{food.animal}</li>
                            </ul>
                        </Box>
                        <Box width="medium" justify="center"
                            height="medium" direction="row"
                            pad="small" margin="small">
                           <img key={food.id} src={food.img}/>
                        </Box>
                        <Box justify="center" width="small"
                            height="small"
                            pad="small" margin="medium">
                            <Button
                            label="Remove"
                            color='brand'
                            onClick={() => this.props.handleRemove(food)}
                            />
                        </Box>
                    </Box>
                </Box>
                </>
                ))}
            </Grommet>
        )
    }

 }
 export default CheckoutScreen;