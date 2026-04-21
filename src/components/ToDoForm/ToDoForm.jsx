import { useState } from "react"
const ToDoForm = ({ addTask }) => {
    // title, description, priority, category, dueDate
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("medium")
    const [category, setCategory] = useState("General")
    const [dueDate, setDueDate] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        const taskData = {
            title,
            description,
            priority,
            category, 
            dueDate
        }
        addTask(taskData)
        setTitle("")
        setDescription("")
        setPriority("medium")
        setCategory("General")
        setDueDate("")
    }
    return (
        <div className="toDoForm">
            <form onSubmit={handleSubmit} action="">
                <input value={title} onChange={(e) =>setTitle(e.target.value)} type="text" placeholder="Title" />
                <input value={description} onChange={(e) =>setDescription(e.target.value)} type="text" placeholder="Description" />
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <input value={dueDate} onChange={(e) => setDueDate(e.target.value)} type="date" placeholder="Date" />
                <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="category" />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}
export default ToDoForm