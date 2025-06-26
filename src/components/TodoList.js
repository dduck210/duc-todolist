import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onUpdate, onToggle }) => {
  return (
    <div>
      {console.log(todos)}
      {/* {console.log(onDelete)} */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
