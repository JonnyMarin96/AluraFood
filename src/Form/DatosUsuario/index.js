import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarPassword, validarEmail } from "./validaciones ";


const DatosUsuario = () => {

  const [email, setEmail] = useState({
      value: 'email@email.com',
      valid: null
  })

  const [password, setPassword] = useState({
      value: 'asd',
      valid: null
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
      onSubmit={(e) => {
          e.preventDefault()
          if(email.valid === true  && password.valid === true){
            console.log("Siguiente formulario")
          } else {
            console.log("No avanza")
          }
        
        }
      }
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid === false}
        helperText={email.valid === false && "Ingresa un correo electrónico válido"}
        value={email.value}
        onChange={(e) =>{
          const email = e.target.value
          setEmail({value: email, valid: validarEmail(email)})
        }}
      />
      <TextField
        label="Contraseña" 
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={password.valid === false}
        helperText={password.valid === false && "Contraseña invalida"}
        value={password.value}
        onChange={(e) =>{
          const password = e.target.value           
          setPassword({value: password, valid: validarPassword(password)})
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
  
}

export default DatosUsuario;
