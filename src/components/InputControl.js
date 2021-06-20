import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const InputControl = ({ label, name, value, error=null, onChange, ...other }) => (
    <TextField 
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...other}
        {...(error && {error:true,helperText:error})}
    />
);

InputControl.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  other: PropTypes.object,
}

export default InputControl;