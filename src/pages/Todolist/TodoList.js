import TodoListItem from "./TodoListItem";
import styles from './TodoList.module.css'
import React, {memo, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../util/tokenUtils";
import {callGetMemberTodoAPI} from "../../apis/TodoAPICalls";


const TodoList = ({todos, onRemove ,onToggle,onUpdate}) => {
    console.log('check todo', todos);
    const dispatch = useDispatch();

    const sortedTodoList = todos.data ? todos.data.slice().sort((a, b) => {
        return new Date(b.todoNo) - new Date(a.todoNo);
    }) : [];

    return (
        <div className={styles.TodoList}>
            {/*투두 리스트 map으로 넘겨주기*/}
            {sortedTodoList ? sortedTodoList.map( todo => (
                <React.StrictMode>
                <TodoListItem
                    todo={todo}
                    key={todo.key}
                    onRemove={ onRemove }
                    onToggle={ onToggle }
                    onUpdate={onUpdate}
                />
                </React.StrictMode>
            )):[]}
        </div>
    )
}
export default memo(TodoList); // 성능 최적화