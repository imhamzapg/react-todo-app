import React from 'react'
import './ToDoList.css'
import ToDoItem from '../To-doItem/ToDoItem'
const ToDoList = ({ todos, deleteTask, handleToggle, startEdit, saveEdit, cancelEdit }) => {
    return (
        <div className="todo-list">
            {todos.length === 0 ? (
                <p className="no-tasks">No tasks available. Please add a task. </p>
            ) : (
                todos.map((todo) => (
                    <ToDoItem 
                        key={todo.id} 
                        todo={todo}
                        deleteTask={deleteTask}
                        handleToggle={handleToggle}
                        startEdit={startEdit}
                        saveEdit={saveEdit}
                        cancelEdit={cancelEdit}
                    />
                ))
            )}
        </div>
    )
}

export default ToDoList