import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import { Grid } from '@mui/material';
import MenuBar from './MenuBar';
import Sidebar from './Sidebar/Sidebar';
import DragAndDrop from './FileUpload/DragAndDrop';
Amplify.configure(config);

function App({ signOut, user }) {

  return (
    <Grid container>
      <Grid item xs={12}>
        <MenuBar signOut={signOut} user={user} />
      </Grid>
      <Grid item xs={3} 
        sx={{mt:5, 
          // backgroundColor:'red'
        }}>
        <Sidebar user={user} />
      </Grid>
      <Grid 
        item 
        xs={6} 
        sx={{
          mt: 5,
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center',  
          // backgroundColor: 'blue'
        }}>
        <DragAndDrop />
      </Grid>
      <Grid item xs={3} 
        // sx={{backgroundColor: 'yellow'}}
      >
      </Grid>
    </Grid>
  );
}

export default withAuthenticator(App);