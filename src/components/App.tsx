import React from "react"
import StartScreen from "./StartScreen"
import ProductScreen from "./ProductScreen"
import CheckoutScreen from "./CheckoutScreen"
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export type Food = {
    id: number
    type: string
    animal: string
    img: string
    quantity: number
  }
export type Cart = {
    id: number
    type: string
    animal: string
    img: string
    quantity: number
  }
  
  interface Props {}

  interface State {
    dcfood: Food[]
    cart: Cart[]
    quantityItem: number
  }

export default class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
          dcfood: [{
            id: 0,
            type: 'dry',
            animal: 'dog',
            img: 'https://cdn.royalcanin-weshare-online.io/XiKc-mQBaxEApS7LrwSZ/v2/mini-dental-ccn-packshot?w=320&auto=compress&fm=jpg',
            quantity: 1
          }, {
            id: 1,
            type: 'wet',
            animal: 'dog',
            img: 'https://cdn.royalcanin-weshare-online.io/zCJQa2sBaxEApS7LRh5U/v80/ad-jack-russel-packshot-bhn18?w=320&auto=compress&fm=jpg',
            quantity: 1
          }, {
            id: 2,
            type: 'dry',
            animal: 'cat',
            img: 'https://cdn.royalcanin-weshare-online.io/m2kUrmsBG95Xk-RB3Pu-/v4/hairskin-ne-fcn-packshot?w=320&auto=compress&fm=jpg',
            quantity: 1
          }, {
            id: 3,
            type: 'wet',
            animal: 'cat',
            img: 'https://cdn.royalcanin-weshare-online.io/-Gkua2QBG95Xk-RBidKW/v2/16-kitten-sterilised-b1-ne?w=320&auto=compress&fm=jpg',
            quantity: 1
        }],
            cart: [],
            quantityItem: 1
        }
      }

      addFood = (food: Food)=>{
        this.setState({
          cart: [...this.state.cart, food]
          })
      }

      handleRemove = (food: Food) => {
        let index = this.state.cart.indexOf(food);
    
        this.setState({
          cart: [
            ...this.state.cart.slice(0, index),
            ...this.state.cart.slice(index + 1),
          ]
        })
      }

    render() {
      return (
        <Router>
          <div className="App">  
          <nav>
        <ul className="nav-links">
            <Link to='/'>
            <li>StartScreen</li>
            </Link>
            <Link to='/ProductScreen'>
            <li>ProductScreen</li>
            </Link>
            <Link to='/CheckoutScreen'>
            <li>CheckoutScreen</li>
            </Link>
            </ul> 
        </nav>  
          <Switch>
            <Route path="/" exact component={StartScreen}>
              <StartScreen />
              </Route>
              <Route path="/ProductScreen" component={ProductScreen}>
              <ProductScreen dcfood={this.state.dcfood} cart={this.state.cart} addFood={this.addFood}/>
              </Route>
              <Route path="/CheckoutScreen" component={CheckoutScreen}>
              <CheckoutScreen handleRemove={this.handleRemove} cart={this.state.cart}/>
              </Route>
          </Switch>

          </div>
        </Router>
      )
  }
}