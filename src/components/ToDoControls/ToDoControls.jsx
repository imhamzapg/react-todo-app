
import './ToDoControls.css'
const ToDoControls = ({ searchValue, setSearchValue }) => {

    return (
        <div className="toDoControls">
            <input placeholder='Search for Task!' onKeyDown={(e) => e.key === "Enter" && e.preventDefault()} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" />
        </div>
    )
}
export default ToDoControls