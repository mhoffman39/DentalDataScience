import React from "react";
import { Grid, Link } from '@mui/material';

export default function Footer () {

  return (
    <Grid 
      sx={{height:100}} 
      container 
      position={'absolute'} 
      bottom='0' 
      justifyContent={"space-around"} 
      alignItems={'center'} 
    >
      <Grid item>
        <Link href="#" underline="none">
          {'Privacy Policy'}
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" underline="none">
          {'Contact Us'}
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" underline="none">
          {'Terms of Use'}
        </Link>
      </Grid>
    </Grid>
  )
}