import React, { Component } from 'react'
import { withStyles, Paper, Typography } from '@material-ui/core';
import moment from 'moment';

import estimate from '../utils/estimationAlgo';

const styles = {
  root: {
    padding: 20,
  },
};

class Estimation extends Component {
  constructor() {
    super();

    this.state = {
      price: 0,
    };
  }

  componentWillReceiveProps(props) {
    const { addresses, merchandise, pickup, estimable } = props;

    if (estimable) {
      estimate(addresses, merchandise, pickup, (price) => {
        this.setState({
          price,
        });
      });
    } else {
      this.setState({
        price: 0,
      });
    }
  }
  render() {
    const { classes } = this.props;
    const { price } = this.state;

    return (
      <Paper className={classes.root}>
        <Typography variant="title">Estimation</Typography>
        <Typography variant="body2">{Math.round(price * 100) / 100}€</Typography>
      </Paper>
    )
  }
}

export default withStyles(styles)(Estimation);