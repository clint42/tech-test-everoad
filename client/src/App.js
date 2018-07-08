import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import {  withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import CotationForm from './components/CotationForm';
import Summary from './components/Summary';
import Estimation from './components/Estimation';
import Merchandise from './models/Merchandise';

const styles = {
	root: {
		padding: 40,
	},
}

const isAddressesValid = (addresses) => (!!addresses.pickupAddress && !!addresses.deliveryAddress);

const isPickupValid = (dates) => (!!dates.startPickupDate && !! dates.endPickupDate);

const isDeliveryValid = (dates) => (!!dates.startDeliveryDate && !! dates.endDeliveryDate);

class App extends Component {
	constructor() {
		super();

		this.state = {
			addresses: {},
			merchandise: new Merchandise(),
			pickupDates: {},
			deliveryDates: {},
		}
	}

	onUpdateMerchandise(merchandise) {
		this.setState({
			merchandise,
		});
	}

	onUpdateAddresses(addresses) {
		this.setState({
			addresses,
		})
	}

	onUpdatePickup(pickupDates) {
		console.log(pickupDates);
		this.setState({
			pickupDates,
		});
	}

	onUpdateDelivery(deliveryDates) {
		this.setState({
			deliveryDates,
		});
	}

	render() {
		const { classes } = this.props;

		return (
				<Grid container spacing={32} className={classes.root}>
				<CssBaseline />
					<Grid item xs={9}>
						<CotationForm
							onUpdateAddresses={(addresses) => { this.onUpdateAddresses(addresses) }}
							onUpdateMerchandise={(merchandise) => { this.onUpdateMerchandise(merchandise) }}
							onUpdatePickup={(pickupDates) => { this.onUpdatePickup(pickupDates)}}
							onUpdateDelivery={ (deliveryDates) => { this.onUpdateDelivery(deliveryDates)} }
						/>
					</Grid>
					<Grid item xs={3}>
						<Grid container column spacing={32}>
							<Grid item xs={12}>
								<Summary
									isAddressValid={isAddressesValid(this.state.addresses)}
									isMerchandiseValid={this.state.merchandise.isValid}
									isPickupValid={isPickupValid(this.state.pickupDates)}
									isDeliveryValid={isDeliveryValid(this.state.deliveryDates)}
								/>
							</Grid>
							<Grid item xs={12}>
								<Estimation estimable={isAddressesValid(this.state.addresses) && this.state.merchandise.isValid && isPickupValid(this.state.pickupDates)} addresses={this.state.addresses} merchandise={this.state.merchandise} pickup={this.state.pickupDates} />
							</Grid>
						</Grid>
          </Grid>
				</Grid>
		);
	}
}

export default withStyles(styles)(App);
