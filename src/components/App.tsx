import React from "react"
import StartScreen from "./StartScreen"
import ProductScreen from "./ProductScreen"
import CheckoutScreen from "./CheckoutScreen"
import { Link } from 'react-router-dom';
import InformationScreen from "./InformationScreen"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { privateEncrypt } from "crypto";
import { data } from './../Products'
import { Grommet } from "grommet";

export type Food = {
  id: number
  type: string
  animal: string
  img: string
  price: number
  total: number
  quantity: number
  info: string
}

export type Cart = {
  id: number
  type: string
  animal: string
  img: string
  price: number
  total: number
  quantity: number
  info: string
}
  
  interface Props {
   
  }

  interface State {
    dogCatFood: Food[]
    cart: Cart[]
  }

export default class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
          dogCatFood: data,
          cart: []
        }
      }

      addFood = (food: Food) => {
        if (this.state.cart.find((delDuplicate) => delDuplicate.id === food.id)) {
        } else {
          this.setState({
            cart: [...this.state.cart, food],
            })
        }
          food.total = food.price
          food.quantity += 1
      }

      handleRemove = (food: Food) => {
        console.log('removing...')
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
        <Grommet theme={header}>
          <Router>
            <div className="App">   
            <Switch>
              <Route path="/" exact component={StartScreen}>
                <StartScreen />
                </Route>
                <Route path="/ProductScreen" component={ProductScreen}>
                <ProductScreen dogCatFood={this.state.dogCatFood} cart={this.state.cart} addFood={this.addFood}/>
                </Route>
                <Route path="/CheckoutScreen" component={CheckoutScreen}>
                <CheckoutScreen handleRemove={this.handleRemove} cart={this.state.cart}/>
                </Route>
                <Route path="/InformationScreen" component={InformationScreen}>
                </Route>
            </Switch>
            
            </div>
          </Router>
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