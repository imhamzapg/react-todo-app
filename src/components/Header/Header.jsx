
import './Header.css'
const Header = ({setFilter}) => {
    return (
        <div className="header">
            <h1>My To-do list App</h1>
            <select name="" id="" onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    )
}   
export default Header