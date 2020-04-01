import React from 'react'
import { Form, Box, Heading, Select } from 'grommet'
import postnord from './postnord';
import Postnord from './postnord';
import Dhl from './dhl';
import Pickup from './pickup';


export default function ShippingMethods() {
    const [value, setValue] = React.useState('Shipping');
    let post;

    if (value == 'Postnord') {
        post = <Postnord cost={'49 kr'} />
    }
    if (value == 'DHL') {
        post = <Dhl cost={'29 kr'} />
    }
    if (value == 'Pickup') {
        post = <Pickup cost={'0 kr'} />
    }

    return (
        <Form>
            <Box align="center" border={{ color: 'light-5', size: 'small' }} margin={{ top: "medium" }} pad={{ bottom: "medium" }}>
                <Heading level={2} alignSelf="center" margin={{ top: "xsmall" }} >Shipping</Heading>
                <Select
                    options={['Postnord', 'DHL', 'Pickup']}
                    value={value}
                    onChange={({ option }) => setValue(option)}
                />
                {post}
            </Box>
        </Form>
    );
}