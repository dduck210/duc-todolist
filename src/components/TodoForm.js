import { useState } from "react";
const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };
  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        className="flex-1 border p-2 rounded mb-5"
        placeholder="Enter new job..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded mb-5"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
