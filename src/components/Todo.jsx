import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import TodoList from "./TodoList";
import TodoFormAdd from "./TodoFormAdd";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = () => {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: newTodo,
          complete: false,
        },
      ]);
      setNewTodo("");
    }
  };

  // console.log(todos);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const toggleEdit = (id) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, edit: !todo.edit } : todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  };

  const checkComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, complete: !todo.complete } : todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, text: newText } : todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <Box>
      <TodoFormAdd
        newTodo={newTodo}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <TodoList
        todos={todos}
        checkComplete={checkComplete}
        onEditClick={updateTodo}
        toggleEdit={toggleEdit}
        onDelete={deleteTodo}
      />
    </Box>
  );
};

export default Todo;
