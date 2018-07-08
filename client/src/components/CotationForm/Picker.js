import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';

export default class Picker extends Component {
  constructor() {
    super();

    this.state = {
      value: null,
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    console.log(this.state);
    const { name, label, values, defaultValue } = this.props;
    const { value } = this.state;

    return (
      <FormControl>
      <InputLabel htmlFor="dimension">{label}</InputLabel>
      <Select
        name={name}
        value={value || defaultValue.value}
        onChange={(e) => { this.handleChange(e) }}>
        {
          values.map((value) => (
            <MenuItem value={value.value}>{value.label}</MenuItem>
          ))
        }
      </Select>
      </FormControl>
    );
  }
}

