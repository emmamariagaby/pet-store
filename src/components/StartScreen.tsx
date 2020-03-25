import React from 'react';
import { Grommet, Button, Header, Menu, Main, Paragraph, Box, Image, Footer, Anchor } from 'grommet';
import { Basket, Shop } from 'grommet-icons';
import image from '../assets/images/petstore.jpg';


/**
 * Start page of website
 */

class StartScreen extends React.Component {
  render() {
    return (
      <Grommet theme={header}>
          <Header background="brand" pad="large">
            <Button className="ButtonShop" icon={<Shop />} hoverIndicator onClick={() => alert('Petfood')} />
            <h1>pet store</h1>
            <Button icon={<Basket />} hoverIndicator onClick={() => alert('Your Basket')} />
          </Header>
          <Box width="large" height="large">
            <Image src={image} fit="cover" sizes='large'/>

          </Box>
          <Main pad="medium" justify="center" align="center">
            <h2>Petfood since 1999</h2>
            <Paragraph>Pet Store is a online store with high quality petfood for cats and dogs</Paragraph>
          </Main>
          <Footer background="#DADADA" pad="small">
                    <h5>Created by<br></br>emmamariagaby emmbla louisebackstrom @ github</h5>
                <Anchor label="INFORMATION" />
                </Footer>       
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

export default StartScreen;
