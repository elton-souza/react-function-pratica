import React from 'react';
import './App.css';
import {Container, Typography} from '@mui/material';
import "fontsource-roboto"
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3"component="h1" align="center" >Formulario de Cadastro</Typography>
      <FormularioCadastro/>
    </Container>
  );
}

export default App;
