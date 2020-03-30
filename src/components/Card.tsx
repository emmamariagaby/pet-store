import React, { Component } from 'react'
import { Form, FormField, TextInput } from 'grommet'

export default class Card extends Component {
    render() {
        return (
            <Form>
                <FormField label="First Name" name=" First Name" required={true}>
                    <TextInput name="First Name" />
                </FormField>
                <FormField label="Last Name" name="LastName" required={true}>
                    <TextInput name="LastName" />
                </FormField>
                <FormField label="Card Number" name="Card Number" required={true}>
                    <TextInput name="Card Number" />
                </FormField>
                <FormField label="Expires on" name="Expires" required={true}>
                    <TextInput name="Expires" />
                </FormField>
                <FormField label="CVV/CVC" name="CVC/CVV" required={true}>
                    <TextInput name="CVC/CVV" />
                </FormField>
            </Form>
        )
    }
}
