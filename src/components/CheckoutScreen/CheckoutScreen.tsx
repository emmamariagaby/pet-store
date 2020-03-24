import React from 'react';
import { Cart } from '../ProductScreen'
import './CheckoutScreen.css'
import { Grommet, Button, Header, Menu, Main, Paragraph, Box, Image} from 'grommet';

interface Props {
    cart: Cart[]
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
                <Box direction="column" border={{ color: 'brand', size: 'medium' }}
                    background={{color:"brand", opacity: 0.1}} 
                    pad="medium" width="medium" height="medium">
                    <ul className="added_item">
                        <li className="food" key={food.id}>{food.type}</li>
                        <li className="food" key={food.id}>{food.animal}</li>
                        <img key={food.id} src={food.img}/>
                    </ul>
                </Box>
                </>
                ))}
            </Grommet>
        )
    }

 }
 export default CheckoutScreen;