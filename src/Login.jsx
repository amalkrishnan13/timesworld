import React from "react";
import image from "../src/image/WhatsApp Image 2023-06-29 at 21.58.15.jpg"
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import "./Login.css"
import { useState } from "react";


function Login() {
  
  const handleClick = () => {
    window.location.href = '/home';
  };

     
    

  return (
    <Grid className="outer"
   
      container
      sx={{ height: "100vh" }}
      spacing={2}
    >
      <Grid   item lg={7}>
        <Grid
         className="parrent"
          container
          sx={{ height: "100vh" }}
          spacing={2}
        >
          <Grid item lg={2}></Grid>
          <Grid item lg={8}>
            <Grid lg={12}>
              <h1  className="form" color="black" >
                Sign In
              </h1>
            </Grid>
            <Grid
             
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              lg={12}
            >
              {" "}
              <h5 className="new" >New User?</h5><a  style={{marginLeft:"5px",textDecoration:"none"}} href="">Create Account</a>
            </Grid>
            <Grid className="email" >
              <TextField
                sx={{ width: "19rem", paddingTop: "1rem" }}
                id="outlined-basic"
                label ="Username or Email "
                variant="outlined"
              
              />
            </Grid>

            <Grid  className="email">
              <TextField
                sx={{ width: "19rem", paddingTop: "1rem" }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
               
               

              />
            </Grid>
            <Grid lg={12}  className="email">
              <FormGroup>
                {" "}
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Keep me Signed In"
                />
              </FormGroup>
            </Grid>
            <Grid lg={12}  className="email">
              <Button
              onClick={handleClick}
                sx={{ width: "19rem", backgroundColor: "black" }}
                variant="contained"
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
          <Grid item lg={2}></Grid>
        </Grid>
      </Grid>
      <Grid sx={{alignItems:"center",justifyContent:"center"}} item lg={5}>
      
       <Grid sx={{marginTop:"5rem"}} lg={12} > <img className="photo" src={image} alt="image" /></Grid>
      
      </Grid>
    </Grid>
  );
}

export default Login;
