import React, { Component } from 'react'
import { FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';

const renderValue = (value) => (`${value[0]} x ${value[1]}cm`);

export default class Picker extends Component {
  constructor(props) {
    super();

    this.state = {
      value: null,
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
    this.props.onChange(event);
  }

  render() {
    const { name, label, values, defaultValueIndex } = this.props;
    const { value } = this.state;

    return (
      <FormControl>
      <InputLabel htmlFor="dimension">{label}</InputLabel>
      <Select
        name={name}
        value={value || values[defaultValueIndex]}
        renderValue={renderValue}
        onChange={(e) => { this.handleChange(e) }}>
        {
          values.map((value) => (
            <MenuItem key={renderValue(value)} value={value}>{renderValue(value)}</MenuItem>
          ))
        }
      </Select>
      </FormControl>
    );
  }
}

