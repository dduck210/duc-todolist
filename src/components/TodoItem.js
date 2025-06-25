import { useState } from "react";
const TodoItem = ({ todo, onDelete, onToggle, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    if (editedTodo.trim()) {
      onUpdate(todo.id, editedTodo);
      setEditing(false);
    }
  };

  return (
    <div
      className={`flex flex-col lg:flex-row items-start lg:items-center justify-between border border-gray-200 shadow-md rounded-xl mb-4 px-5 py-4 transition-all duration-200
      ${todo.completed ? "bg-gradient-to-r from-green-100 to-green-50" : "bg-white hover:bg-blue-50"}`}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 flex-1 w-full">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id, !todo.completed)}
          className="w-5 h-5 accent-blue-500 transition-all duration-150"
        />
        {editing ? (
          <form
            onSubmit={handleEditSubmit}
            className="flex flex-col lg:flex-row gap-2 flex-1 w-full"
          >
            <input
              className="border border-blue-300 focus:border-blue-500 outline-none rounded-lg px-3 py-2 flex-1 text-base shadow-sm transition-all duration-150"
              value={editedTodo}
              onChange={(event) => setEditedTodo(event.target.value)}
              autoFocus
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow transition-all duration-150"
              >
                Save
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-xs font-semibold transition-all duration-150"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <span
            className={
              "break-all flex-1 text-base font-medium transition-all duration-150 " +
              (todo.completed ? "line-through text-gray-400" : "text-gray-800")
            }
          >
            {todo.todo}
          </span>
        )}
      </div>
      {!editing && (
        <div className="flex gap-2 mt-3 lg:mt-0 lg:ml-4">
          <button
            className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-xs font-semibold shadow transition-all duration-150"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow transition-all duration-150"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
