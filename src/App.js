import React, { useState, useEffect } from 'react';

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

import {Button, TextField, Grid, Typography} from '@mui/material';
import Footer from './Footer';
import MenuBar from './MenuBar';

function App({ signOut, user }) {
  const [ssn, setSSN] = useState('');
  const [dob, setDOB] = useState(null);

  //Add dashes as user types SSN
  useEffect(() => {
    if (ssn.length === 3 || ssn.length === 6) {
      let temp = `${ssn}-`;
      setSSN(temp);
    }
  }, [ssn])

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Submitted SSN:asdfasdf', ssn);
    console.log('Submitted DOB:', dob);
  };

  return (
    <>
      <MenuBar />
      <Grid container sx={{mt:5}}>
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={4}>
          <form>
            <TextField
              label="Social Security Number"
              defaultValue="123-45-6789"
              variant="outlined"
              // fullWidth
              value={ssn}
              onChange={(event) => setSSN(event.target.value)}
              />
            <br />
            <br />
            <TextField
              label="Date of Birth"
              variant="outlined"
              // fullWidth
              value={dob}
              onChange={(event) => setDOB(event.target.value)}
              />
            <br />
            <br />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        </Grid>
        <Grid item xs={4}>

        </Grid>
        <Grid xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default withAuthenticator(App);