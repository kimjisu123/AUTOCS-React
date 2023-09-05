import React, {useEffect, useState} from 'react';
import {
    MdOutlineToggleOn,
    MdOutlineToggleOff,
    MdRemoveCircleOutline,
    MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdModeEditOutline
} from 'react-icons/md';
import styles from './TodoListItem.module.css';
import cn from 'classnames';



//  내가 입력한 할일 객체
const TodoListItem = ({ todo, onRemove, onToggle,onUpdate }) => {

    const { todoNo, content , todoStatus } = todo;

    return (
        // cn은 [변경될 클래스명] : 조건 값 에 따라 본래 클래스 명이 변경된다!
        // {[styles.checked]: checked, [styles.someOtherClass]: todoStatus === 'N'}

        <div className={styles.TodoListItem}>
            <div className={cn(styles.checkbox , {[styles.checked]: todoStatus === 'Y'})} onClick={() => onToggle(todo)} onDoubleClick={() => onUpdate(todo)}>
                { todoStatus === 'N'? <MdOutlineCheckBoxOutlineBlank /> : <MdOutlineCheckBox/>}
                <div className={styles.text}>{ content }</div>
            </div>
            <div className={styles.modi} onClick={() => onUpdate(todo)}>
                <MdModeEditOutline />
            </div>
            <div className={styles.remove} onClick={() => onRemove(todo)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};
export default TodoListItem;  // 성능최적화를 위해 리랜더링을 방지하려 React.memo를 사용함. 컴포넌트의 props가 바뀌지 않은면 리랜더링 하지 않음.


