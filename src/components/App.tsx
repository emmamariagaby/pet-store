import React from "react"
import StartScreen from "./StartScreen"
import ProductScreen from "./ProductScreen"
import CheckoutScreen from "./CheckoutScreen"
import { Link } from 'react-router-dom';
import InformationScreen from "./InformationScreen"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { privateEncrypt } from "crypto";

export type Food = {
  id: number
  type: string
  animal: string
  img: string
  price: number
  total: number
  quantity: number
}
export type Cart = {
  id: number
  type: string
  animal: string
  img: string
  price: number
  total: number
  quantity: number
}

interface Props { }

interface State {
  dcfood: Food[]
  cart: Cart[]
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      dcfood: [{
        id: 0,
        type: 'Dry, Mini Adult',
        animal: 'Dog',
        img: 'https://cdn.royalcanin-weshare-online.io/v2k6a2QBG95Xk-RBN9oV/v256/packshot-mini-ad-shn17?w=320&auto=compress&fm=jpg',
        price: 250,
        total: 0,
        quantity: 0
      }, {
        id: 1,
        type: 'Dry, Medium Adult',
        animal: 'Dog',
        img: 'https://cdn.royalcanin-weshare-online.io/5yLrrWsBaxEApS7LIx-P/v26/packshot-med-ad7-shn17?w=250',
        price: 250,
        total: 0,
        quantity: 0
      }, {
        id: 2,
        type: 'Dry',
        animal: 'Dog, Giant Adult',
        img: 'https://cdn.royalcanin-weshare-online.io/evo5a2QBIYfdNSoCWQT-/v20/packshot-giant-ad-shn17?w=320&auto=compress&fm=jpg',
        price: 300,
        total: 0,
        quantity: 0
      }, {
        id: 3,
        type: 'Wet, Mini Adult',
        animal: 'Dog',
        img: 'https://cdn.royalcanin-weshare-online.io/_CIQrmsBaxEApS7L9R-E/v2/shn18-mini-adult-s-pouch-85?w=320&auto=compress&fm=jpg',
        price: 300,
        total: 0,
        quantity: 0
      }, {
        id: 4,
        type: 'Wet, Medium Adult',
        animal: 'Dog',
        img: 'https://cdn.royalcanin-weshare-online.io/-yIPrmsBaxEApS7L3x89/v32/shn18-medium-adult-s-pouch-140?w=320&auto=compress&fm=jpg',
        price: 250,
        total: 0,
        quantity: 0
      }, {
        id: 5,
        type: 'Wet, Maxi Adult',
        animal: 'Dog',
        img: 'https://cdn.royalcanin-weshare-online.io/kmkOrmsBG95Xk-RB0ftX/v30/shn18-maxi-adult-s-pouch-140?w=250',
        price: 250,
        total: 0,
        quantity: 0
      }, {
        id: 6,
        type: 'Dry, Hairball Care',
        animal: 'Cat',
        img: 'https://cdn.royalcanin-weshare-online.io/yCEya2QBaxEApS7LaP13/v34/hairball-s-fcn-packshot?w=320&auto=compress&fm=jpg',
        price: 250,
        total: 0,
        quantity: 0
      }, {
        id: 7,
        type: 'Dry, Indoor',
        animal: 'Cat',
        img: 'https://cdn.royalcanin-weshare-online.io/9Gkua2QBG95Xk-RBh9KI/v22/16-indoor-27-b1-ne?w=320&auto=compress&fm=jpg',
        price: 250,
        total: 0,
        quantity: 0
      }, {
        id: 8,
        type: 'Dry',
        animal: 'Cat, Outdoor',
        img: 'https://cdn.royalcanin-weshare-online.io/QyEua2QBaxEApS7LkPuL/v14/16-outdoor-b1-ne?w=320&auto=compress&fm=jpg',
        price: 300,
        total: 0,
        quantity: 0
      }, {
        id: 9,
        type: 'Wet, Hairball Care',
        animal: 'Cat',
        img: 'https://cdn.royalcanin-weshare-online.io/w_oya2QBIYfdNSoCRQBd/v16/fcnw16-hairball-cig-s-pouch?w=320&auto=compress&fm=jpg',
        price: 300,
        total: 0,
        quantity: 0
      }, {
        id: 10,
        type: 'Wet, Steriliserad Jelly',
        animal: 'Cat',
        img: 'https://cdn.royalcanin-weshare-online.io/Ivoxa2QBIYfdNSoCLwBY/v12/fhnw16-ster-cij-s-pouch?w=320&auto=compress&fm=jpg',
        price: 250,
        total: 0,
        quantity: 0
      }, {
        id: 11,
        type: 'Wet, Intense Beauty',
        animal: 'Cat',
        img: 'https://cdn.royalcanin-weshare-online.io/uCEya2QBaxEApS7LS_35/v44/fcnw16-int-beauty-cig-s-pouch?w=320&auto=compress&fm=jpg',
        price: 250,
        total: 0,
        quantity: 0
      }],
      cart: [],
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

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={StartScreen}>
              <StartScreen />
            </Route>
            <Route path="/ProductScreen" component={ProductScreen}>
              <ProductScreen dcfood={this.state.dcfood} cart={this.state.cart} addFood={this.addFood} />
            </Route>
            <Route path="/CheckoutScreen" component={CheckoutScreen}>
              <CheckoutScreen handleRemove={this.handleRemove} cart={this.state.cart} />
            </Route>
            <Route path="/InformationScreen" component={InformationScreen}>
            </Route>
          </Switch>

        </div>
      </Router>
    )
  }
}