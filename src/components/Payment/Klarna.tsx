import React from 'react'
import { Select, Paragraph, Form} from 'grommet'

export default function Klarna() {
    const [value, setValue] = React.useState('Välj betalsätt');
    React.useEffect(() => {
        localStorage.setItem('option', value);
    }, [value]);
    const option = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue(event.target.value);
    return (
<Form>
<Paragraph>Få först. Betala sen.</Paragraph>
      <Select
        options={['Betala inom 14 dagar', 'Betala i slutet av April', 'Månadsfaktura']}
        value={value}
        onChange={({ option }) => setValue(option)}
      />
      </Form>
    );
  }
