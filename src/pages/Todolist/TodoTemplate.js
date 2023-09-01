import styles from './TodoTemplate.module.css';
import {useEffect, useState} from "react";


const TodoTemplate = ({ children , todos }) => {

    const [ todoCount , setTodoCount] = useState(4);

    useEffect(()=> {
        setTodoCount(todos.length);
    },[todos])

    return (
        <div className={styles.TodoTemplate}>
            <div className={styles.appTitle}>TODOLIST<span className={styles.todoCount}>{todoCount}</span></div>
            <div className={styles.content}>{ children }</div>
        </div>
    )

}

export default TodoTemplate;