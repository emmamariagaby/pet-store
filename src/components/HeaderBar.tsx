import React from 'react';
import { Grommet, Heading, Button, Header } from 'grommet';
import { Link } from 'react-router-dom';
import { Basket, Menu } from 'grommet-icons';

class HeaderBar extends React.Component {
    render() {
      return (
        <Grommet theme={headerbar}>
             <Header background="brand" pad="large">
          <Link to='/ProductScreen'>
            <Button icon={<Menu />} />
          </Link>
          <Link to='/'>
            <Heading level={1} textAlign="center"
            alignSelf="center">pet store</Heading>
          </Link>
          <Link to='/CheckoutScreen'>
            <Button icon={<Basket />} />
          </Link>
          </Header>
        </Grommet>
          
      )
    }
}

const headerbar = {
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