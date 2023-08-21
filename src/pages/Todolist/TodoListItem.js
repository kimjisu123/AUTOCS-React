import React from 'react';
import { MdOutlineToggleOn , MdOutlineToggleOff , MdRemoveCircleOutline } from 'react-icons/md';
import styles from './TodoListItem.module.css';
import cn from 'classnames';  // 조건부 스타일링을 위 해 classnames를 사용함.


//  내가 입력한 할일 객체
const TodoListItem = ({todo, onRemove, onToggle }) => {
    const { id, text , checked } = todo;
    return (
        <div className={styles.TodoListItem}>
            <div className={cn(styles.checkbox , {[styles.checked]: checked})} onClick={() => onToggle(id)}>
                { checked? <MdOutlineToggleOn /> : <MdOutlineToggleOff />}
                <div className={styles.text}>{ text }</div>
            </div>
            <div className={styles.remove} onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};
export default React.memo(TodoListItem);  // 성능최적화를 위해 리랜더링을 방지하려 React.memo를 사용함. 컴포넌트의 props가 바뀌지 않은면 리랜더링 하지 않음.