import React, { useState } from "react";
import EditToDo from "./EditToDo";

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="border p-3 rounded mb-2 flex justify-between items-center">
      {isEditing ? (
        <EditToDo
          todo={todo}
          onUpdate={(id, newText) => {
            onUpdate(id, newText);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <span>{todo.text}</span>
          <div className="space-x-2">
            <button
              className="text-yellow-500"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button className="text-red-500" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
