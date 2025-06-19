import React from 'react';
import { useTodo } from '../context/TodoContext'; // ✅ Corrected path

function TodoForm() {
    const [todo, setTodo] = React.useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (todo.trim().length === 0) return;
        addTodo({ todo: todo, completed: false });
        setTodo("");
    };

    return (
   <form onSubmit={add} className="flex overflow-hidden rounded-lg shadow-md">
  <input
    type="text"
    placeholder="Write your todo..."
    className="w-full px-4 py-2 text-white placeholder-gray-300 bg-white/10 border border-r-0 border-white/20 outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
    required
  />
  <button
    type="submit"
    className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold tracking-wide transition duration-200"
  >
    ➕ Add
  </button>
</form>

    );
}

export default TodoForm;
