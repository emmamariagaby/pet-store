import React from 'react';
import { Main, Paragraph, Box, Image, Footer, Anchor } from 'grommet';
import image from '../assets/images/petstore.jpg';
import { Link } from 'react-router-dom';
import { HeaderBar } from '../HeaderBar'


/**
 * Start page of website
 */

class StartScreen extends React.Component {
  render() {
    return (
      <HeaderBar>
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
      </HeaderBar>
    )
  }
}

export default StartScreen;
