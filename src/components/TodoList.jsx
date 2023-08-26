import React from "react";
import {
  Checkbox,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";

import { Cancel, Mode } from "@mui/icons-material";
const TodoList = ({
  todos,
  checkComplete,
  onEditClick,
  toggleEdit,
  onDelete,
}) => {
  return (
    <List disableGutters>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          <Checkbox
            checked={todo.complete}
            onChange={() => checkComplete(todo.id)}
          />
          {todo.edit ? (
            <TextField
              type="text"
              value={todo.text}
              onChange={(e) => onEditClick(todo.id, e.target.value)}
              onBlur={() => toggleEdit(todo.id)}
              autoFocus
            />
          ) : todo.complete ? (
            <ListItemText primary={<del>{todo.text}</del>} />
          ) : (
            <ListItemText primary={todo.text} />
          )}
          <ListItemSecondaryAction>
            <IconButton
              variant="outlined"
              size="small"
              onClick={() => onDelete(todo.id)}
            >
              <Cancel />
            </IconButton>
            <IconButton
              variant="outlined"
              size="small"
              onClick={() => toggleEdit(todo.id)}
            >
              <Mode />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
