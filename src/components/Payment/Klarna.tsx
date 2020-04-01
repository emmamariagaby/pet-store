import React from 'react'
import { Paragraph, Form, CheckBox} from 'grommet'


export default function Klarna() {
    const [value, setValue20] = React.useState(localStorage.getItem('Klarna') || 'Betala inom 14 dagar');
    React.useEffect(() => {
        localStorage.setItem('Klarna', value);
    }, [value]);
    const Klarna = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue20(event.target.value);
    
  return (
    <Form>
        <Paragraph>Få först. Betala sen.</Paragraph>
    <CheckBox
      checked={true}
      value={value}
      label="Betala inom 14 dagar"
      onChange={Klarna}
    />
    </Form>

  )


//    const [valuevalue, setValueValue] = React.useState('Välj betalsätt');
//     React.useEffect(() => {
//         localStorage.setItem('option', valuevalue);
//     }, [valuevalue]);
//     const object = (event: { target: { value: React.SetStateAction<string>; }; }) => setValueValue(event.target.value);
//     return (
// <Form>
// <Paragraph>Få först. Betala sen.</Paragraph>
//       <Select
//         options={['Betala inom 14 dagar', 'Betala i slutet av April', 'Månadsfaktura']}
//         value={valuevalue}
//         onChange={({ option }) => setValueValue(option)}
//       />
//       </Form>
//     );
  }
