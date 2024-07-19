import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import TableSuivi from './TableSuivi/TableSuivi';
import { Sidebar } from './';

const Suivi = () => {
  const [selectedCategory, setSelectedCategory] = useState('Suivi');

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box sx={{
        height: { xs: 'auto', md: '92vh' },
        backgroundColor: 'rgb(19 24 56)',
        borderRight: "1px solid #3d3d3d",
        px: { xs: 0, md: 2 }
      }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant="body2" sx={{ mt: 1.5, color: '#000' }}>
          Copyright 2024 Cap Aliances
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2, backgroundColor: '#f9F9F9', borderRadius: '12px' }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          Suivi<span style={{ color: '#F31503' }}> Projets</span>
        </Typography>
        <TableSuivi sx={{ ml: 3, marginRight: '3%' }} />
      </Box>
    </Stack>
  );
};

export default Suivi;
