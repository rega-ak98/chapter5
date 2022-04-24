import {
  Container,
  Grid,
} from '@mui/material';
import React from 'react';

function Footer() {
  return(
    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', marginX:'10%', paddingTop:'5%' ,}}> 
    <Grid container spacing={4}>
    <Grid item xs>
      <p>Jalan Suroyo No. 161 Mayangan Kota <br /> Probolonggo 672000</p>
      <p>binarcarrental@gmail.com</p> 
      <p>081-233-334-808</p>
    </Grid>
    <Grid item xs>
      <p>Our services</p>
      <p>Why Us</p>
      <p>Testimonial</p>
      <p>FAQ</p>
    </Grid>
    <Grid item xs>
      <p>Connect with us</p>
      <p>
        <img src="../images/icon_facebook.png" alt="" />
        <img src="../images/icon_instagram.png" alt="" style={{marginLeft:'2%'}} />
        <img src="../images/icon_twitter.png" alt="" style={{marginLeft:'2%'}} />
        <img src="../images/icon_mail.png" alt="" style={{marginLeft:'2%'}} />
        <img src="../images/icon_twitch.png" alt="" style={{marginLeft:'2%'}}/>
      </p>
    </Grid>
    <Grid item xs>
    <p>Copyright Binar 2022</p>
    <p><img src="../images/Rectangle 74.png" alt="" /></p>
    </Grid>
    </Grid>
    </Container>
  );
}

export default Footer;