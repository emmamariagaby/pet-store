import React from 'react';
import { Grommet, Button, Header, Menu, Main, Paragraph, Box, Image, Footer, Anchor, Grid} from 'grommet';
import List from './List';
import { Basket, Home } from 'grommet-icons';
import { Cart } from './App'
import { Food } from './App'

/**
 * Product page with dog and cat food
 */

  
  interface Props {
    dcfood: Food[]
    cart: Cart[]
    addFood: (food: Food) => void
  }

  interface State {
   
  
  }

 class ProductScreen extends React.Component<Props, State> {
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
                    <Button href="CheckoutScreen" icon={<Basket />} />
                </Header>
                <Main pad="small" justify="center" align="center">
                    <h2>ONLINE SHOP</h2>
                    <h3>Add petfood to your cart</h3>
                </Main>
                    <List items={this.props.dcfood} addFood={this.props.addFood}/>
                <Footer background="#DADADA" pad="small">
                    <h5>Created by<br></br>emmamariagaby emmbla louisebackstrom @ github</h5>
                    <Anchor href="InformationScreen" label="INFORMATION"/>
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

export default ProductScreen;