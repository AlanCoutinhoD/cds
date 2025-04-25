import { Button as MuiButton } from '@mui/material';

const Button = ({ children, ...props }) => {
  return (
    <MuiButton
      fullWidth
      variant="contained"
      sx={{
        backgroundColor: '#000',
        '&:hover': {
          backgroundColor: '#333',
        },
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;