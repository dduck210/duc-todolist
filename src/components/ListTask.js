import axios from "axios";
import { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ClearIcon from "@mui/icons-material/Clear";

const ListTask = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => setTodos(res.data.todos))
      .catch((err) => console.log("Lỗi", err));
  }, []);

  const handleToggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full min-h-screen bg-slate-200 text-slate-700 flex flex-col">
      <div className="flex-1 flex flex-col p-0">
        <div className="w-full bg-white p-8 rounded-none shadow shadow-slate-300 min-h-screen">
          <div className="flex flex-row justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-medium">Tasks list</h1>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add new
            </button>
          </div>
          <p className="text-slate-500 mb-5">
            Hello, here are your latest tasks
          </p>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className={`relative bg-white shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-xl
                  ${todo.completed ? "opacity-70 line-through" : ""}
                `}
              >
                <button
                  onClick={() => handleToggleCompleted(todo.id)}
                  className="absolute top-2 left-2 text-blue-500 hover:scale-110 transition"
                  title={
                    todo.completed ? "Undo completed" : "Mark as completed"
                  }
                >
                  {todo.completed ? (
                    <CheckCircleIcon fontSize="medium" />
                  ) : (
                    <RadioButtonUncheckedIcon fontSize="medium" />
                  )}
                  Ơ
                </button>

                <button
                  onClick={() => handleDelete(todo.id)}
                  className="absolute top-2 right-2 text-red-400 hover:text-red-600 transition"
                  title="Delete Task"
                >
                  <ClearIcon fontSize="medium" />
                </button>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 pr-7 pl-7">
                  {todo.todo}
                </h3>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Completed:</span>{" "}
                  {todo.completed ? "true" : "false"}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">UserId:</span> {todo.userId}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 text-center mt-8">
            Last updated 12 minutes ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListTask;
