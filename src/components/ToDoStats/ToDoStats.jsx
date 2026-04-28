

import './ToDoStats.css'
const ToDoStats = ({ filteredTodosLength, todos, clearCompleted }) => {

    return (
        <>
            <div className="stats">
               <p>Total Task: {todos.length}</p>
               <p>Completed: {filteredTodosLength.length}</p>
               <button  onClick={clearCompleted}>Clear Completed Todos</button>
            </div>
        </>
    )
}

export default ToDoStats