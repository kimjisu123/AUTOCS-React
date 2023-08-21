import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import {useCallback, useRef, useState} from "react";
const TodoApp = () => {

    const [todos, setTodos ] = useState([

        {
            id:1,
            text:'내일 까지 보고 하기 ',
            checked: true,
        },
        {
            id:2,
            text:'8월 30일 까지 제안서 제출',
            checked: true,
        },
        {
            id:3,
            text:'영업부에 내용전달',
            checked: false,
        },
    ]);

    const nextId = useRef(4);

    const onInsert = useCallback(   // 값을 보낼때는 useCallback을 사용하여 성능 향상
        text => {
            const todo = {
                id:nextId.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo)); // 객체 추가
            nextId.current += 1; // id에 1씩 더하기
        }

    );

    return(
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos}/>
        </TodoTemplate>
        )

}

export default TodoApp;
