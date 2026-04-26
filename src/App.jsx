import { use, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ToDoForm from './components/ToDoForm/ToDoForm'
import ToDoList from './components/TodoIist/ToDoList'
import ToDoControls from './components/ToDoControls/ToDoControls'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")
  const [searchValue, setSearchValue] = useState("")
  const [sortBy, setSortBy] = useState("createdAt")

  const priority = {
    high: 3,
    medium: 2,
    low: 1
  }
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return todo
    } else if (filter === "active") {
      return todo.completed === false
    } else if (filter === "completed") {
      return todo.completed === true
    }
  }).filter((todo) => {
    return todo.title.toLowerCase().includes(searchValue.toLowerCase())
  }).sort((a, b) => {
    if (sortBy === "createdAt") {
      return new Date(b.createdAt) - new Date(a.createdAt)
    } else if (sortBy === "priority") {
      return priority[b.priority] - priority[a.priority]
    } else if (sortBy === "title") {
      return a.title.localeCompare(b.title)
    }
    return 0
  })


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
      <Header
        setFilter={setFilter}
        setSortBy={setSortBy}
      />
      <ToDoForm addTask={addTask} />
      <ToDoControls setSearchValue={setSearchValue} />
      <ToDoList
        todos={filteredTodos}
        deleteTask={deleteTask}
        handleToggle={handleToggle}
      />
    </>
  )
}

export default App
