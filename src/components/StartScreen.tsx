import React from 'react';
import { Grommet, Button, Header, Menu, Main, Paragraph, Box, Image, Footer, Anchor } from 'grommet';
import { Shop, } from 'grommet-icons';
import image from '../assets/images/petstore.jpg';
import { Link } from 'react-router-dom';


/**
 * Start page of website
 */

class StartScreen extends React.Component {
  render() {
    return (
      <Grommet theme={header}>
        <Header background="brand" pad="large">
          <Menu
            label='Menu'
            items={[
              { label: 'SHOP', href: 'ProductScreen' }
            ]}
          />
          <h1>pet store</h1>
          <Link to='/ProductScreen'>
            <Button icon={<Shop />} />
          </Link>
        </Header>

        <Box pad="small" justify="center" align="center">
          <Image
            fit="contain"
            alignSelf="center"
            src={image}
          />
        </Box>
        <Main pad="medium" justify="center" align="center">
          <h2>Petfood since 1999</h2>
          <Paragraph>Pet Store is a online store with high quality petfood for cats and dogs</Paragraph>
        </Main>
        <br></br><br></br>

        <Footer background="#DADADA" pad="small">
          <h5>Created by<br></br>emmamariagaby emmbla louisebackstrom @ github</h5>
          <Link to='/InformationScreen'>
                        <Anchor>INFORMATION</Anchor>
                    </Link>  
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
