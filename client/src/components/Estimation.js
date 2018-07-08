import React, { Component } from 'react'
import { withStyles, Paper, Typography } from '@material-ui/core';
import moment from 'moment';

const styles = {
  root: {
    padding: 20,
  },
};

const calculateDistance = (origin, destination, callback) => {
  const distanceMatrixService = new window.google.maps.DistanceMatrixService();
  const request = {
    origins: [origin.description],
    destinations: [destination.description],
    travelMode: 'DRIVING',
  }

  distanceMatrixService.getDistanceMatrix(request, (response, status) => {
    if (response && response.rows.length > 0 && response.rows[0].elements.length > 0) {
      const distance = response.rows[0].elements[0].distance.value;
      callback(distance)
    }
  });
}

const estimate = (addresses, merchandise, pickup, callback) => {
  const a = merchandise.lengthInMeter * merchandise.widthInMeter * merchandise.quantity / 2.4;
  const b = merchandise.weightInTons / 1.84;
  const ldm = Math.max(a, b);
  const costPerKilometer = 10;
  calculateDistance(addresses.pickupAddress, addresses.deliveryAddress, (distance) => {
    const basePrice = ldm * (distance / 1000) * costPerKilometer
    const now = moment();
    const daysBeforePickup = pickup.startPickupDate.diff(now, 'days');
    const finalPrice = daysBeforePickup <= 5 ? basePrice * 1.2 : basePrice;
    callback(finalPrice);
  });
}

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