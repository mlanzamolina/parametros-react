import React from "react";
import PropTypes from "prop-types";
import { Button, Box } from "@mui/material";

const BotonSaludo = ({ texto }: { texto: string }) => {
  const manejarClick = () => {
    alert("Hola");
  }
  return (
    <Box>
      <Button variant="outlined" onClick={manejarClick}>{texto}</Button>
    </Box>
  );
};

BotonSaludo.propTypes = {
  texto: PropTypes.string.isRequired, // Ensure the text prop is a string and required
};

export default BotonSaludo;
