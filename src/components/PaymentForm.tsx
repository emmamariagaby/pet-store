import React from 'react'
import { Form, Box, Button, RadioButtonGroup, Heading } from 'grommet'

function CreateOrder() {
    setTimeout(function () { alert("Your order is done"); }, 2000);
}

export default class PaymentForm extends React.Component {
    render() {
        return (
            <Form>
                <Box align="center" border={{ color: 'light-5', size: 'small' }} margin={{ top: "medium" }} pad={{ bottom: "medium" }}>
                    <Heading level={2} alignSelf="center" margin={{ top: "xsmall" }} >Payment Method</Heading>
                    <RadioButtonGroup
                        name="doc"
                        options={['Swish', 'Card', 'Klarna']}
                    />
                </Box>
                <Box direction="row" justify="between" margin={{ top: "medium" }}>
                    <Button type="reset" label="Reset" />
                    <Button onClick={CreateOrder} type="submit" label="Next" primary />
                </Box>
            </Form>
        )
    }
}
