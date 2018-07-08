import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import { DatePicker } from 'material-ui-pickers';

import FormFragment from './FormFragment';

export default class DeliveryFragment extends Component {
  constructor() {
    super();

    this.state = {
      startDeliveryDate: null,
      endDeliveryDate: null
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
    const { startDeliveryDate, endDeliveryDate } = this.state;

    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
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
      </MuiPickersUtilsProvider>
    )
  }
}
