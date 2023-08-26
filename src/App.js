import "./App.css";
import Todo from "./components/Todo";
import { Box, Typography } from "@mui/material";
function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ justifyContent: "center", textAlign: "center" }}>
        <Typography variant="h3">Todo App</Typography>
        <Todo />
      </Box>
    </Box>
  );
}

export default App;
