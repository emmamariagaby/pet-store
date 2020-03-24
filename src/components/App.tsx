import React from "react"
import StartScreen from "./StartScreen"
import ProductScreen from "./ProductScreen"
import CheckoutScreen from "./CheckoutScreen"
import NavigationMenu from "./NavigationMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Basket } from "grommet-icons";
import { Button } from "grommet";

export interface Food {
    id: number
    type: string
    animal: string
    img: string
    count: number
  }
export type Cart = {
    id: number
    type: string
    animal: string
    img: string
    count: number
  }
  
  interface Props {}

  interface State {
    dcfood: Food[]
    cart: Cart[]
    count: number
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
            count: 0
          }, {
            id: 1,
            type: 'wet',
            animal: 'dog',
            img: 'https://cdn.royalcanin-weshare-online.io/zCJQa2sBaxEApS7LRh5U/v80/ad-jack-russel-packshot-bhn18?w=320&auto=compress&fm=jpg',
            count: 0
          }, {
            id: 2,
            type: 'dry',
            animal: 'cat',
            img: 'https://cdn.royalcanin-weshare-online.io/m2kUrmsBG95Xk-RB3Pu-/v4/hairskin-ne-fcn-packshot?w=320&auto=compress&fm=jpg',
            count: 0
          }, {
            id: 3,
            type: 'wet',
            animal: 'cat',
            img: 'https://cdn.royalcanin-weshare-online.io/-Gkua2QBG95Xk-RBidKW/v2/16-kitten-sterilised-b1-ne?w=320&auto=compress&fm=jpg',
            count: 0
        }],
            cart: [],
            count: 0
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
            ...this.state.cart.slice(index + 1)
          ]
        })
      }

      removeOne = (food: Food) => {
        this.setState({
          cart: [
            ...this.state.food.count( + 1)
          ]
        })
      }

      addOne = (food: Food) => {
        this.setState({
          count: (this.state.count - 1)
        })
      }
    
       

    render() {
    return (
      <Router>
        <div className="App">
          <nav>
          <NavigationMenu>
            {/* här ska button kopplas till rätt route path? */}
          </NavigationMenu>
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