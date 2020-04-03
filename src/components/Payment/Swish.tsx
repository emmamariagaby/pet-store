import React from 'react'
import { FormField, TextInput } from 'grommet'

export default function Swish() {
    const [swish, setValue9] = React.useState(localStorage.getItem('Swish') || '');
    React.useEffect(() => {
        localStorage.setItem('Swish', swish);
    }, [swish]);
    const Swish = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue9(event.target.value);

    return (
        <FormField label="Mobile Number" name="Swish" required={true}>
            <TextInput name="Swish" onChange={Swish} />
        </FormField>
    )
}

