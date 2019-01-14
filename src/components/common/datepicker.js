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

function DatePicker(props) {
  const { classes } = props;

  return (
      <TextField
        id={props.id}
        label={props.label}
        defaultValue={props.defaultValue}
        required={props.required}
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
  );
}

DatePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePicker);