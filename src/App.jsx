import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ToDoForm from './components/ToDoForm/ToDoForm'


function App() {
  const [todos, setTodos] = useState([])

 const addTask = (data) => {
  const newTask = {
    id: Date.now(), 
    title: data.title, 
    description: data.description || "", 
    completed: false, 
    priority: data.priority || "medium",
    createdAt: new Date(),
    dueDate: data.dueDate || "",
    category: data.category || "General", 
    isEditing: false
  };

  setTodos([...todos, newTask]); 
};
  return (
    <>
     <Header />
     <ToDoForm addTask={addTask}/>
    </>
  )
}

export default App
