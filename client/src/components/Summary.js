import React, { Component } from 'react'
import { withStyles, Paper, Typography } from '@material-ui/core';

const styles = {
  root: {
    padding: 20,
  },
};

class Summary extends Component {
  render() {
    const { classes, isAddressesValid, isMerchandiseValid, isPickupValid, isDeliveryValid  } = this.props;
    return (
      <Paper className={classes.root}>
        <Typography variant="title">Récapitulatif</Typography>
        <br/>
        <Typography variant="body2">Adresses</Typography>
        <Typography variant="body2">Marchandise</Typography>
        <Typography variant="body2">Chargement</Typography>
        <Typography variant="body2">Livraison</Typography>
      </Paper>
    )
  }
}

export default withStyles(styles)(Summary);