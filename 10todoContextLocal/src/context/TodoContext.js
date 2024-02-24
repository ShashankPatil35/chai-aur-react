import {createContext,useContext} from "react"

export const TodoContext = createContext({
    //in this context we have talked about values and methods 
    todos:[
        {
       id:1,
       todo:"Todo msg",
       completed:false,
    }
],
//methods
  addTodo:(todo)=>{},
  updateTodo:(id,todo)=>{},
  deleteTodo:(id)=>{},
  toggleComplete:(id)=>{}
})
//useTodo custom hook
export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider