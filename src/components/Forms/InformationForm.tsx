import React from 'react'
import { useHistory } from "react-router-dom";

import { Box, Button, Grommet, Form, FormField, TextInput } from 'grommet'
import { grommet } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'
import PaymentForm from '../Payment/PaymentForm'
import ShippingMethods from '../Shipping/ShippingMethods'

const customFormFieldTheme = {
  global: {
    font: {
      size: '16px',
    },
    input: {
      weight: 400,
    },
  },
  formField: {
    label: {
      color: 'dark-3',
      size: 'small',
      margin: 'xsmall',
      weight: 600,
    },
    border: {
      side: 'all',
    },
    disabled: {
      background: {
        color: 'status-disabled',
        opacity: true,
      },
    },
    error: {
      background: {
        color: 'status-critical',
        opacity: 'weak',
      },
    },
    margin: 'none',
  },
}

export default function App() {
  const [lastName, setValue1] = React.useState(
    localStorage.getItem('LastName') || ''
  )
  React.useEffect(() => {
    localStorage.setItem('LastName', lastName)
  }, [lastName])
  const LastName = (event: {
    target: { value: React.SetStateAction<string> }
  }) => setValue1(event.target.value)

  const [name, setValue2] = React.useState(localStorage.getItem('Name') || '')
  React.useEffect(() => {
    localStorage.setItem('Name', name)
  }, [name])
  const Name = (event: { target: { value: React.SetStateAction<string> } }) =>
    setValue2(event.target.value)

  const [mobileNumber, setValue3] = React.useState(
    localStorage.getItem('MobileNumber') || ''
  )
  React.useEffect(() => {
    localStorage.setItem('MobileNumber', mobileNumber)
  }, [mobileNumber])
  const MobileNumber = (event: {
    target: { value: React.SetStateAction<string> }
  }) => setValue3(event.target.value)

  const [email, setValue4] = React.useState(localStorage.getItem('Email') || '')
  React.useEffect(() => {
    localStorage.setItem('Email', email)
  }, [email])
  const Email = (event: { target: { value: React.SetStateAction<string> } }) =>
    setValue4(event.target.value)

  const [country, setValue5] = React.useState(
    localStorage.getItem('Country') || ''
  )
  React.useEffect(() => {
    localStorage.setItem('Country', country)
  }, [country])
  const Country = (event: {
    target: { value: React.SetStateAction<string> }
  }) => setValue5(event.target.value)

  const [city, setValue6] = React.useState(localStorage.getItem('City') || '')
  React.useEffect(() => {
    localStorage.setItem('City', city)
  }, [city])
  const City = (event: { target: { value: React.SetStateAction<string> } }) =>
    setValue6(event.target.value)

  const [address, setValue7] = React.useState(
    localStorage.getItem('Address') || ''
  )
  React.useEffect(() => {
    localStorage.setItem('Address', address)
  }, [address])
  const Address = (event: {
    target: { value: React.SetStateAction<string> }
  }) => setValue7(event.target.value)

  const [postalcode, setValue8] = React.useState(
    localStorage.getItem('PostalCode') || ''
  )
  React.useEffect(() => {
    localStorage.setItem('PostalCode', postalcode)
  }, [postalcode])
  const PostalCode = (event: {
    target: { value: React.SetStateAction<string> }
  }) => setValue8(event.target.value)

  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<Element>) => {
    event.preventDefault();

    const promise = new Promise(resolve => {
      setTimeout(() => {
          resolve()
      }, 2000)
  })
    promise.then(() => {
      history.push("./OrderConfirmation")
      return
  })
    
  }

  return (
    <Grommet theme={deepMerge(grommet, customFormFieldTheme)}>
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form validate="blur" onSubmit={handleSubmit}>
            <FormField label="Name" name="name" required>
              <TextInput name="name" type="name" onChange={Name} required />
            </FormField>

            <FormField label="Last Name" name="lastname" required>
              <TextInput
                name="lastname"
                type="lastname"
                onChange={LastName}
                required
              />
            </FormField>

            <FormField label="Number" name="tel" required>
              <TextInput
                name="tel"
                type="tel"
                onChange={MobileNumber}
                pattern="^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$"
                required
              />
            </FormField>

            <FormField label="Email" name="email" required>
              <TextInput name="email" onChange={Email} type="email" required />
            </FormField>

            <FormField label="Adress" name="adress" required>
              <TextInput
                name="adress"
                type="adress"
                onChange={Address}
                required
              />
            </FormField>

            <FormField label="Zip" name="Zip" required>
              <TextInput
                name="Zip"
                type="Zip"
                onChange={PostalCode}
                pattern="^(s-|S-){0,1}[0-9]{3}\s?[0-9]{2}$"
                required
              />
            </FormField>

            <FormField label="City" name="city" required>
              <TextInput name="city" type="city" onChange={City} required />
            </FormField>

            <FormField label="Country" name="country" required>
              <TextInput
                name="country"
                onChange={Country}
                type="country"
                required
              />
            </FormField>
            <ShippingMethods />
            <PaymentForm />

            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
              <Button type="submit" label="Create Order" primary />
            </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  )
}
