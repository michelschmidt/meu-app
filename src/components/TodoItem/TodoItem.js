const TodoItem = ({pizza}) => {
    return(
        <li className="todo-item">
            <input type="checkbox"/>
            { pizza }
        </li>
    );
}
export default TodoItem;