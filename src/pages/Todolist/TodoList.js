import TodoListItem from "./TodoListItem";
import './TodoList.css'

const TodoList = ({todos}) => {

    return (
        <div className="TodoList">
            {/*투두 리스트 map으로 넘겨주기*/}
            {todos.map( todo => (
                <TodoListItem todo={todo} key={todo.id}/>
            ))}
        </div>
    )
}
export default TodoList;