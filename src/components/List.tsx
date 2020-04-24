import React from 'react'
import { Food } from './App'
import PetFood from './PetFood/PetFood';
import './PetFood/PetFood.css'

interface Props {
    items: Food[]
    addFood: (food: Food) => void
}

class List extends React.Component<Props> {
    
   
    render () {
    return (
        <div>
            <ul className="flex">
                {this.props.items.map((item) => { 
                return <PetFood
                key={item.id}
                food={item} 
                addToCart={this.props.addFood}
                />})}
            </ul>
        </div>
        )
    }
}

export default List