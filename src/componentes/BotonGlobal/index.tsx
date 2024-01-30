import React from "react";
import PropTypes from "prop-types";
import { Button, Box } from "@mui/material";

const BotonSaludo = ({ texto }: { texto: string }) => {
  return (
    <Box>
      <Button variant="outlined">{texto}</Button>
    </Box>
  );
};

BotonSaludo.propTypes = {
  texto: PropTypes.string.isRequired, // Ensure the text prop is a string and required
};

export default BotonSaludo;
