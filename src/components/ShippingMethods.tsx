import React from 'react'
import { Form, Box, Heading, Select } from 'grommet'

export default function ShippingMethods() {
    const [value, setValue] = React.useState('medium');

    if (value == 'Postnord') {
        alert('hiiii')
    }
    if (value == 'DHL') {
        alert('mdi')
    }
    if (value == 'Fast Shipping DHL') {
        alert('mdi')
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
            </Box>
        </Form>
    );
}