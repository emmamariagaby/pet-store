import React from 'react'
import { Grommet, Box, Form, FormField, TextInput, MaskedInput, grommet, Heading, Button } from 'grommet'
import { deepMerge } from 'grommet/utils';
import PaymentForm from './PaymentForm';
import ShippingMethods from './ShippingMethods';

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
        error: {
            background: {
                color: "status-critical",
                opacity: "weak"
            }
        },
        margin: "none"
    }
};

export default function InformationForm() {
    const [value, setValue] = React.useState(localStorage.getItem('PhoneNumberInLocalStorage') || '');

    React.useEffect(() => {
        localStorage.setItem('PhoneNumberInLocalStorage', value);
    }, [value]);
    const onChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue(event.target.value);

    return (
        <Grommet full theme={deepMerge(grommet, customFormFieldTheme)}>
            <Box fill align="center" justify="center" margin={{ bottom: "xlarge" }} >
                <Box width="medium">
                    <Heading level={2} alignSelf="center">Your Information</Heading>
                    <Form>
                        <FormField label="First Name" name="name" required={true}>
                            <TextInput name="name" />
                        </FormField>
                        <FormField label="Last Name" name="LastName" required={true}>
                            <TextInput name="LastName" />
                        </FormField>
                        <FormField label="Mobile Number" name="Number" required={true}>
                            <TextInput name="Number" onChange={onChange} />
                        </FormField>

                        <FormField label="Email" name="email" required={true}>
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
                        <FormField label="Country" name="Country" required={true}>
                            <TextInput name="Country" />
                        </FormField>
                        <FormField label="City" name="City" required={true}>
                            <TextInput name="City" />
                        </FormField>
                        <FormField label="Adress" name="Adress" required={true}>
                            <TextInput name="Adress" />
                        </FormField>
                        <FormField label="Postal Code" name="PostalCode" required={true}>
                            <TextInput name="PostalCode" />
                        </FormField>
                        <ShippingMethods />
                        <PaymentForm />

                    </Form>
                </Box>
            </Box>
        </Grommet>
    )
}
