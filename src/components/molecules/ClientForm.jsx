import React, { useState } from 'react';
import { Box, Alert, Snackbar, MenuItem, TextField } from '@mui/material';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const mexicanStates = [
  'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas',
  'Chihuahua', 'Coahuila', 'Colima', 'Ciudad de México', 'Durango', 'Estado de México',
  'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Michoacán', 'Morelos', 'Nayarit',
  'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí',
  'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'
];

const ClientForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://dazzling-empathy-production-9a01.up.railway.app/api/clients/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.status === 201) {
        setIsSuccess(true);
        setFormData({ fullName: '', phone: '', email: '' });
      } else {
        setIsSuccess(false);
      }
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error:', error);
      setIsSuccess(false);
      setOpenSnackbar(true);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 400 }}>
      <Input
        label="Nombre Completo"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Ingresa tu nombre completo"
      />
      <Input
        label="Teléfono"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Ingresa tu número de teléfono"
      />
      <Input
        label="Correo Electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Ingresa tu correo electrónico"
      />
      <TextField
        select
        fullWidth
        label="Estado"
        name="state"
        value={formData.state}
        onChange={handleChange}
        sx={{ mb: 2 }}
      >
        <MenuItem value="">
          <em>Selecciona un estado</em>
        </MenuItem>
        {mexicanStates.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit">
        Registrar
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert 
          onClose={() => setOpenSnackbar(false)} 
          severity={isSuccess ? "success" : "error"}
          sx={{ width: '100%' }}
        >
          {isSuccess 
            ? "Cliente registrado exitosamente" 
            : "Error al registrar el cliente"}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ClientForm;