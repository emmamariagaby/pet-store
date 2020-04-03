import React from 'react';
import { Cart } from '../App'
import { Grommet, Button, Header, Main, Box, Footer, Anchor, Menu, Paragraph } from 'grommet';
import { Basket, Trash, Subtract, Add } from 'grommet-icons';
import { Food } from '../App'
import { Link } from 'react-router-dom';
import InformationForm from '../Forms/InformationForm';
import HeaderBar from '../HeaderBar';

interface Props {
    cart: Cart[]
    handleRemove: (food: Food) => void
}

interface State {
    add: boolean
    remove: boolean
    checkout: boolean
}
/**
 * Checkout page with chart, payment method and customer information
 */

class CheckoutScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            add: false,
            remove: false,
            checkout: false
        }
    }

    addOne = (food: Food) => {
        this.setState({ add: true })
        food.total = food.price * food.quantity + food.price
        food.quantity += 1
    }

    removeOne = (food: Food) => {
        this.setState({ remove: true })
        food.total -= food.price
        food.quantity -= 1
    }

    checkout = () => {
        this.setState({ checkout: true })
    }

    emptyCart() {
        if (this.props.cart.length == 0) {
            return 'Cart is empty'

        }
    }

    render() {
        const totalSum = this.props.cart.length ? this.props.cart.reduce((total, food) => (
            total + food.total
        ), 0) : Number(0)


        return (
  <>
  <HeaderBar/>

                <Main pad="medium" justify="center" align="center">
                    <h2>{(this.props.cart.length == 0) ? "Shopping cart is empty" : "Your cart"}</h2>


                    {this.props.cart.map(food => (
                        <>
                            <Box justify="between" align="center"
                                width="xxlarge" height="small" direction="row"
                                pad="medium" border='top'>
                                <Box width="small" justify="center" align="center"
                                    height="small"
                                    pad="medium">
                                    <img src={food.img} />
                                    <h4 className="food">{food.type + ' '}{food.animal}</h4>
                                </Box>
                                <Box width="medium" justify="center" align="center"
                                    height="small" direction="row"
                                    pad="medium">
                                    <Button margin='small' icon={<Add color='rgb(124,76,219)' size='medium' />} hoverIndicator onClick={() => this.addOne(food)} />
                                    <h2>{food.quantity}</h2>
                                    <Button margin='small' icon={<Subtract color='rgb(124,76,219)' size='medium' />} hoverIndicator onClick={() => this.removeOne(food)} />
                                </Box>
                                <Button icon={<Trash color="rgb(124,76,219)" size='medium' />} hoverIndicator onClick={() => this.props.handleRemove(food)} />
                                <h2 className="food">{food.total + ' kr'}</h2>
                            </Box>
                        </>
                    ))}
                    <Box justify="end" border='top'
                        width="xxlarge" height="xsmall" direction="row"
                        pad="medium">
                        <h2>{(this.props.cart.length == 0) ? "" : "Total: " + totalSum}</h2>
                    </Box>
                    <Box justify="center"
                        width="xxlarge" height="small" direction="row"
                        pad="medium">
                        <Box>
                            {(this.props.cart.length == 0) ? "" : <Button
                                label="Checkout"
                                onClick={() => this.checkout()} primary
                            />}
                        </Box>
                    </Box>

                    {this.state.checkout && (
                        <InformationForm />)}

                    <ul className="nav-links">
                        <Link to='/ProductScreen'>
                            <li>Go back to shop</li>
                        </Link>
                    </ul>
                    <br></br><br></br><br></br><br></br><br></br>
                </Main>
                <Footer background="#DADADA" pad="small">
                    <h5>Created by<br></br>emmamariagaby emmbla louisebackstrom @ github</h5>
                    <Link to='/InformationScreen'>
                        <Anchor>INFORMATION</Anchor>
                    </Link>  
        </Footer>
            </>
        )
    }

}

export default CheckoutScreen;
