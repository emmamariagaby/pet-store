import React from 'react'
import { Grommet, Box, Form, FormField, TextInput, MaskedInput, Button, dark } from 'grommet'





export default class CheckOutForm extends React.Component {
    render() {
        return (
            <Grommet>
                <Box fill align="center" justify="center">
                    <Box width="medium">
                        <Form>
                            <FormField label="First Name" name="name" required>
                                <TextInput name="name" />
                            </FormField>
                            <FormField label="Last Name" name="LastName" required>
                                <TextInput name="LastName" />
                            </FormField>
                            <FormField label="Personal Identity Number" name="PersonalNumber" required>
                                <TextInput name="PersonalNumber" />
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
                            <Box direction="row" justify="between" margin={{ top: "medium" }}>
                                <Button label="Cancel" />
                                <Button type="reset" label="Reset" />
                                <Button type="submit" label="Update" primary />
                            </Box>
                        </Form>
                    </Box>
                </Box>
            </Grommet>
        )
    }

}
