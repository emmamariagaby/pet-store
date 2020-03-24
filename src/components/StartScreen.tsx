import React from 'react';
import { Grommet, Button, Header, Menu, Main, Paragraph, Box, Image } from 'grommet';
import { Basket } from 'grommet-icons';
import ProductScreen from './ProductScreen'


/**
 * Start page of website
 */

class StartScreen extends React.Component{
  render() {
    return (
      <Grommet theme={header}>
        <div className="StartScreen">
          <Header background="brand">
            <Menu label="SHOP" items={[{ label: 'Petfood' }]} />
            <h1>pet store</h1>
            <Button icon={<Basket />} hoverIndicator />
          </Header>
          <Main pad="large">
            <h2>Petfood since 1999</h2>
            <Paragraph>Pet Store is a online store with high quality petfood for cats and dogs</Paragraph>
          </Main>
          <Box height="large" width="large">
            <Image
              fit="cover"
              src="petstore.jpg"
            />
          </Box>
          <ProductScreen />
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

export default StartScreen;
