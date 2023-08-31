import React, {useEffect, useState} from 'react';
import { MdOutlineToggleOn , MdOutlineToggleOff , MdRemoveCircleOutline } from 'react-icons/md';
import styles from './TodoListItem.module.css';
import cn from 'classnames';
import {callGetMemberTodoAPI} from "../../apis/TodoAPICalls";  // 조건부 스타일링을 위 해 classnames를 사용함.


//  내가 입력한 할일 객체
const TodoListItem = ({todo, onRemove, onToggle,onUpdate }) => {

    const [shouldFetchData, setShouldFetchData] = useState(true);

    useEffect(() => {
        // 컴포넌트가 마운트되었을 때에만 todo를 가져오도록 API 호출

        callGetMemberTodoAPI(todo.id); // 여기에 적절한 아이디 사용 (e.g., todo.id)
        setShouldFetchData(false); // 호출 후 상태값 변경
    }, []);

    const { id, content , checked } = todo;
    console.log("todo================ {}", todo);

    return (



        <div className={styles.TodoListItem}>

            <div className={cn(styles.checkbox , {[styles.checked]: checked})} onClick={() => onToggle(id)} onDoubleClick={() => onUpdate(todo.id)}>
                { checked? <MdOutlineToggleOn /> : <MdOutlineToggleOff />}
                <div className={styles.text}>{ content }</div>
            </div>
            <div className={styles.remove} onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};
export default React.memo(TodoListItem);  // 성능최적화를 위해 리랜더링을 방지하려 React.memo를 사용함. 컴포넌트의 props가 바뀌지 않은면 리랜더링 하지 않음.


