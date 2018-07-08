import React, { Component } from 'react'
import { withStyles, Paper, Typography } from '@material-ui/core';

const styles = {
  root: {
    padding: 20,
  },
};

const estimate = () => {

}

class Estimation extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Typography variant="title">Estimation</Typography>
      </Paper>
    )
  }
}

export default withStyles(styles)(Estimation);