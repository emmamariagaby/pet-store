import React from 'react'
import { Form, Box, Heading, Select } from 'grommet'
import Postnord from './postnord';
import Dhl from './dhl';
import Pickup from './pickup';


export default function ShippingMethods() {
    const [value, setValue] = React.useState('Postnord');
    React.useEffect(() => {
        localStorage.setItem('option', value);
    }, [value]);
    const option = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue(event.target.value);
    let post;

    if (value == 'Postnord') {
        post = <Postnord cost={'Shipping: 29 kr'} />
    }
    if (value == 'DHL') {
        post = <Dhl cost={'Shipping: 99 kr'} />
    }
    if (value == 'Pickup') {
        post = <Pickup cost={'Shipping: 0 kr'} />
    }

    return (
        <Box align="center" border={{ color: 'light-5', size: 'small' }} margin={{ top: "medium" }} pad={"medium"}>
            <Heading defaultChecked={true} level={2} alignSelf="center" margin={{ top: "xsmall" }} >Shipping</Heading>
            <Select
                options={['Postnord', 'DHL', 'Pickup']}
                value={value}
                onChange={({ option }) => setValue(option)}
            />
            {post}
        </Box>
    );
}