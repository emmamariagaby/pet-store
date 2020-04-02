import React from 'react';
import { Button, Main, Footer, Anchor, Box, Grid } from 'grommet';
import { Phone, MailOption } from 'grommet-icons';
import { Link } from 'react-router-dom';

/**
 * Customer information page
 */

class InformationScreen extends React.Component {
  render() {
    return (
   <>
        <Main justify="center" align="center">
          <Grid
            columns={{
              count: 2,
              size: 'auto',
            }}
            gap="small"
          >
            <Box pad="large" background="white"><h2>About Pet Store</h2>Pet Store is a online store with high quality petfood for cats and dogs.</Box>
            <Box pad="large" background="white"><h2>Shipping and Delivery</h2>We at Pet Store strive to always deliver a good experience to our customers. As a customer of Pet Store you can either choose delivery to nearest package agent representative or delivery home to your door.</Box>
            <Box pad="large" background="white"><h2>Returns</h2>Pet Store offers all customers open purchase and free returns for 30 days. We cannot return frozen goods as these thaws on the way back to our warehouse, so check an extra time that your order with frozen fresh food will be correct.</Box>
            <Box pad="large" background="white"><h2>Methods of Payment</h2>Swish <br></br> Card <br></br> Klarna</Box>
            <Box pad="large" background="white"><h2>Customer service</h2>We at Pet Store always do our best to help our customers. Do not hesitate to contact us by e-mail or telephone, if you have questions about your order. Pet Store's customer service is manned weekdays between 08:00 and 17:00. <br></br> <br></br> E-mail: info@petstore.se Telephone: 010-206 78 80</Box>
            <Box pad="large" background="white"><h2>Contact</h2><Button icon={<MailOption />} />info@petstore.se <br></br><Button icon={<Phone />} />010-206 78 80 <br></br> Phone manned weekdays between 08:00 and 17:00</Box>
            <Box pad="large" background="white"><h2>Address</h2>Pet Store AB<br></br>Herkulesgatan 7B <br></br>417 03 Göteborg</Box>
            <Box pad="large" background="white"><h2>GDPR</h2>Pet Store process personal data in order to nurture customer relationships, operating our business, making analysis and product development and online services and customer platforms. Pet Store may use information about where the user's device is located (location information) to provide parts of the service based on geographical location and to facilitate targeted advertising.</Box>
          </Grid>
        </Main>
        <Footer background="#DADADA" pad="small">
          <h5>Created by<br></br>emmamariagaby emmbla louisebackstrom @ github</h5>
          <Link to='/InformationScreen'>
                        <Anchor>INFORMATION</Anchor>
                    </Link>  
        </Footer>
      </>
    )
  }
}

export default InformationScreen;