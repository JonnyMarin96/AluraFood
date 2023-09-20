import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellido, validarTelefono } from "./validaciones"; 

const DatosPersonales = () => {

  const [nombre, setNombre] = useState( {value:"", valid: null} )
  const [apellido, setApellido] = useState( {value:"", valid: null} )
  const [telefono, setTelefono] = useState( {value:"", valid: null} )

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
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={nombre.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarNombre(value)
          setNombre({ value, valid })
          console.log(value, valid)
        }}
        error={nombre.valid === false}
        helperText={nombre.valid === false && "Se permiten entre 2 y 30 caracteres"}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={apellido.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarApellido(value)
          setApellido({ value, valid })
        }}
        error={apellido.valid === false}
        helperText={apellido.valid === false && "Se permiten entre 2 y 50 caracteres"}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={telefono.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarTelefono(value)
          setTelefono({ value, valid })
        }}
        error={telefono.valid === false}
        helperText={telefono.valid === false && "Se permiten entre 8 y 14 digitos"}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
