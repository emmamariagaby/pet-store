import React from 'react';
import { Grommet } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '48px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div>
      </Grommet>
  );
}

export default App;
