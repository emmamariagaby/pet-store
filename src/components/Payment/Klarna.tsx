import React from 'react'
import { Form, FormField, TextInput, MaskedInput } from 'grommet'

export default function Klarna() {
    return (
        <Form>
            <FormField label="First Name" name="name" required={true}>
                <TextInput name="name" />
            </FormField>
            <FormField label="Last Name" name="LastName" required={true}>
                <TextInput name="LastName" />
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
            <FormField label="City" name="City" required={true}>
                <TextInput name="City" />
            </FormField>
            <FormField label="Adress" name="Adress" required={true}>
                <TextInput name="Adress" />
            </FormField>
            <FormField label="Postal Code" name="PostalCode" required={true}>
                <TextInput name="PostalCode" />
            </FormField>
        </Form>
    )
}
