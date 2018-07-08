import React, { Component } from 'react'
import { Grid } from '@material-ui/core';

import FormFragment from './FormFragment';
import AddressAutoSuggest from './AddressAutoSuggest';

export default class AddressesFragment extends Component {
  constructor() {
    super();

    this.state = {
      pickupAddress: null,
      deliveryAddress: null,
    };
  }

  onChangePickupAddress(pickupAddress) {
    this.setState({
      pickupAddress,
    })
    this.props.onUpdate({
      pickupAddress,
      deliveryAddress: this.state.deliveryAddress,
    })
  }

  onChangeDeliveryAddress(deliveryAddress) {
    this.setState({
      deliveryAddress,
    })
    this.props.onUpdate({
      pickupAddress: this.state.pickupAddress,
      deliveryAddress,
    })
  }

  render() {
    return (
      <FormFragment title="Adresses">
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <AddressAutoSuggest
              id="pickupAddress"
              label="Adresse de chargement"
              value={this.state.pickupAddress}
              fullWidth
              onChange={(value) => { this.onChangePickupAddress(value)}}
            />
          </Grid>
          <Grid item xs={6}>
            <AddressAutoSuggest
              id="deliveryAddress"
              label="Adresse de livraison"
              value={this.state.deliveryAddress}
              fullWidth
              onChange={(value => { this.onChangeDeliveryAddress(value)})}
            />
          </Grid>
        </Grid>
      </FormFragment>
    )
  }
}
