import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TextField,
  Typography,
  CircularProgress,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Button as MuiButton } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DeleteIcon from '@mui/icons-material/Delete';
import { 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Alert
} from '@mui/material';
import * as XLSX from 'xlsx';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  // Add these new state declarations
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const fetchClients = async (search = '') => {
    setLoading(true);
    try {
      const url = search 
        ? `https://dazzling-empathy-production-9a01.up.railway.app/api/clients/search?search=${encodeURIComponent(search)}`
        : 'https://dazzling-empathy-production-9a01.up.railway.app/api/clients';
      
      const response = await fetch(url);
      const result = await response.json();
      if (result.success) {
        setClients(result.data);
      }
    } catch (error) {
      console.error('Error fetching clients:', error);
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleSearch = () => {
    fetchClients(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleUseCoupon = async (id) => {
    try {
      const response = await fetch(`https://dazzling-empathy-production-9a01.up.railway.app/api/clients/use-coupon/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.status === 200) {
        await fetchClients(searchTerm);
        setSnackbarMessage('Cupón utilizado exitosamente');
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error('Error updating coupon:', error);
    }
  };

  const handleDeleteClick = (client) => {
    setSelectedClient(client);
    setOpenDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (selectedClient) {
      try {
        const response = await fetch(`https://dazzling-empathy-production-9a01.up.railway.app/api/clients/delete/${selectedClient.id}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          await fetchClients(searchTerm);
          setSnackbarMessage('Cliente eliminado exitosamente');
          setOpenSnackbar(true);
        }
      } catch (error) {
        console.error('Error deleting client:', error);
      }
    }
    setOpenDialog(false);
  };

  const handleExportToExcel = () => {
    const exportData = clients.map(client => ({
      'Nombre Completo': client.full_name,
      'Correo': client.email,
      'Teléfono': client.phone,
      'Estado': client.state,
      'Fecha de Registro': new Date(client.created_at).toLocaleDateString('es-ES'),
      'Estado del Cupón': client.used ? 'Utilizado' : 'No utilizado'
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Clientes');
    XLSX.writeFile(wb, 'lista_clientes.xlsx');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <TextField
          fullWidth
          placeholder="Buscar cliente por nombre, email o teléfono..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          onClick={handleSearch}
          sx={{ minWidth: '120px' }}
        >
          Buscar
        </Button>
        <Button
          variant="outlined"
          startIcon={<FileDownloadIcon />}
          onClick={handleExportToExcel}
          sx={{ minWidth: '120px' }}
        >
          Exportar Excel
        </Button>
      </Box>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cliente</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Fecha de Registro</TableCell>
              <TableCell>Cupón</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>
                  <Typography>{client.full_name}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {client.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PhoneAndroidIcon fontSize="small" />
                    {client.phone}
                  </Box>
                </TableCell>
                <TableCell>{client.state}</TableCell>
                <TableCell>
                  {new Date(client.created_at).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      backgroundColor: client.used ? '#e8f5e9' : '#fff3e0',
                      color: client.used ? '#2e7d32' : '#e65100',
                      borderRadius: 1,
                      px: 1,
                      py: 0.5,
                      display: 'inline-block',
                    }}
                  >
                    {client.used ? 'Utilizado' : 'No utilizado'}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {!client.used && (
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<LocalOfferIcon />}
                        onClick={() => handleUseCoupon(client.id)}
                        sx={{ color: '#e65100', borderColor: '#e65100' }}
                      >
                        Usar Cupón
                      </Button>
                    )}
                    
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDeleteClick(client)}
                      sx={{ color: '#d32f2f', borderColor: '#d32f2f' }}
                    >
                      Eliminar
                    </Button>
                    
                    {/* Add these at the end of the return statement */}
                    <Dialog
                      open={openDialog}
                      onClose={() => setOpenDialog(false)}
                    >
                      <DialogTitle>Confirmar eliminación</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          ¿Está seguro que desea eliminar al cliente {selectedClient?.full_name}?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={() => setOpenDialog(false)} color="primary">
                          Cancelar
                        </Button>
                        <Button onClick={handleDeleteConfirm} color="error" autoFocus>
                          Eliminar
                        </Button>
                      </DialogActions>
                    </Dialog>
                    
                    <Snackbar
                      open={openSnackbar}
                      autoHideDuration={6000}
                      onClose={() => setOpenSnackbar(false)}
                    >
                      <Alert 
                        onClose={() => setOpenSnackbar(false)} 
                        severity="success"
                        sx={{ width: '100%' }}
                      >
                        {snackbarMessage}
                      </Alert>
                    </Snackbar>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ClientList;