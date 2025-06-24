import { useState } from "react";
import TodoItem from "./TodoItem";

const EditToDo = ({ todo, onUpdate, onCancel }) => {
  const [text, setText] = useState(TodoItem.text);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      onUpdate(text.trim());
      //   console.log(text.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <input
        className="flex-1 p-2 border rounded"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button className="bg-green-500 text-white px-3 rounded">Save</button>
      <button
        type="button"
        className="bg-gray-500 px-3 rounded"
        onClick={onCancel}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditToDo;
