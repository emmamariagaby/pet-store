import React, { Component } from 'react'
import { Form, FormField, TextInput } from 'grommet'

export default function Swish() {
    const [value] = React.useState(localStorage.getItem('PhoneNumberInLocalStorage') || '');
    return (
        <Form>
            <FormField label="Mobile Number" name="Number" required={true}>
                <TextInput name="Number" value={value} />
            </FormField>
        </Form>
    )
}

