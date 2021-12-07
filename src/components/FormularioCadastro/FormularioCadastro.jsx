import React from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@mui/material'
function FormularioCadastro(){
    return (
        <form>
            <TextField label="Nome" id="nome" variant="outlined" margin="normal" fullWidth/>
            <TextField label="Sobrenome" id="sobrenome" variant="outlined" margin="normal" fullWidth/>
            <TextField label="CPF" id="cpf" variant="outlined" margin="normal" fullWidth/>
            <FormControlLabel label="Promoções" control={<Switch nome="promocoes" defaultChecked color="primary"/>} />
            <FormControlLabel label="Novidades" control={<Switch nome="novidades" defaultChecked color="primary"/>} />
            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro;