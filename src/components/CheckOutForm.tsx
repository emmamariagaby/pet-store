import React, { useState } from 'react'
import { Grommet, Box, Form, FormField, TextInput, MaskedInput, Button, grommet, Heading, RadioButtonGroup } from 'grommet'
import { deepMerge } from 'grommet/utils';


const customFormFieldTheme = {
    global: {
        font: {
            size: "16px"
        },
        input: {
            weight: 400
        }
    },
    formField: {
        label: {
            color: "dark-3",
            size: "small",
            margin: "xsmall",
            weight: 600
        },
        border: {
            side: "all"
        },
        disabled: {
            background: {
                color: "status-disabled",
                opacity: true
            }
        },
        content: {
            // pad: "small",
        },
        error: {
            background: {
                color: "status-critical",
                opacity: "weak"
            }
        },
        margin: "none"
    }
};

function CreateOrder() {
    setTimeout(function () { alert("Your order is done"); }, 2000);

}
export default class CheckOutForm extends React.Component {
    render() {
        return (
            <Grommet full theme={deepMerge(grommet, customFormFieldTheme)}>
                <Box fill align="center" justify="center" margin={{ bottom: "xlarge" }} >
                    <Box width="medium">
                        <Heading level={2} alignSelf="center">Your Information</Heading>
                        <Form>
                            <FormField label="First Name" name="name" required>
                                <TextInput name="name" />
                            </FormField>
                            <FormField label="Last Name" name="LastName" required>
                                <TextInput name="LastName" />
                            </FormField>
                            <FormField label="Mobile Number" name="Number" required>
                                <TextInput name="Number" />
                            </FormField>

                            <FormField label="Email" name="email" required>
                                <MaskedInput
                                    name="email"
                                    mask={[
                                        { regexp: /^[\w\-_.]+$/, placeholder: "example" },
                                        { fixed: "@" },
                                        { regexp: /^[\w]+$/, placeholder: "my" },
                                        { fixed: "." },
                                        { regexp: /^[\w]+$/, placeholder: "com" }
                                    ]}
                                />
                            </FormField>
                            <FormField label="Country" name="Country" required>
                                <TextInput name="Country" />
                            </FormField>
                            <FormField label="City" name="City" required>
                                <TextInput name="City" />
                            </FormField>
                            <FormField label="Adress" name="Adress" required>
                                <TextInput name="Adress" />
                            </FormField>
                            <FormField label="Postal Code" name="PostalCode" required>
                                <TextInput name="PostalCode" />
                            </FormField>
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
                    </Box>
                </Box>
            </Grommet>
        )
    }

}
