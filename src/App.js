import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Suivi} from './components';

const App = () => (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#f9f9f9'}} >
        <Navbar />
        <Routes >
            <Route path="/" exact element={<Suivi />} />
        </Routes>
    </Box>

    </BrowserRouter>
  )

export default App