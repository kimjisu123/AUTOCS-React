import TodoListItem from "./TodoListItem";
import styles from './TodoList.module.css'
import React, {useEffect, useState} from 'react';
import {decodeJwt} from "../../util/tokenUtils";
import {useDispatch, useSelector} from "react-redux";
import {callGetMemberTodoAPI} from "../../apis/TodoAPICalls";

const TodoList = ({todos, onRemove ,onToggle,onUpdate}) => {

    const dispatch = useDispatch();
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    // 투두 리스트 가져오기
    const memberTodoList = useSelector(state => state.todoReducer);
    const [shouldFetchData, setShouldFetchData] = useState(true);

    useEffect(() => {
        if (decodedToken) {
            dispatch(callGetMemberTodoAPI(decodedToken.MemberNo));
            setShouldFetchData(false); // 호출 후 상태값 변경
        }
    }, []);



    return (
        <div className={styles.TodoList}>
            {/*투두 리스트 map으로 넘겨주기*/}
            {memberTodoList.data && memberTodoList.data.map( todo => (
                <React.StrictMode>
                <TodoListItem
                    todo={todo}
                    key={todo.key}
                    onRemove={ onRemove }
                    onToggle={ onToggle }
                    onUpdate={onUpdate}
                />
                </React.StrictMode>
            ))}
        </div>
    )
}
export default React.memo(TodoList); // 성능 최적화