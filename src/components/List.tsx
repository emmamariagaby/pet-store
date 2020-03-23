import React from 'react'
import ListItem from './ListItem'
import { Food } from './ProductScreen'

interface Props {
    items: Food[]
   
}

class List extends React.Component<Props> {
    
    handleOnClick = () => {
        
    }
    render () {
    return (
        <div>
            <ul>
                {this.props.items.map((item) => <ListItem food={item} onButtonClick={this.handleOnClick}/>)}
            </ul>
        </div>
    )
    }
}

export default List