import TodoListItem from "./TodoListItem";
import styles from './TodoList.module.css'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../util/tokenUtils";
import {callGetMemberTodoAPI} from "../../apis/TodoAPICalls";


const TodoList = ({todos, onRemove ,onToggle,onUpdate}) => {

    const dispatch = useDispatch();
    // 투두 리스트 가져오기
    const memberTodoList = useSelector(state => state.todoReducer);
    const [shouldFetchData, setShouldFetchData] = useState(true);

    useEffect(() => {
        if (shouldFetchData) {
            const decodedToken = decodeJwt(
                window.localStorage.getItem('accessToken')
            );
            if (decodedToken) {
                dispatch(callGetMemberTodoAPI(decodedToken.MemberNo));
            }
            setShouldFetchData(false);
        }
    }, [dispatch, shouldFetchData]);


    return (
        <div className={styles.TodoList}>
            {/*투두 리스트 map으로 넘겨주기*/}
            {memberTodoList.data ? memberTodoList.data.map( todo => (
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
export default React.memo(TodoList); // 성능 최적화