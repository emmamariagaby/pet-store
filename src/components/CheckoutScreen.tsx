import React from 'react';
import { Cart } from './ProductScreen'

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
            <div className="favorite_container">
                {this.props.cart.map(food => (
                    <>  
                    <div className="added_item">
                        <p className="food" key={food.index}>{food.type}</p>
                        <p className="food" key={food.index}>{food.animal}</p>
                        <p className="food" key={food.index}>{food.img}</p>
                    </div>
                    </>
                ))}
            </div>
        )
    }

 }
 export default CheckoutScreen;