import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useNavigate } from 'react-router-dom';


const styles = {
  contentUtama: {
    width: '70%',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    marginTop: '-50px',
    borderRadius: '20px',
    padding: 5,
    
  },
};


function FormPencarian() {
  const navigate = useNavigate();

  const handleSubmit = () =>{
    navigate('/search');
  }

  const [Driver, setDriver] = React.useState('');

  const handleChange = (event) => {
    setDriver(event.target.value);
  };

  const [value, setValue] = React.useState(null);

 


  return (
    <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={styles.contentUtama}>
        <Grid
          container
          spacing={2}
          alignItems="flex-end"
          justifyContent="center" 
        >
          <Grid item xs sx={{marginRight:"-20px"}}>
            <Typography variant="caption">Tipe Driver</Typography>
            <FormControl >
            <Select 
              size="medium"
              value={Driver}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              onChange={handleChange}
            >
              <MenuItem value="">Pilih Tipe Driver</MenuItem>
              <MenuItem value={10}>Dengan Supir</MenuItem>
              <MenuItem value={20}>Tanpa Supir (Lepas Kunci)</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs>
          <Typography variant="caption">Tanggal</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns} >
            <DatePicker
              label="Pilih Tanggal"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          </Grid>

          <Grid item xs>
            <Typography variant="caption">Waktu Jemput/Ambil</Typography>
            <FormControl >
            <Select
              size="medium"
              value={Driver}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              onChange={handleChange}
            >
              <MenuItem value="">Pilih Waktu</MenuItem>
              <MenuItem value={10}>08.00</MenuItem>
              <MenuItem value={20}>09.00</MenuItem>
              <MenuItem value={30}>10.00</MenuItem>
              <MenuItem value={40}>11.00</MenuItem>
              <MenuItem value={50}>12.00</MenuItem>
            </Select>
          </FormControl>
          </Grid>

          <Grid item xs sx={{marginLeft:"-50px"}}>
            <Typography variant="caption">
              Jumlah Penumpang(optional)
            </Typography>
            <TextField
              size="medium"
              id="my-input"
              aria-describedby="my-helper-text"
              label="Jumlah Penumpang"
            />
          </Grid>
          <Grid item xs>
          <form onSubmit={handleSubmit}><Button variant="contained" color="success" type="submit" sx={{height:"55px"}}>Cari Mobil</Button></form>
          </Grid>
        </Grid>
      </Box>
    </Container>
    
  );
}

export default FormPencarian;
