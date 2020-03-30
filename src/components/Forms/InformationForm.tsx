import React from 'react'
import { Grommet, Box, Form, FormField, TextInput, MaskedInput, grommet, Heading, Button } from 'grommet'
import { deepMerge } from 'grommet/utils';
import PaymentForm from '../Payment/PaymentForm';
import ShippingMethods from '../Shipping/ShippingMethods';

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
    const [lastName, setValue1] = React.useState(localStorage.getItem('LastName') || '');
    React.useEffect(() => {
        localStorage.setItem('LastName', lastName);
    }, [lastName]);
    const LastName = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue1(event.target.value);

    const [name, setValue2] = React.useState(localStorage.getItem('Name') || '');
    React.useEffect(() => {
        localStorage.setItem('Name', name);
    }, [name]);
    const Name = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue2(event.target.value);

    const [mobileNumber, setValue3] = React.useState(localStorage.getItem('MobileNumber') || '');
    React.useEffect(() => {
        localStorage.setItem('MobileNumber', mobileNumber);
    }, [mobileNumber]);
    const MobileNumber = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue3(event.target.value);

    const [email, setValue4] = React.useState(localStorage.getItem('Email') || '');
    React.useEffect(() => {
        localStorage.setItem('Email', email);
    }, [email]);
    const Email = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue4(event.target.value);

    const [country, setValue5] = React.useState(localStorage.getItem('Country') || '');
    React.useEffect(() => {
        localStorage.setItem('Country', country);
    }, [country]);
    const Country = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue5(event.target.value);

    const [city, setValue6] = React.useState(localStorage.getItem('City') || '');
    React.useEffect(() => {
        localStorage.setItem('City', city);
    }, [city]);
    const City = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue6(event.target.value);

    const [address, setValue7] = React.useState(localStorage.getItem('Address') || '');
    React.useEffect(() => {
        localStorage.setItem('Address', address);
    }, [address]);
    const Address = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue7(event.target.value);

    const [postalcode, setValue8] = React.useState(localStorage.getItem('PostalCode') || '');
    React.useEffect(() => {
        localStorage.setItem('PostalCode', postalcode);
    }, [postalcode]);
    const PostalCode = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue8(event.target.value);



    return (
        <Grommet full theme={deepMerge(grommet, customFormFieldTheme)}>
            <Box fill align="center" justify="center" margin={{ bottom: "xlarge" }} >
                <Box width="medium">
                    <Heading level={2} alignSelf="center">Your Information</Heading>
                    <Form>
                        <FormField label="First Name" name="name" required={true}>
                            <TextInput name="name" onChange={Name}/>
                        </FormField>
                        <FormField label="Last Name" name="LastName" required={true}>
                            <TextInput name="LastName" onChange={LastName}/>
                        </FormField>
                        <FormField label="Mobile Number" name="MobileNumber" required={true}>
                            <TextInput name="MobileNumber" onChange={MobileNumber}/>
                        </FormField>

                        <FormField label="Email" name="email" required={true} onChange={Email}>
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
                            <TextInput name="Country" onChange={Country}/>
                        </FormField>
                        <FormField label="City" name="City" required={true}>
                            <TextInput name="City" onChange={City}/>
                        </FormField>
                        <FormField label="Address" name="Address" required={true}>
                            <TextInput name="Address" onChange={Address}/>
                        </FormField>
                        <FormField label="Postal Code" name="PostalCode" required={true}>
                            <TextInput name="PostalCode" onChange={PostalCode}/>
                        </FormField>
                        <ShippingMethods />
                        <PaymentForm />

                    </Form>
                </Box>
            </Box>
        </Grommet>
    )
}
