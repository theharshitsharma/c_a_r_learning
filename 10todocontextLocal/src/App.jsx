import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
// import index from './context/index.js'
import { TodoProvider } from './context'


function App() {
  const [todos,setTodos]=useState([])
const addTodo=(todo)=>{
    setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
  }
const updateTodo=(id,todo)=>{
    setTodos((prev)=>
        prev.map((prevTodo)=>
            (prevTodo.id===id?todo:prevTodo)
        )
    )
}
const deleteTodo=(id)=>{
    setTodos((prev)=>
        prev.filter((Todo)=>Todo.id!==id)
    )
}
const toggleComplete=(id)=>{
    setTodos((prev)=>
        prev.map(prevTodo=>
            prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo
        )
    )
}
useEffect(() => {
  const todos=JSON.parse(localStorage.getItem("todos"))
if(todos && todos.length>0){
    setTodos(todos)
}}, [])
useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
}
, [todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
<div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] min-h-screen py-10 px-4">
  <div className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-2xl px-6 py-6 text-white border border-white/10">
    <h1 className="text-3xl font-bold text-center mb-6 tracking-wide text-white">
      📝 Manage Your Todos
    </h1>

    <div className="mb-6">
      {/* Todo form goes here */}
      <TodoForm />
    </div>

    <div className="flex flex-col gap-4">
      {/* Loop and Add TodoItem here */}
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id} className="w-full">
            <TodoItem todo={todo} />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-300">No todos yet. Add one above! 🚀</p>
      )}
    </div>
  </div>
</div>

    </TodoProvider>
  )
}

export default App
