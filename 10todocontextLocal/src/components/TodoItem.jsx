import React from 'react'
import { useTodo } from "../context/TodoContext";
function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = React.useState(false);
    const [todoMsg, setTodoMsg] = React.useState(todo.todo);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();
    const editTodo = () => {
        if (todoMsg.trim().length === 0) return;
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    }
    const toggleCompleted = () => {
        toggleComplete(todo.id);
    }
    return (
        <div
  className={`flex items-center justify-between border border-white/10 rounded-xl px-4 py-2 gap-3 shadow-md transition duration-300 ${
    todo.completed ? "bg-green-100/30" : "bg-indigo-100/20"
  }`}
>
  <input
    type="checkbox"
    className="w-5 h-5 accent-green-600 cursor-pointer"
    checked={todo.completed}
    onChange={toggleCompleted}
  />

  <input
    type="text"
    className={`flex-1 bg-transparent outline-none px-2 py-1 rounded-md text-white placeholder-white/70 ${
      isTodoEditable
        ? "border border-white/20 bg-white/10 focus:ring-2 focus:ring-indigo-300"
        : "border-none"
    } ${todo.completed ? "line-through text-gray-400" : ""}`}
    value={todoMsg}
    onChange={(e) => setTodoMsg(e.target.value)}
    readOnly={!isTodoEditable}
  />

  {/* Edit/Save Button */}
  <button
    onClick={() => {
      if (todo.completed) return;
      isTodoEditable ? editTodo() : setIsTodoEditable((prev) => !prev);
    }}
    disabled={todo.completed}
    className="w-8 h-8 flex items-center justify-center text-white bg-indigo-500 hover:bg-indigo-600 rounded-md disabled:opacity-50 transition"
  >
    {isTodoEditable ? "💾" : "✏️"}
  </button>

  {/* Delete Button */}
  <button
    onClick={() => deleteTodo(todo.id)}
    className="w-8 h-8 flex items-center justify-center text-white bg-red-500 hover:bg-red-600 rounded-md transition"
  >
    🗑️
  </button>
</div>

    );
}

export default TodoItem;
