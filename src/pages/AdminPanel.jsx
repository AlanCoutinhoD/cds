import { Box, Typography } from '@mui/material';
import ClientList from '../components/organisms/ClientList';

const AdminPanel = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ p: 3, pb: 0 }}>
              Panel de Administración
      </Typography>
      <ClientList />
    </Box>
  );
};

export default AdminPanel;