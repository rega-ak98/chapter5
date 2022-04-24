import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

const styles = {
  logo: {
    mr: 2,
    display: { xs: 'none', md: 'flex' },
  },
};

const pages = ['Our Service', 'Why Us', 'Testimonial', 'FAQ'];

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#F1F3FF;', color:'black', boxShadow:'none'}}>
      <Container maxWidth="lg" >
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={styles.logo}>
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, fontFamily:['Halvetica'], justifyContent:'flex-end', }}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', marginRight: '10px' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button variant="contained" color="success">Register</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
