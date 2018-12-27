import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="container">
        Hello world!
        <Button variant="contained" color="primary">
          Click
        </Button>
      </div>
    );
  }
}

export default App;
