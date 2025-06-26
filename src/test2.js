import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../api/todos";
// import { CircularProgress } from "@mui/material";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState("");
  //   const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTodos();
        setTimeout(() => {
          setTodos(res.data);
          setLoading(false);
        }, 1500);
      } catch (error) {
        setNotification("K thể load data, vui lòng thử lại");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //   const fetchTodos = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await getTodos();
  //       console.log("Data", res.data);

  //       setTodos(res.data);
  //     } catch (err) {
  //       setNotification("Can not call API");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  const handleAdd = async (text) => {
    try {
      setLoading(true);
      const res = await addTodo({ todo: text, completed: false, userId: 1 });
      setTodos([res.data, ...todos]);
      setNotification("Thêm task thành công");
    } catch {
      setNotification("Lỗi khi thêm task");
    } finally {
      setLoading(false);
      removeNotification();
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
      setNotification("Đã xoá task");
    } catch (err) {
      console.log("DELETE_ERROR:", err);
      setNotification("K xoá được task");
    }
    removeNotification();
  };

  const handleToggle = async (id, completed) => {
    try {
      const found = todos.find((task) => task.id === id);
      const updated = { ...found, completed };
      await updateTodo(id, updated);
      setTodos(
        todos.map((task) => (task.id === id ? { ...task, completed } : task))
      );
      setNotification("Đã cập nhật trạng thái");
    } catch {
      setNotification("Cập nhật trạng thái thất bại");
    }
    removeNotification();
  };

  const handleEdit = async (id, text) => {
    try {
      const found = todos.find((task) => task.id === id);
      const updated = { ...found, todo: text };
      await updateTodo(id, updated);
      setTodos(
        todos.map((task) => (task.id === id ? { ...task, todo: text } : task))
      );
      setNotification("Đã sửa task");
    } catch {
      setNotification("Lỗi khi sửa task");
    }
    removeNotification();
  };

  const removeNotification = () => setTimeout(() => setNotification(""), 2000);

  //   const filteredTodos = todos.filter((todo) =>
  //     todo.todo.toLowerCase().includes(query.toLowerCase())
  //   );

  //   if (loading) {
  //     return (
  //       <div className="w-full h-screen flex flex-col items-center justify-center">
  //         <span className="text-blue-600 font-semibold text-lg mb-4">
  //           Đang tải dữ liệu...
  //         </span>
  //         <CircularProgress color="primary" size={48} />
  //       </div>
  //     );
  //   }

  return (
    <section className="w-full mt-0">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          To Do List
        </h2>
        <TodoForm onAdd={handleAdd} />
        {notification && (
          <div
            className={`mb-4 p-3 text-base rounded-lg shadow
          ${
            notification.includes("")
              ? "bg-green-50 border border-green-400 text-green-600"
              : "bg-red-50 border border-red-400 text-red-600"
          }`}
          >
            {notification}
          </div>
        )}
        <TodoList
          todos={todos}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onUpdate={handleEdit}
        />
      </div>
    </section>
  );
};

export default Home;
