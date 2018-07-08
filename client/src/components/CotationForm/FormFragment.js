import React, { Component } from 'react'
import { WithStyles, Grid, Typography, Paper, withStyles } from '@material-ui/core';
import { withState } from 'recompose';

const styles = theme => ({
	// Name of the component ⚛️ / style sheet
	paper: { // Name of the rule
		padding: 20, // Some CSS
	},
});

class FormFragment extends Component {
	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.paper}>
				<Typography variant="title">{this.props.title}</Typography><br />
				{this.props.children}
			</Paper>
		)
	}
}

export default withStyles(styles)(FormFragment);