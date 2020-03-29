import React from 'react';
import { Grommet, Header, Menu, Button, Main, Paragraph, Footer, Anchor } from 'grommet';
import { Basket, Phone, MailOption } from 'grommet-icons';

/**
 * Customer information page
 */

 class InformationScreen extends React.Component {
     render() {
         return (
            <Grommet theme={header}>
            <Header background="brand" pad="large">
            <Menu
            label='Menu'
            items={[
            { label: 'HOME', href: '/' },  
            { label: 'SHOP', href: 'ProductScreen' },
          ]}
        />
              <h1>pet store</h1>
              <Button href="CheckoutScreen" icon={<Basket />} />
            </Header>
            
            <Main pad="medium" justify="center" align="center">
              <h2>About Pet Store</h2>
              <Paragraph>Petfood since 1999. Pet Store is a online store with high quality petfood for cats and dogs.</Paragraph>
              <h2>Shipping and Delivery</h2>
              <Paragraph>We at Pet Store strive to always deliver a good experience to our customers. As a customer of Pet Store you can either choose delivery to nearest package agent representative or delivery home to your door.</Paragraph>
              <h2>Returns</h2>
              <Paragraph>Pet Store offers all customers open purchase and free returns for 30 days. We cannot return frozen goods as these thaws on the way back to our warehouse, so check an extra time that your order with frozen fresh food will be correct.</Paragraph>
              <h2>Methods of Payment</h2>
              <Paragraph>Swish <br></br> Card <br></br> Klarna</Paragraph>
              <h2>Customer service</h2>
              <Paragraph>
              We at Pet Store always do our best to help our customers. Do not hesitate to contact us by e-mail or telephone, if you have questions about your order. Pet Store's customer service is manned weekdays between 08:00 and 17:00. <br></br> <br></br> E-mail: info@petstore.se Telephone: 010-206 78 80</Paragraph>
              <h2>Contact</h2>
              <Paragraph><Button icon={<MailOption />} />info@petstore.se <br></br><Button icon={<Phone />} />010-206 78 80 <br></br> Phone manned weekdays between 08:00 and 17:00</Paragraph>
              <h2>Address</h2>
              <Paragraph>Pet Store AB<br></br>Herkulesgatan 7B <br></br>417 03 Göteborg</Paragraph>
              <h2>GDPR</h2>
              <Paragraph>Pet Store process personal data in order to nurture customer relationships, operating our business, making analysis and product development and online services and customer platforms. Pet Store may use information about where the user's device is located (location information) to provide parts of the service based on geographical location and to facilitate targeted advertising.</Paragraph>
            </Main>
            <Footer background="#DADADA" pad="small">
              <h5>Created by<br></br>emmamariagaby emmbla louisebackstrom @ github</h5>
              <Anchor href="InformationScreen" label="INFORMATION"/>
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

 export default InformationScreen;