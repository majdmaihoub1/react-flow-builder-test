import React from 'react';
import AddNode from '../../components/AddNode/AddNode';
import NodesContainer from '../../components/NodesContainer/NodesContainer';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

function Home() {
  return (
    <Grid container columnSpacing={{ xs: 3, sm: 3, md: 4 }} mt={6}>
      <Grid item sm={8}>
        <NodesContainer />
      </Grid>
      <Grid item sm={4}>
        <Typography variant='h5' align='left'>
          Add a new cases to your flow
        </Typography>
        <AddNode />
      </Grid>
    </Grid>
  );
}

export default Home;
