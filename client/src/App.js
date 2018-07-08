import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div style={{padding:20}}>
        <Grid container>
          <Grid item xs={8}>
            Form placeholder
          </Grid>
          <Grid item xs={4}>
            Summary + Price placeholder
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
