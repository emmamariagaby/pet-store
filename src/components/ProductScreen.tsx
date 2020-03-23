import React from 'react';
import { Grommet, Button, Header, Menu, Main, Paragraph, Box, Image} from 'grommet';
import List from './List';
import CheckoutScreen from './CheckoutScreen';

/**
 * Product page with dog and cat food
 */
export interface Food {
    type: string
    animal: string
    img: string
    index: number
  }
export type Cart = {
    type: string
    animal: string
    img: string
    index: number
  }
  
  interface Props {}

  interface State {
    dcfood: Food[]
    cart: Cart[]
  
  }

 class ProductScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
          dcfood: [{
            type: 'dry',
            animal: 'dog',
            img: 'url',
            index: 0
          }, {
            type: 'wet',
            animal: 'dog',
            img: 'url',
            index: 1
          }, {
            type: 'dry',
            animal: 'cat',
            img: 'url',
            index: 2
          }, {
            type: 'wet',
            animal: 'cat',
            img: 'url',
            index: 3
        }],
            cart: []
        }
      }

      addFood = (food: Food)=>{
        this.setState({
            cart: [...this.state.cart, food]
          })
      }
      

      render() {
        return (
            <Grommet theme={header}>
                <div className="StartScreen">
                    <List items={this.state.dcfood} addFood={this.addFood}/>
                    <CheckoutScreen cart={this.state.cart}/>
                </div>
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
      alignContent: 'center',
    },
  },
};

 export default ProductScreen;