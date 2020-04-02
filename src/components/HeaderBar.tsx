import React from 'react';
import { Grommet, Heading, Button, Header } from 'grommet';
import { Link } from 'react-router-dom';
import { Home, Basket } from 'grommet-icons';

class HeaderBar extends React.Component {
    render() {
      return (
        <Grommet theme={header}>
             <Header background="brand" pad="large">
          <Link to='/'>
            <Button icon={<Home />} />
          </Link>
          <Link to='/'>
            <Heading level={1}>pet store</Heading>
          </Link>
          <Link to='/CheckoutScreen'>
            <Button icon={<Basket />} />
          </Link>
          </Header>
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
  
export default HeaderBar;