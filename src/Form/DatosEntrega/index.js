import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarCiudad, validarDireccion, validarEstado } from "./validaciones";

const DatosEntrega = () => {

  const [ Direccion, setDireccion] = useState({ value:'', valid: null })
  const [ Ciudad, setCiudad] = useState({ value:'', valid: null })
  const [ Estado, setEstado] = useState({ value:'', valid: null })

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
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ Direccion.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarDireccion(value)
          setDireccion({ value, valid })
        }}
        error={Direccion.valid === false}
        helperText={Direccion.valid === false && "Ingresa direccion valida"}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ Ciudad.value }
        onChange={(input) => {
          const value = input.target.value
          const valid = validarCiudad(value)
          setCiudad({ value, valid })
        }}
        error={Ciudad.valid === false}
        helperText={Ciudad.valid === false && "Ingresa Ciudad valida"}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ Estado.value }
        onChange={(input) => {
          const value = input.target.value
          const valid = validarEstado(value)
          setEstado({ value, valid })
          console.log( value, valid )
        }}
        error={Estado.valid === false}
        helperText={Estado.valid === false && "ingresa estado valido"}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
