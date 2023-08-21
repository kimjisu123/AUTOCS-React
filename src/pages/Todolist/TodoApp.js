import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
const TodoApp = () => {
    return(
        <TodoTemplate>
            <TodoInsert />
            <TodoList />
        </TodoTemplate>
        )

}

export default TodoApp;
