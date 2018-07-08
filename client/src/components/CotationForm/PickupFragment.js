import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import { DatePicker } from 'material-ui-pickers';

import FormFragment from './FormFragment';

export default class PickupFragment extends Component {
  constructor() {
    super();

    this.state = {
      startPickupDate: null,
      endPickupDate: null
    }
  }

  handleDateChange = (date, stateKey) => {
    this.setState({
      [stateKey]: date
    }, () => {
      this.props.onUpdate({
        ...this.state,
      });
    });
  }
  
  render() {
    const { startPickupDate, endPickupDate } = this.state;

    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
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
      </MuiPickersUtilsProvider>
    )
  }
}
