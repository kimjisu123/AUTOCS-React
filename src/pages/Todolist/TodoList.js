import TodoListItem from "./TodoListItem";
import styles from './TodoList.module.css'
import React from 'react';

const TodoList = ({todos, onRemove ,onToggle,onUpdate}) => {

    return (
        <div className={styles.TodoList}>
            {/*투두 리스트 map으로 넘겨주기*/}
            {todos.map( todo => (
                <TodoListItem
                    todo={todo}
                    key={todo.id}
                    onRemove={ onRemove }
                    onToggle={ onToggle }
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    )
}
export default React.memo(TodoList); // 성능 최적화