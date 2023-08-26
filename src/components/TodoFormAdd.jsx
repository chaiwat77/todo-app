import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { ControlPoint } from "@mui/icons-material/";

const TodoFormAdd = ({ newTodo, onSubmit, onChange }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={3}
    >
      <TextField
        type="text"
        value={newTodo}
        onChange={onChange}
        label="Todo input"
        variant="outlined"
        size="small"
        style={{ marginRight: "5px" }}
        fullWidth
      />
      <IconButton variant="contained" onClick={onSubmit}>
        <ControlPoint />
      </IconButton>
    </Box>
  );
};

export default TodoFormAdd;
