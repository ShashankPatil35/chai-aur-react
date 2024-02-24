import { useEffect, useState } from 'react'
import {TodoProvider} from "./context"
import './App.css'
import { TodoForm } from './components'
import {TodoItem} from './components'
function App() {
  const [todos,setTodos] = useState([])
  
  const addTodo =(todo)=>{
    //spread in js
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updateTodo=(id,todo)=>{  //prevTodo.id === id(this is id passed in updatedTodo)
    //if true update it to new todo msg else keep it as it is(old todo that is prevtodo)
    //we can use foreach instead of map
    //prev state when i passed i got prev state array this has all previous todo and applied 
    // loop on it using map(it is a object) i made a prevTodo it goes on every element asks if it is same as id passed
    //then update todo else remain as it is
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo : prevTodo)))
  }
 
  const deleteTodo =(id)=>{
    //prev se sare pahle ke values miljate hai and using filter i am filtering as keep 
    // all values and removes that one id
    setTodos((prev)=>prev.filter((todo)=>(todo.id!==id)))
    //here todo is a variable passing that can iterate to prev we can use some other name also
    //.filter works on true value so if it is !== then true they are returned
    //todo.id!==id so the one that matches(===) that wont return 
    //that dont match they will return
  }
  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }



//when u load application
  useEffect(()=>{
   const todos = JSON.parse(localStorage.getItem("todos"))

   if (todos && todos.length > 0) {
    setTodos(todos);
   }
  },[])

  useEffect(()=>{
   localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'>
                             <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
