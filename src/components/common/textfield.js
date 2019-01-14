import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class TextFields extends React.Component {
  state = {
    [this.props.id]: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <TextField
          id={this.props.id}
          label={this.props.label}
          required={this.props.required}
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange(this.props.id)}
          margin="normal"
      />
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);