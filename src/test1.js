import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DashboardLayoutBasic from "./components/Dashboard";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!text.trim()) return;
    if (editId) {
      setTodos(
        todos.map((todo) => (todo.id === editId ? { ...todo, text } : todo))
      );
      setEditId(null);
    } else {
      setTodos([{ id: Date.now(), text }, ...todos]);
    }
    setText("");
  };

  const handleEdit = (todo) => {
    setText(todo.text);
    setEditId(todo.id);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Website bán vợt cầu lông
      </Typography>
      <TextField
        fullWidth
        label="Nhập tên vợt..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 1 }}
        onClick={handleAddOrUpdate}
      >
        {editId ? "Cập nhật" : "Thêm"}
      </Button>

      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <>
                <IconButton onClick={() => handleEdit(todo)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(todo.id)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            {todo.text}
          </ListItem>
        ))}
      </List>
      {/* <DashboardLayoutBasic /> */}
    </Container>
  );
}

export default App;
