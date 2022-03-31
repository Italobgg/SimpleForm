import React from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosUsuario({aoEnviar}) {
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar();
        }}>
            <TextField
                id="email"
                label="email"
                type="email"
                requered
                variant="outlined"
                margin="normal"
                fullWidth />

            <TextField
                id="senha"
                label="senha"
                type="password"
                requered
                variant="outlined"
                margin="normal"
                fullWidth />


            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    );
}

export default DadosUsuario;