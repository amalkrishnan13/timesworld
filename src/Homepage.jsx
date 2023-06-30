import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent,CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Homepage.css"

  function Homepage() {

      const [data, setData] = useState([]);

      useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await fetch('https://restcountries.com/v2/all?fields=name,region,flag');
          const jsonData = await response.json();
    
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
      }
    };
    return (
      <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Countries</Navbar.Brand>
          <Nav className="me-auto,align-right">
            <Nav.Link href="#home">All</Nav.Link>
            <Nav.Link href="#features">Asia</Nav.Link>
            <Nav.Link href="#pricing">Europe</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* ................................................................ */}
    

      <Grid container spacing={2} > 
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={6} sx={{padding:"8px",marginTop:"10px" }} key={index}>
          <Card className='one'
          sx={{ display:"flex",width:"400px",height:"79px",padding:"10px" }}
          >

          <CardMedia
          className='two'
          component="img"
          sx={{ width: 100,height:"auto"}}
          image={item.flag}
          alt="image"
        />
        <Box className='four' sx={{ flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography sx={{fontSize:"15px"}} component="div" variant="h6">
              {item.name}
            </Typography>
            <Typography sx={{fontSize:"13px"}} variant="subtitle1" color="text.secondary" component="div">
              Region: {item.region}
            </Typography>
          </CardContent>
        </Box>
      
      </Card>
    
     </Grid>
      ))}
    </Grid>
    </>
    )
  }


  export default Homepage