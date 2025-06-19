import { useState,useEffect } from 'react'
import './App.css'
import Todoitem from './Todoitem';
const [editingIndex, setEditingIndex] = useState(null);
const [editingText, setEditingText] = useState("");


function App() {
  const [todo, setTodo] = useState(() => {
  const stored = localStorage.getItem("todos");
  return stored ? JSON.parse(stored) : [];
});
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todo));
}, [todo]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = () => {
    if (inputValue.trim() === "") return;
    const newTodo = { text: inputValue, completed: false };
    setTodo([...todo, newTodo]);
    setInputValue("");
  };

  // ✅ FIX 1: Rename from toggleCompleted to toggleComplete
  const toggleComplete = (index) => {
    const updatedTodos = todo.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    // ✅ FIX 2: setTodo(updatedTodos) not updatedTodo
    setTodo(updatedTodos);
  };

  const handleDelete = (indexToDelete) => {
    const newTodos = todo.filter((_, index) => index !== indexToDelete);
    setTodo(newTodos);
  };

 return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center p-4">
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-indigo-600 drop-shadow">
        🚀 Todo List App
      </h1>

   <div className="flex gap-2 mb-4">
  <input
    value={inputValue}
    type="text"
    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
    onChange={(e) => setInputValue(e.target.value)}
    placeholder="Add a new task..."
  />
  <button
    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-lg shadow-md"
    onClick={handleChange}
  >
    Add
  </button>
</div>


      <ul className="space-y-3 max-h-80 overflow-y-auto pr-1">
        {todo.length === 0 ? (
          <p className="text-center text-gray-500 italic">No tasks yet ✨</p>
        ) : (
          todo.map((item, index) => (
            <Todoitem
    key={index}
    item={item}
    index={index}
    toggleComplete={toggleComplete}
    handleDelete={handleDelete}
  />
            
          ))
        )}
      </ul>
    </div>
  </div>
);

}

export default App;
