import React from 'react'
import { Select, Paragraph, Form} from 'grommet'

export default function Klarna() {
    const [value, setValue] = React.useState('Välj betalsätt');
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
