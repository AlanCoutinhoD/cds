import { TextField } from '@mui/material';

const Input = ({ label, type = 'text', value, onChange, placeholder, name }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      sx={{ mb: 2 }}
    />
  );
};

export default Input;