import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import {  withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import CotationForm from './components/CotationForm';

const styles = {
	root: {
		padding: 40,
	},
}

class App extends Component {
	render() {
		const { classes } = this.props;

		return (
				<Grid container spacing={32} className={classes.root}>
				<CssBaseline />
					<Grid item xs={9}>
						<CotationForm />
					</Grid>
					<Grid item xs={3}>
						Summary + Price placeholder
          </Grid>
				</Grid>
		);
	}
}

export default withStyles(styles)(App);
