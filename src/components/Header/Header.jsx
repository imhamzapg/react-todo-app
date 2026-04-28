import './Header.css'
const Header = ({setFilter,setSortBy}) => {
    return (
        <div className="header">
            <h1>My To-do list App</h1>
            <div className="selection">
                <select name="" id="" onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
            </select>
            <select name="" id="" onChange={(e) => setSortBy(e.target.value)}>
                <option value="createdAt">Date</option>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
            </select>
            </div>
        </div>
    )
}   
export default Header