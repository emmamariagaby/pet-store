import React from 'react';
import { Grommet, Button, Header, Menu, Main, Paragraph, Box, Image} from 'grommet';
import { Basket } from 'grommet-icons';
import List from './List';
/**
 * Product page with dog and cat food
 */
export interface Food {
    type: string
    animal: string
    img: string
  }
  
  interface Props {}

  interface State {
    dcfood: Food[]
  
  }

 class ProductScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
          dcfood: [{
            type: 'dry',
            animal: 'dog',
            img: 'url'
          }, {
            type: 'wet',
            animal: 'dog',
            img: 'url'
          }, {
            type: 'dry',
            animal: 'cat',
            img: 'url'
          }, {
            type: 'wet',
            animal: 'cat',
            img: 'url'
        }]
        }
      }

      render() {
        return (
            <Grommet theme={header}>
                <div className="StartScreen">
                    <List items={this.state.dcfood} />
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