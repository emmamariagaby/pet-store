import React from 'react';
import { Cart } from './App'
import { Food } from './App'
import { Grommet, Button, Header, Main, Box, Footer, Anchor, Menu } from 'grommet';
import { Basket, Home, Trash, SubtractCircle, AddCircle } from 'grommet-icons';
import InformationForm from './InformationForm';
//import InformationForm from './InformationForm'

interface Props {
    cart: Cart[]
    handleRemove: (food: Food) => void
}

interface State {
    add: boolean
    remove: boolean
}
/**
 * Checkout page with chart, payment method and customer information
 */

class CheckoutScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            add: false,
            remove: false
        }
    }

    addOne = (food: Food) => {
        this.setState({ add: true })
           food.quantity+= 1
      }

      removeOne = (food: Food) =>{
        this.setState({ remove: true })
        food.quantity-= 1
      }

    render() {
        return (
            <Grommet theme={header}>
                <Header background="brand" pad="large">
                <Menu
        label='Menu'
        items={[
            { label: 'HOME', href: '/' }, { label: 'SHOP', href: 'ProductScreen' }, { label: 'CART', href: 'CheckoutScreen' }
      ]}
    />
                    <h1>pet store</h1>
                    <Button icon={<Basket />} hoverIndicator onClick={() => alert('Your Basket')} />
                </Header>

                <Main pad="medium" justify="center" align="center">
                    <h2>Your cart</h2>
                </Main>

                {this.props.cart.map(food => (
                    <>
                        <Box justify="center" align="center"
                            width="medium" height="medium" direction="row"
                            border={{ color: 'brand', size: 'small' }}
                            pad="small" margin="small">
                            <Box justify="center" align="center"
                                width="medium" height="medium"
                                pad="small" margin="small">
                                <Box justify="center" width="small"
                                    height="small" direction="row"
                                    pad="small" margin="small"><h2>Food</h2>
                                </Box>
                                <Box width="small"
                                    height="small" justify="center"
                                    pad="small" margin="small" direction="row"> 
                                    <h3 className="food" key={food.id}>{food.type}</h3>
                                </Box>
                                <Box width="small"
                                    height="small" justify="center"
                                    pad="small" margin="small" direction="row"> 
                                    <h3 className="food" key={food.id}>{food.animal}</h3>
                                </Box>
                                <Box width="medium" justify="center"
                                    height="medium" direction="row"
                                    pad="small" margin="small">
                                    <img key={food.id} src={food.img} />
                                </Box>
                                <Button icon={<Trash color='brand' size='medium'/>} hoverIndicator onClick={() => this.props.handleRemove(food)} />
                                <Box width="medium" justify="center"
                                    height="medium" direction="row"
                                    pad="medi" margin="small">
                                    <Button icon={<AddCircle color='brand' size='medium'/>} hoverIndicator onClick={() => this.addOne(food)} />
                                    <h3>{food.quantity}</h3> 
                                    <Button icon={<SubtractCircle color='brand' size='medium'/>} hoverIndicator onClick={() => this.removeOne(food)} />
                                </Box>
                            </Box>
                        </Box>
                    </>
                ))}
                <InformationForm />
                <Footer background="#DADADA" pad="small">
                    <h5>Created by<br></br>emmamariagaby emmbla louisebackstrom @ github</h5>
                    <Anchor label="INFORMATION" />
                </Footer>
            </Grommet>
        )
    }

}

const header = {
    global: {
        font: {
            family: 'Roboto',
            size: '15px',
            color: "brand",
            height: '20px',
            justify: 'center',
            align: 'center'
        },
    },
};

export default CheckoutScreen;
