import styles from './TodoTemplate.module.css';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../util/tokenUtils";


const TodoTemplate = ({ children }) => {

    const [ todoCount , setTodoCount] = useState(0);
    const dispatch = useDispatch();
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    // 투두 리스트 가져오기
    const memberTodoList = useSelector(state => state.todoReducer);


    // memberTodoList의 data 길이를 todoCount로 설정
    useEffect(() => {

        if (memberTodoList.data) {
            setTodoCount(memberTodoList.data?.length);
            // console.log("memberTodoList {}", memberTodoList.data);
        }
    }, [children]);

    return (
        <div className={styles.TodoTemplate}>
            <div className={styles.appTitle}>TODOLIST<span className={styles.todoCount}>{todoCount}</span></div>
            <div className={styles.content}>{ children }</div>

        </div>
    )

}

export default TodoTemplate;