import React from "react"
import StartScreen from "./Screens/StartScreen/StartScreen"
import ProductScreen from "./Screens/ProductScreen"
import CheckoutScreen from "./Screens/CheckoutScreen/CheckoutScreen"
import InformationScreen from "./Screens/InformationScreen"
import ModalCheckout from "./Payment/ModalCheckout";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { data } from './../Products'
import { Grommet, grommet } from "grommet"

export type Food = {
  id: number
  type: string
  animal: string
  img: string
  price: number
  total: number
  quantity: number
  info: string
  infoUrl: string
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
  infoUrl: string
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
        let index = this.state.cart.indexOf(food);
    
        this.setState({
          cart: [
            ...this.state.cart.slice(0, index),
            ...this.state.cart.slice(index + 1),
          ]
        })
      }

      clearCart = () => {
        this.setState({cart: []})
      }

     
    render() {

      return (

          <Grommet theme={grommet}>
            <BrowserRouter basename="App">
            <div className="App">   
            <Switch>
              <Route exact path="/" >
                <StartScreen />
              </Route>
              <Route path="/ProductScreen">
                <ProductScreen dogCatFood={this.state.dogCatFood} cart={this.state.cart} addFood={this.addFood}/>
              </Route>
              <Route path="/OrderConfirmation">
               <ModalCheckout clearCart={this.clearCart} />
              </Route>
              
              <Route path="/CheckoutScreen" >
                <CheckoutScreen handleRemove={this.handleRemove} cart={this.state.cart}/>
              </Route>
                <Route path="/InformationScreen" >
              </Route>
            </Switch>
            </div>
            </BrowserRouter>
          </Grommet>
      )
  }
}