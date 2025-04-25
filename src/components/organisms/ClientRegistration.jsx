import { Box, Typography } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LaptopIcon from '@mui/icons-material/Laptop';
import TabletIcon from '@mui/icons-material/Tablet';
import ClientForm from '../molecules/ClientForm';

const ClientRegistration = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3,
        maxWidth: 600,
        mx: 'auto',
        mt: 4
      }}
    >
      <Typography 
        variant="h4" 
        component="h1" 
        sx={{ 
          mb: 1,
          textAlign: 'center',
          width: '100%'
        }}
      >
        {/* Logo added here */}
        <img
          src="/images/cse-logo.jpg"
          alt="CSE Logo"
          style={{ height: 60, marginBottom: 16, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        />
        <span style={{ color: '#000' }}>BIENVENIDOS A</span>{' '}
        <span style={{ color: '#000' }}>CENTRO DE SOLUCIONES </span>{' '}
        <span style={{ color: '#1976d2' }}>DE COMPUTADORAS ELECTRONICAS</span>
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, color: 'text.secondary' }}>
        Reparación profesional de dispositivos electrónicos
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <PhoneAndroidIcon sx={{ fontSize: 40, color: '#1976d2' }} />
        <LaptopIcon sx={{ fontSize: 40, color: '#1976d2' }} />
        <TabletIcon sx={{ fontSize: 40, color: '#1976d2' }} />
      </Box>

      <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
        Registro de Cliente
      </Typography>
      
      <ClientForm />
    </Box>
  );
};

export default ClientRegistration;