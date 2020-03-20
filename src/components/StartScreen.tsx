import React from 'react';
import { Grommet } from 'grommet';

/**
 * Start page of website
 */

class StartScreen extends React.Component {
  render() {
    return (
      <Grommet theme={theme}>
      <div className="StartScreen">
        <header className="Header">
        </header>
        </div>
        </Grommet>
    )
  }
}

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '48px',
      height: '20px',
    },
  },
};

export default StartScreen;
