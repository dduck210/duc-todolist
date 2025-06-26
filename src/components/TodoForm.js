import { useState } from "react";
const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text) {
      setError("Vui lòng nhập công việc!");
      return;
    }
    setError("");
    onAdd(text);
    setText("");
  };

  // const handleDelete = (event) => {
  //   event.preventDefault();
  //   if (text) {
  //     setError("Xoá task");
  //   }
  // };

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 mb-6 w-full"
      onSubmit={handleSubmit}
    >
      <div className="flex-1 flex flex-col">
        <input
          className={`border ${error ? "border-red-400" : "border-blue-300"} focus:border-blue-500 outline-none rounded-lg px-4 py-2 text-base shadow-sm transition-all duration-150 placeholder-gray-400 bg-white`}
          placeholder="Nhập công việc mới..."
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            setError("");
          }}
          maxLength={100}
        />
        {error ? (
          <span className="text-red-500 text-sm mt-1 min-h-[20px]">
            {error}
          </span>
        ) : (
          <span className="invisible text-sm mt-1 min-h-[20px]">
            placeholder
          </span>
        )}
      </div>
      <button
        className="px-6 py-2 mb-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-base font-semibold shadow transition-all duration-150 w-full sm:w-auto"
        type="submit"
      >
        Thêm
      </button>
    </form>
  );
};

export default TodoForm;
