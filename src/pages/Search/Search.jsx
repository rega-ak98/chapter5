import { Box} from '@mui/system';
import React, { useEffect } from 'react';
import FormPencarian from '../../components/FormPencarian/FormPencarian';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCar } from '../../redux/action/carAction';
import { saveDetailByID } from '../../redux/action/detailAction';


function Search(){
  const dispatch = useDispatch();
  const { isLoading: loadingCar, data: carData } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(getCar());
  }, []);


  return (
    <div style={{ minHeight: '100vh' }}>
    <Navbar />
    <Box sx={{ minHeight: 150, backgroundColor: '#F1F3FF;', fontFamily:['Halvetica'] }}></Box>
    <FormPencarian />
    <form>
    <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
    {loadingCar ? 'loading data ...'
    : carData.map((item) => {
      return(
        <Card key={item.id} sx={{marginY:"3%" }}>
          <CardMedia
                  component="img"
                  image={item.image}
                  alt="img-car" 
          />
          <CardContent>
              <p>{item.name}</p>
              <Typography gutterBottom variant="h6" component="div">
                Rp {item.price} / hari
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </Typography>
              <p><img src="images/fi_users.png" alt="" style={{marginRight:'4%'}}/>4 orang</p>
              <p><img src="images/fi_settings.png" alt="" style={{marginRight:'4%'}}/>Manual</p>
              <p><img src="images/fi_calendar.png" alt="" style={{marginRight:'4%'}}/>Tahun 2020</p>
          </CardContent>
          <CardActions>
        <Link to={`/detail/${item.id}`} onClick={()=> dispatch(saveDetailByID(item))}>
        <Button color="success" variant="contained" fullWidth >Pilih Mobil</Button></Link>
      </CardActions>
    </Card>
      );
    })}
    </Container>
    </form>
    <Footer />
  </div>
);
}

export default Search;