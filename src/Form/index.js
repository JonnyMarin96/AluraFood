import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {
  const [ step, setStep ] = useState(0);

  const selectStep = () => {
    switch (step){

      case 0: 
        return <DatosUsuario/>;
        break;

      case 1: 
        return <DatosPersonales/>;
        break;

      case 2: 
        return <DatosEntrega/>;
        break;

      default: 
        return <Complete/>;
        break;
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
        { selectStep() }
      </FormSpace>
    </Box>
  );
};

export default Form;
