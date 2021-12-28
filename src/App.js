import React from "react";
import "./App.css";
import { Container, Typography } from "@mui/material";
import "fontsource-roboto";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
function App() {
  const aoEnviarForm = (dados) => {
    console.log(dados);
  };
  const validarCpf = (cpf) => {
    if (cpf.length !== 11) {
      return { valido: false, texto: "O CPF precisa ter 11 dígitos" };
    } else {
      return { valido: true, texto: "" };
    }
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulario de Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf={validarCpf} />
    </Container>
  );
}

export default App;
