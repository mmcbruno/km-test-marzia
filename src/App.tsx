import React from 'react';
import Container from '@mui/material/Container';
import { Header } from './components/Header';
import { Campaigns } from './components/Campaigns';

export const App = () => (
  <>
    <Header />
    <Container maxWidth='lg'>
      {/*   <Menu/>*/}
      <Campaigns />
    </Container>
  </>
);
