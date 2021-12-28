import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";
function FormularioCadastro({aoEnviar, validarCpf}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [novidades, setNovidades] = useState(true);
  const [promocoes, setPromocoes] = useState(true);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        label="Nome"
        id="nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => setSobreNome(event.target.value)}
        label="Sobrenome"
        id="sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onBlur={()=>{
          const updateErrorCpf = validarCpf(cpf);
          setErros({cpf:updateErrorCpf})
        }}
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
        label="CPF"
        id="cpf"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            nome="promocoes"
            checked={promocoes}
            onChange={(event) => setPromocoes(event.target.checked)}
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            nome="novidades"
            checked={novidades}
            onChange={(event) => setNovidades(event.target.checked)}
            color="primary"
          />
        }
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
