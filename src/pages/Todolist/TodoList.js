import TodoListItem from "./TodoListItem";
import styles from './TodoList.module.css'
import React, {memo, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../util/tokenUtils";
import {callGetMemberTodoAPI} from "../../apis/TodoAPICalls";


const TodoList = ({ onRemove ,onToggle,onUpdate}) => {

    const dispatch = useDispatch();
    // 투두 리스트 가져오기
    const memberTodoList = useSelector(state => state.todoReducer);
    const [shouldFetchData, setShouldFetchData] = useState(true);


    const sortedTodoList = memberTodoList.data ? memberTodoList.data.slice().sort((a, b) => {
        return new Date(b.todoNo) - new Date(a.todoNo);
    }) : [];


    useEffect(() => {
        // if (shouldFetchData) {
            const decodedToken = decodeJwt(
                window.localStorage.getItem('accessToken')
            );
            if (decodedToken) {
                dispatch(callGetMemberTodoAPI(decodedToken.MemberNo));
            }
            setShouldFetchData(false);
        // }
    }, [memberTodoList]);


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