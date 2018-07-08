import React, { Component } from 'react'
import { Grid, TextField } from '@material-ui/core';

import FormFragment from './FormFragment';
import Picker from './Picker';
import Merchandise from '../../models/Merchandise';

const dimensionValues = [
	[ 80, 120 ],
	[ 100, 120 ],
	[ 60, 80 ],
	[ 120, 120 ],
	[ 60, 20 ],
];

const defaultDimensionValueIndex = 0;

export default class MerchandiseFragment extends Component {
  constructor() {
    super();

    this.merchandise = new Merchandise(dimensionValues[defaultDimensionValueIndex]);
  }

  onUpdate(event) {
    this.merchandise[event.target.name] = event.target.value;
    this.props.onUpdate(this.merchandise);
  }

  render() {
    const { onUpdate } = this.props;

    return (
      <FormFragment title="Marchandise">
        <Grid container column spacing={16}>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              fullWidth
              onChange={(event) => this.onUpdate(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={16}>
              <Grid item xs={2}>
                <Picker
                  label="Dimension"
                  name="dimension"
                  values={dimensionValues}
                  defaultValueIndex={defaultDimensionValueIndex}
                  onChange={(event) => this.onUpdate(event)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Quantité"
                  name="quantity"
                  type="number"
                  step="1"
                  pattern="\d*"
                  onChange={(event) => this.onUpdate(event)}
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
                  onChange={(event) => this.onUpdate(event)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Poids total (kg)"
                  name="weight"
                  type="number"
                  step="1"
                  pattern="\d*"
                  onChange={(event) => this.onUpdate(event)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FormFragment>
    )
  }
}
