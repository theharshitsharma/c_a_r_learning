import {createContext,useContext} from 'react';
export const TofoContext=createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{
        console.log("addTodo",todo);
    },
    updateTodo:(id,todo)=>{
        console.log("updateTodo",id,todo);
    },
    deleteTodo:(id)=>{
        console.log("deleteTodo",id);
    },
    toggleComplete:(id)=>{
        console.log("toggleComplete",id);
    },
})

export const TodoContext = createContext();
export const useTodo=()=>{return useContext(TodoContext)}
export const TodoProvider=TodoContext.Provider;