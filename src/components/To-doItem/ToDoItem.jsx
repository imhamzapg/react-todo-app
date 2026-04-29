import { useState } from 'react';

const ToDoItem = ({ todo, deleteTask, handleToggle, startEdit, saveEdit, cancelEdit }) => {
    const [editValue, setEditValue] = useState(todo.title);

    return (
        <div
            className="todo-card"
            style={{
                ...(todo.priority === "high" ? { backgroundColor: "lightcoral" } : 
                   todo.priority === "medium" ? { backgroundColor: "#fafa6f" } : 
                   { backgroundColor: "lightgreen" }),
                ...(todo.completed ? { textDecoration: "line-through", opacity: 0.5, filter: "grayscale(30%)" } : {}),
            }}
        >
            <div className="todo-title-desc">
                <h3 className="todo-tile">
                    {todo.isEditing ? (
                        <>
                            <input
                                autoFocus
                                onChange={(e) => setEditValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') saveEdit(todo.id, editValue);
                                    if (e.key === 'Escape') cancelEdit(todo.id); // Dodat UX polish
                                }}
                                value={editValue}
                                type="text"
                            />
                            <button onClick={() => saveEdit(todo.id, editValue)}>Save</button>
                            <button onClick={() => cancelEdit(todo.id)}>Cancel</button>
                        </>
                    ) : (
                        todo.title
                    )}
                </h3>
                <p className="todo-desc">{todo.description}</p>
                <small>{todo.category} | {todo.dueDate}</small>
            </div>
            <div className="todo-actions">
                <button className="todo-delete-btn" onClick={() => deleteTask(todo.id)}>Delete</button>
                
                <button onClick={() => startEdit(todo.id)}>Edit</button>
                <input
                    className="todo-checkbox"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo.id)}
                />
            </div>
        </div>
    );
};

export default ToDoItem;