import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ToDoForm from './components/ToDoForm/ToDoForm'
import ToDoList from './components/TodoIist/ToDoList'


function App() {
  const [todos, setTodos] = useState([])


  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      else {
        return todo
      }
    })
    setTodos(updatedTodos)
  }
  const deleteTask = (id) => {
    const filteredTodos = todos.filter(todo =>
      todo.id !== id
    )
    setTodos(filteredTodos)
  }
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
      <ToDoForm addTask={addTask} />
      <ToDoList
        todos={todos}
        deleteTask={deleteTask}
        handleToggle={handleToggle}
      />
    </>
  )
}

export default App
