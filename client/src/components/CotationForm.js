import React, { Component } from 'react'
import { Grid, Paper, TextField, Select, MenuItem } from '@material-ui/core';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import { DatePicker } from 'material-ui-pickers';
import moment from 'moment';

import FormFragment from './CotationForm/FormFragment';
import AddressesFragment from './CotationForm/AddressesFragment';
import MerchandiseFragment from './CotationForm/MerchandiseFragment';
import PickupFragment from './CotationForm/PickupFragment';
import DeliveryFragment from './CotationForm/DeliveryFragment';

import Merchandise from '../models/Merchandise'

export default class CotationForm extends Component {
	render() {
		const { onUpdateMerchandise, onUpdateAddresses, onUpdatePickup, onUpdateDelivery } = this.props;

		return (
			<form>
				<MuiPickersUtilsProvider utils={MomentUtils}>
					<Grid container direction="column" spacing={32}>
						<Grid item>
							<AddressesFragment onUpdate={onUpdateAddresses} />
						</Grid>
						<Grid item>
							<MerchandiseFragment onUpdate={onUpdateMerchandise} />
						</Grid>
						<Grid item>
							<PickupFragment onUpdate={onUpdatePickup} />
						</Grid>
						<Grid item>
							<DeliveryFragment onUpdate={onUpdateDelivery} />
						</Grid>
					</Grid>
				</MuiPickersUtilsProvider>
			</form>
		)
	}
}