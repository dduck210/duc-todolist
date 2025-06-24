import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MenuNav from "./components/Menu/Menu";
import ListTask from "./components/ListTask";
import { useState } from "react";
import AddTodo from "./components/AddToDo";
import Home from "./components/Home";
import EditToDo from "./components/EditToDo";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  // const [text, setText] = useState("");

  // const handleDelete = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  // const [todo, setTodo] = useState("");
  // const [userId, setUserId] = useState("");
  // const [tasks, setTasks] = useState([]);

  // const handleAdd = (event) => {
  //   event.preventDefault();

  //   if (todo.trim() === "" || userId.trim() === "") {
  //     alert("Vui lòng nhập đầy đủ");
  //     return;
  //   }

  //   const newTask = {
  //     id: Date.now(),
  //     todo: todo.trim(),
  //     completed: false,
  //     userId: Number(userId),
  //   };

  //   setTasks([...tasks, newTask]);
  //   setTodo("");
  //   setUserId("");
  // };

  const addTodo = (text) => {
    const newToDo = { id: Date.now(), text };
    setTodos([newToDo, ...todos]);
  };

  return (
    <div>
      <BrowserRouter>
        <MenuNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-task" element={<ListTask />} />
          {/* <Route path="/add-new-task" element={<AddTodo />} /> */}
          <Route path="add-task" element={<AddTodo onAdd={addTodo} />} />
          <Route path="edit-task" element={<EditToDo />} />
          <Route path="todo-item" element={<TodoItem />} />
          <Route path="todo-list" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
      <div></div>
    </div>
  );
}

export default App;
