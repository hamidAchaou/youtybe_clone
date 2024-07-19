import React, { useEffect, useState } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Pagination,
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material';
import suiviData from '../../utils/data';

const TableSuivi = () => {
  const [page, setPage] = useState(1); // Pagination page starts from 1
  const rowsPerPage = 5;
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Add a state for search term
  const [filteredData, setFilteredData] = useState([]); // Add a state for filtered data

  useEffect(() => {
    // Simulating fetching data (replace with actual fetch logic if needed)
    setData(suiviData);
  }, []);

  useEffect(() => {
    // Filter data based on search term
    const filteredData = data.filter((row) => {
      return Object.values(row).some((value) => {
        return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
    setFilteredData(filteredData);
  }, [data, searchTerm]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Paper>
      <TextField
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <i className="fas fa-search" />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <TableContainer sx={{ maxHeight: 'calc(100vh - 240px)' }}>
        <Table stickyHeader>
          <TableHead sx={{ backgroundColor: '#000', color: 'white' }}>
            <TableRow>
              <TableCell>Representant</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Mode Retour</TableCell>
              <TableCell>Activite</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Type Bien</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Budget</TableCell>
              <TableCell>Superficie</TableCell>
              <TableCell>Zone</TableCell>
              <TableCell>Type Accompagnement</TableCell>
              <TableCell>Services Clotures</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell>Update Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row, index) => (
              <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}>
                <TableCell>{row.representant}</TableCell>
                <TableCell>{row.nom}</TableCell>
                <TableCell>{row.mode_retour}</TableCell>
                <TableCell>{row.activite}</TableCell>
                <TableCell>{row.contact}</TableCell>
                <TableCell>{row.type_bien}</TableCell>
                <TableCell>{row.action}</TableCell>
                <TableCell>{row.budget}</TableCell>
                <TableCell>{row.superficie}</TableCell>
                <TableCell>{row.zone}</TableCell>
                <TableCell>{row.type_accompagnement}</TableCell>
                <TableCell>{row.services_clotures}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.created_date}</TableCell>
                <TableCell>{row.update_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(filteredData.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
        color="secondary"
      />
    </Paper>
  );
};

export default TableSuivi;