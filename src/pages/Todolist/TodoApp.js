import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import {useCallback, useRef, useState} from "react";
const TodoApp = () => {

    const [todos, setTodos ] = useState([
    // 초기값.
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

    // 고유 아이디 붙여주기
    const nextId = useRef(4);

    // 입력 값 전달.
    const onInsert = useCallback(   // 값을 보낼때는 useCallback을 사용하여 성능 향상
        text => {
            const todo = {
                id:nextId.current,
                text,
                checked: false,
            };
            setTodos(todos => todos.concat(todo)); // 객체 추가
            nextId.current += 1; // id에 1씩 더하기
        }

    );

    //  할일 지우기 함수 filter 사용
    const onRemove = useCallback(
        id => {
            setTodos(todos => todos.filter(todo => todo.id !== id));
        },[],
    );

    // 할일 체크 함수
    const onToggle = useCallback(
        id => {
            setTodos(todos=>
                todos.map(todo =>
                todo.id === id? { ...todo, checked: !todo.checked} : todo,
                ),
            );
        },[],
    );


    return(
        <TodoTemplate>
            <TodoList todos={todos} onRemove={ onRemove } onToggle={onToggle}/>
            <TodoInsert onInsert={onInsert}/>
        </TodoTemplate>
        )

}

export default TodoApp;
