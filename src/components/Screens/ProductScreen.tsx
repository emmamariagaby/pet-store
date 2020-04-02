import React from 'react';
import { Main, Footer, Anchor } from 'grommet';
import List from '../List';
import { Cart } from '../App'
import { Food } from '../App'
import { Link } from 'react-router-dom';
import HeaderBar from '../HeaderBar';

/**
 * Product page with dog and cat food
 */


interface Props {
  dogCatFood: Food[]
  cart: Cart[]
  addFood: (food: Food) => void
}

interface State {


}

class ProductScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <>
      <HeaderBar/>
        <Main pad="large" justify="center" align="center">
          <h2>ONLINE SHOP</h2>
          <h3>Add petfood to your cart</h3>

          <List items={this.props.dogCatFood} addFood={this.props.addFood} />

          <ul className="nav-links">
          </ul>

          <ul className="nav-links">
                        <Link to='/CheckoutScreen'>
                            <li>Go to cart</li>
                        </Link>
                    </ul>

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

export default ProductScreen;