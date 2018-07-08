import React, { Component } from 'react'
import { withStyles, Paper, Typography } from '@material-ui/core';
import cx from 'classnames';

const styles = {
  root: {
    padding: 20,
  },
  isValid: {
    color: 'green',
    fontWeight: 'bold',
  }
};

class Summary extends Component {
  render() {
    const { classes, isAddressValid, isMerchandiseValid, isPickupValid, isDeliveryValid  } = this.props;
    
    const addressesClass = cx({
      [classes.isValid]: isAddressValid
    });
    const merchandiseClass = cx({
      [classes.isValid]: isMerchandiseValid
    });
    const pickupClass = cx({
      [classes.isValid]: isPickupValid
    });
    const deliveryClass = cx({
      [classes.isValid]: isDeliveryValid
    });

    return (
      <Paper className={classes.root}>
        <Typography variant="title">Récapitulatif</Typography>
        <br/>
        <Typography variant="body2" className={addressesClass}>Adresses</Typography>
        <Typography variant="body2" className={merchandiseClass}>Marchandise</Typography>
        <Typography variant="body2" className={pickupClass}>Chargement</Typography>
        <Typography variant="body2" className={deliveryClass}>Livraison</Typography>
      </Paper>
    )
  }
}

export default withStyles(styles)(Summary);