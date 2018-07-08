import React, { Component } from 'react'
import { Grid, Paper, TextField, Select, MenuItem } from '@material-ui/core';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import { DatePicker } from 'material-ui-pickers';
import moment from 'moment';

import FormFragment from './CotationForm/FormFragment';
import AddressAutoSuggest from './CotationForm/AddressAutoSuggest';
import Picker from './CotationForm/Picker';

const dimensionValues = [
	{ value: "80 x 120cm", label: '80 x 120cm' },
	{ value: "100 x 120cm", label: '100 x 120cm' },
	{ value: "60 x 80cm", label: '60 x 80cm' },
	{ value: "120 x 120cm", label: '120 x 120cm' },
	{ value: "60 x 100cm", label: '60 x 100cm' },
];

export default class CotationForm extends Component {
	constructor() {
		super();

		this.state = {
			loadingAddress: '',
			deliveryAddress: '',
			startPickupDate: null,
			endPickupDate: null,
			startDeliveryDate: null,
			endDeliveryDate: null,
		};
	}

	handleDateChange = (date, stateKey) => {
		console.log(date);
    this.setState({ [stateKey]: date });
	}
	
	render() {
		const { startPickupDate, endPickupDate, startDeliveryDate, endDeliveryDate } = this.state;

		return (
			<form>
				<MuiPickersUtilsProvider utils={MomentUtils}>
				<Grid container direction="column" spacing={32}>
					<Grid item>
						<FormFragment title="Adresses">
							<Grid container spacing={16}>
								<Grid item xs={6}>
									<AddressAutoSuggest
										id="loadingAddress"
										label="Adresse de chargement"
										value={this.state.loadingAddress}
										fullWidth
									/>
								</Grid>
								<Grid item xs={6}>
									<AddressAutoSuggest
										id="deliveryAddress"
										label="Adresse de livraison"
										value={this.state.deliveryAddress}
										fullWidth
									/>
								</Grid>
							</Grid>
						</FormFragment>
					</Grid>
					<Grid item>
						<Paper>
							<FormFragment title="Marchandise">
								<Grid container column spacing={16}>
									<Grid item xs={12}>
										<TextField
											label="Description"
											name="description"
											fullWidth
										/>
									</Grid>
									<Grid item xs={12}>
										<Grid container spacing={16}>
											<Grid item xs={2}>
												<Picker label="Dimension" name="dimension" values={dimensionValues} defaultValue={dimensionValues[0]} />
											</Grid>
											<Grid item xs={3}>
												<TextField
													label="Quantité"
													name="quantity"
													type="number"
													step="1"
													pattern="\d*"
												/>
											</Grid>
											<Grid item xs={4}>
												<TextField
													label="Hauteur maximale (cm)"
													name="maxHeight"
													type="number"
													step="1"
													pattern="\d*"
													fullWidth
												/>
											</Grid>
											<Grid item xs={2}>
												<TextField
													label="Poids total (kg)"
													name="quantity"
													type="number"
													step="1"
													pattern="\d*"
												/>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</FormFragment>
						</Paper>
					</Grid>
					<Grid item>
						<FormFragment title="Chargement">
							<Grid container spacing={16}>
								<Grid item xs={6}>
									<DatePicker
										fullWidth
										autoOk
										label="À partir du"
										name="startPickupDate"
										value={startPickupDate}
										onChange={(date) => { this.handleDateChange(date, "startPickupDate") }}
										maxDate={endPickupDate}
									/>
								</Grid>
								<Grid item xs={6}>
									<DatePicker
										fullWidth
										autoOk
										label="jusqu'au"
										name="endPickupDate"
										value={endPickupDate}
										onChange={(date) => { this.handleDateChange(date, "endPickupDate") }}
										minDate={startPickupDate}
									/>
								</Grid>
							</Grid>
						</FormFragment>
					</Grid>
					<Grid item>
						<FormFragment title="Livraison">
							<Grid container spacing={16}>
								<Grid item xs={6}>
									<DatePicker
										fullWidth
										autoOk
										label="À partir du"
										name="startDeliveryDate"
										value={startDeliveryDate}
										onChange={(date) => { this.handleDateChange(date, "startDeliveryDate") }}
										maxDate={endDeliveryDate}
									/>
								</Grid>
								<Grid item xs={6}>
									<DatePicker
										fullWidth
										autoOk
										label="jusqu'au"
										name="endDeliveryDate"
										value={endDeliveryDate}
										onChange={(date) => { this.handleDateChange(date, "endDeliveryDate") }}
										minDate={startDeliveryDate}
									/>
								</Grid>
							</Grid>
						</FormFragment>
					</Grid>
				</Grid>
				</MuiPickersUtilsProvider>
			</form>
		)
	}
}