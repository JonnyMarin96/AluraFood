import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";



const DatosUsuario = () => {

  const [email, setEmail] = useState({
    email: { 
      value: 'email@email.com',
      valid: true
    }
  })

  const [password, setPassword] = useState({
    password: {
      value: 'asd',
      valid: true
    }
  })
  

  /*
  constructor(props){
    super(props);
    this.state = {
      email: { 
        value: 'email@email.com',
        valid: true
      },
      password: {
        value: 'asd',
        valid: true
      }
    }
  }
  */

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={ (e) => e.preventDefault }
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={false}
        helperText={false && "Ingresa un correo electrónico válido"}
        value={email.value}
        onChange={(e) => setEmail( {email:{value: e.target.value}} )}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        value={password.value}
        onChange={(e) => setPassword( {password:{value: e.target.value}} )}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
  
}

export default DatosUsuario;
