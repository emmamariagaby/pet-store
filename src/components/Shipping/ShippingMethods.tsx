import React from 'react'
import { Form, Box, Heading, Select } from 'grommet'
import Postnord from './postnord';
import Dhl from './dhl';
import Pickup from './pickup';


export default function ShippingMethods() {
    const [value, setValue] = React.useState('Shipping');
    React.useEffect(() => {
        localStorage.setItem('option', value);
    }, [value]);
    const option = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue(event.target.value);
    let post;

    if (value == 'Postnord') {
        post = <Postnord />
    }
    if (value == 'DHL') {
        post = <Dhl />
    }
    if (value == 'Fast Shipping DHL') {
        post = <Pickup />
    }

    return (
        <Form>
            <Box align="center" border={{ color: 'light-5', size: 'small' }} margin={{ top: "medium" }} pad={{ bottom: "medium" }}>
                <Heading level={2} alignSelf="center" margin={{ top: "xsmall" }} >Shipping</Heading>
                <Select
                    options={['Postnord', 'DHL', 'Fast Shipping DHL']}
                    value={value}
                    onChange={({ option }) => setValue(option)}
                />
                {post}
            </Box>
        </Form>
    );
}