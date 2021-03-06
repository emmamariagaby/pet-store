import React from 'react'
import { FormField, TextInput } from 'grommet'

export default function Card() {
 
        const [name, setValue10] = React.useState(localStorage.getItem('CardName') || '');
    React.useEffect(() => {
        localStorage.setItem('CardName', name);
    }, [name]);
    const CardName = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue10(event.target.value);

    const [lastname, setValue11] = React.useState(localStorage.getItem('CardLastName') || '');
    React.useEffect(() => {
        localStorage.setItem('CardLastName', lastname);
    }, [lastname]);
    const CardLastName = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue11(event.target.value);

    const [cardnumber, setValue12] = React.useState(localStorage.getItem('CardNumber') || '');
    React.useEffect(() => {
        localStorage.setItem('CardNumber', cardnumber);
    }, [cardnumber]);
    const CardNumber = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue12(event.target.value);

    const [expires, setValue13] = React.useState(localStorage.getItem('CardExpires') || '');
    React.useEffect(() => {
        localStorage.setItem('CardExpires', expires);
    }, [expires]);
    const CardExpires = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue13(event.target.value);

    const [cvc, setValue14] = React.useState(localStorage.getItem('CardCVVCVC') || '');
    React.useEffect(() => {
        localStorage.setItem('CardCVVCVC', cvc);
    }, [cvc]);
    const CardCVVCVC = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue14(event.target.value);

        return (
            <>
                <FormField label="First Name" name="PaymentCardName" required={true}>
                    <TextInput name="PaymentCardName" onChange={CardName}/>
                </FormField>
                <FormField label="Last Name" name="PaymentCardLastName" required={true}>
                    <TextInput name="PaymentCardLastName" onChange={CardLastName}/>
                </FormField>
                <FormField label="Card Number" name="CardNumber" required={true}>
                    <TextInput name="CardNumber" onChange={CardNumber}/>
                </FormField>
                <FormField label="Expires on" name="Expires" required={true}>
                    <TextInput name="Expires" onChange={CardExpires}/>
                </FormField>
                <FormField label="CVV/CVC" name="CVC/CVV" required={true}>
                    <TextInput name="CVC/CVV" onChange={CardCVVCVC}/>
                </FormField>
            </>
        )
    }

