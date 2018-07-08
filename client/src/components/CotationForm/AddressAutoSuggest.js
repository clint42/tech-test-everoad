import React, { Component } from 'react'
import { Paper, MenuItem, TextField, withStyles } from '@material-ui/core';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
});

const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  const matches = match(suggestion.description, query);
  const parts = parse(suggestion.description, matches);

  return (
    <MenuItem value={suggestion} selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
              <strong key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </strong>
            );
        })}
      </div>
    </MenuItem>
  );
}

const renderSuggestionsContainer = (options) => {
  const { containerProps, children } = options;

  if (options.children === null) {
  return (<div></div>);
  }

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

const renderInput = inputProps => {
  console.log(inputProps);

  return (
  <TextField
    {...inputProps}
  />)
  }

class AddressAutoSuggest extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };

    this.autocompleteService = new window.google.maps.places.AutocompleteService();
  }

  onChange = (event, { newValue }) => {
    if (typeof newValue === 'string') {
      this.setState({
        value: newValue
      });
    } else {
      this.setState({
        value: newValue.description,
      });
      this.props.onChange(newValue);
    }
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested({ value }) {
    let request = {
      input: value,
      types: ['address'],
    };

    this.autocompleteService.getPlacePredictions(request, data => {
      this.setState({
        suggestions: data || []
      });
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { classes } = this.props;
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      value,
      onChange: this.onChange,
    };

    // Finally, render it!
    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        {...this.props}
        suggestions={suggestions}
        onSuggestionsFetchRequested={(input) => { this.onSuggestionsFetchRequested(input) }}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        renderInputComponent={(inputProps) => (
          <TextField
            label={this.props.label}
            fullWidth={this.props.fullWidth}
            {...inputProps}
          />
        )}
        renderSuggestionsContainer={renderSuggestionsContainer}
        focusInputOnSuggestionClick={false}
      />
    );
  }
}

export default withStyles(styles)(AddressAutoSuggest);