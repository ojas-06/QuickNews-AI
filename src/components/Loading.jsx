import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <center className='loading'>
      <CircularProgress />
    </center>
  );
}
