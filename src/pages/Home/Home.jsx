import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import React from 'react';
import FormPencarian from '../../components/FormPencarian/FormPencarian';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar'

function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ minHeight: 400, backgroundColor: '#F1F3FF;', fontFamily:['Halvetica'] }}>
        <Box sx={{color: 'black' }}>
        <Grid 
        container 
        spacing={0}
        alignItems="center"
        >
        <Grid item md={6}  sx={{paddingLeft: '100px', paddingRight: '50px'}} >
          <h1> Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        </Grid>
        <Grid item md={6}>
          <img src="images/img_car.png" alt=""/>
        </Grid>
      </Grid>
        </Box>
      </Box>
      <FormPencarian />
      <Footer />
    </div>
  );
}

export default Home;
