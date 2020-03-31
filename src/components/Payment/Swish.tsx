import React, { Component } from 'react'
import { Form, FormField, TextInput } from 'grommet'

export default function Swish() {
    const [swish, setValue9] = React.useState(localStorage.getItem('PaymentSwish') || '');
    React.useEffect(() => {
        localStorage.setItem('PaymentSwish', swish);
    }, [swish]);
    const PaymentSwish = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue9(event.target.value);

    return (
        <Form>
            <FormField label="Mobile Number" name="PaymentSwish" required={true}>
                <TextInput name="PaymentSwish" onChange={PaymentSwish}/>
            </FormField>
        </Form>
    )
}

