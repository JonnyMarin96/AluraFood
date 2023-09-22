import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones ";
import { validarNombre, validarApellido, validarTelefono } from "./DatosPersonales/validaciones";
import Step from "./Step";

const Form = () => {
  const [ step, setStep ] = useState(0);
  const [ pasos, setpasos ] = useState({})

  const steps = {
    0: <DatosUsuario/>,
    1: <DatosPersonales/>,
    2: <DatosEntrega/>,
    3: <Complete/>
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let newStep = step + 1
    setStep(newStep)
    console.log("NewStep: ",newStep)
    console.log("Step: ",step)
  }

  const handleChange = (e, position, currentStep, validator) => {
    const value = e.target.value
    const valid = validator(value)
  }

  const stepFlow = {
    0: {
      inputs: [
        { /* Email */
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa un correo electrónico válido",
          validator: validarEmail
        },
        { /* Contraseña */
        label: "Contraseña",
        type: "Contraseña",
        value: "",
        valid: null,
        onChange: handleChange,
        helperText: "Contraseña invalida",
        validator: validarPassword
      }
      ],
      buttonText: "Siguiente",
      onSubmit
    },
    1: {
      inputs: [
        { /* Nombre */
          label: "Nombre",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Se permiten entre 2 y 30 caracteres",
          validator: validarNombre,
        },
        { /* Apellido */         
          label: "Apellidos",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Se permiten entre 2 y 50 caracteres",
          validator: validarApellido
        },
        { /* Telefono */
          label: "Número telefónico",
          type: "number",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Se permiten entre 8 y 14 digitos",
          validator: validarTelefono
        }
      ],
      buttonText: "Siguiente",
      onSubmit
    }
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        { step < 3 && <Stepper step={step}/> }  
        {/* steps[step]*/ }
        <Step data={ stepFlow[step] } step={step}/> 
      </FormSpace>
    </Box>
  );
};

export default Form;
