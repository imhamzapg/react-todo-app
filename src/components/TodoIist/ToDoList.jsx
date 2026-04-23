import React from 'react'
import './ToDoList.css'

const ToDoList = ({ todos, deleteTask, handleToggle }) => {
    return (
        <div className="todo-list">
            {todos.length === 0 ? (
                <p className="no-tasks">No tasks available. Please add a task.</p>
            ) : (
                todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="todo-card"
                        style={{
                            ...(todo.priority === "high"
                                ? { backgroundColor: "lightcoral" }
                                : todo.priority === "medium"
                                    ? { backgroundColor: "#fafa6f" }
                                    : { backgroundColor: "lightgreen" }),
                            ...(todo.completed
                                ? {
                                    textDecoration: "line-through",
                                    opacity: 0.5,
                                    filter: "grayscale(30%)",
                                }
                                : {}),
                        }}
                    >
                        <div className="todo-title-desc">
                            <h3 className="todo-tile">{todo.title}</h3>
                            <p className="todo-desc">{todo.description}</p>
                            <small>{todo.category} | {todo.dueDate}</small>
                        </div>
                        <div className="todo-actions">
                            <button className="todo-delete-btn" onClick={() => deleteTask(todo.id)}>
                                Delete
                            </button>
                            <input
                                className="todo-checkbox"
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggle(todo.id)}
                            />
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default ToDoList