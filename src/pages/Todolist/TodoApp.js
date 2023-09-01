import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import {useCallback, useRef, useState, useContext, useEffect} from "react";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {callDeleteTodoAPI, callGetTodoAPI, callInsertTodoAPI, callUpdateToggleAPI} from "../../apis/TodoAPICalls";
import {decodeJwt} from "../../util/tokenUtils";



const TodoApp = ( ) => {

    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const dispatch = useDispatch();
    const [todos, setTodos ] = useState({
        todoNo:'',
    });
    const [ value , setValue ] = useState('');
    // console.log("decodedToken.MemberNo1 {}",decodedToken.MemberNo);

    // 고유 아이디 붙여주기
    // const nextId = useRef(4);

    // 입력 값 전달.
    const onInsert = useCallback(
        async value => {

            const todoData = {
                todoNo: null,
                content: value,
                todoStatus: "N",
                // regDate: formattedDate,
                // upDate: null,
                memberNo: decodedToken.MemberNo,
                url: null
            };

            try {

                console.info("초기값2 {}",todoData);
                // Todo 추가 API 호출
                dispatch(callInsertTodoAPI(todoData));

                // Todo 추가 성공 시 추가 작업 수행

                // 값 초기화
                setValue('');
            } catch (error) {
                // Todo 추가 실패 시 처리
                console.error('Error adding Todo:', error);
            }

            window.location.reload();
        },[value]

    );

    //  할일 지우기 함수 filter 사용
    const onRemove = useCallback(
        memberTodoList => {
            console.log("투두 삭제 시작~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
            console.log("id {}" , memberTodoList);
            // setTodos(todos => todos.filter(todo => todo.id !== id));
            dispatch(callDeleteTodoAPI(memberTodoList)); // 할일 삭제 API 호출
            window.location.reload();
        },[dispatch],


    );

    // 할일 체크 함수
    const onToggle = useCallback(
        (todo) => {
            const todoData = {

                todoStatus: todo.todoStatus,
                memberNo: decodedToken.MemberNo,
                todoNo:todo.todoNo,
                checked:todo.checked


            };
            console.log("todoNo {}" , todo.todoNo);
            console.log("todoData {}" , todoData);
            console.log("todo.memberNo {}" , todo.memberNo);

            dispatch(callUpdateToggleAPI(todoData));

            window.location.reload();
        },[],
    );

    // 더블클릭시 내용 수정 함수
    const onUpdate = useCallback(
        id => {


            const todoToEdit = todos.find(todo => todo.id === id);
            const editedText = prompt('수정할 내용을 입력하세요', todoToEdit.text);

            if (editedText !== null) {
                const modifiedTodos = todos.map(todo =>
                    todo.id === id ? { ...todo, text: editedText || todo.text } : todo
                );
                setTodos(modifiedTodos);
            }
        },
        [todos]
    );

    return(
        <div className="popup" style={{opacity:"1", transform:"scaleX(1)"}}>
            {/*{ todoData.data && todoData.data.map( todo => (*/}
            {/*<React.StrictMode>*/}
            <TodoTemplate todos={todos} key={todos.id}>
                <TodoInsert onInsert={onInsert}/>
                <TodoList todos={todos} onRemove={ onRemove } onToggle={onToggle} onUpdate={onUpdate}/>
            </TodoTemplate>
            {/*</React.StrictMode>*/}
            {/*))}*/}

        </div>
    )

}

export default TodoApp;
