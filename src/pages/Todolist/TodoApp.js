import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import {useCallback, useRef, useState, useContext, useEffect} from "react";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    callDeleteTodoAPI,
    callInsertTodoAPI,
    callUpdateTodoAPI,
    callUpdateToggleAPI
} from "../../apis/TodoAPICalls";
import {decodeJwt} from "../../util/tokenUtils";
import Modal from "react-modal";



const TodoApp = ( ) => {

    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const dispatch = useDispatch();
    const [todos, setTodos ] = useState({

        todoNo: "",
        content: "",
        todoStatus: "",
        memberNo: "",
        url: ""
    });
    const [ value , setValue ] = useState('');

    // 입력 값 전달.
    const onInsert = useCallback(
        async value => {

            const todoData = {
                ...todos,
                todoNo: null,
                content: value,
                todoStatus: "N",
                memberNo: decodedToken.MemberNo,
                url: null
            };

            try {

                console.info("초기값2 {}", todoData);
                // Todo 추가 API 호출
                dispatch(callInsertTodoAPI(todoData));

                // Todo 추가 성공 시 추가 작업 수행

                // 값 초기화
                setValue('');
            } catch (error) {
                // Todo 추가 실패 시 처리
                console.error('Error adding Todo:', error);
            }

            // window.location.reload();
        },[]

    );

    //  할일 지우기 함수 filter 사용
    const onRemove = useCallback(
        memberTodoList => {
            console.log("투두 삭제 시작~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
            console.log("id {}" , memberTodoList);
            setTodos({
                ...memberTodoList,
                memberNo: memberTodoList.memberNo
            });
            // setTodos(todos => todos.filter(todo => todo.id !== id));
            dispatch(callDeleteTodoAPI(memberTodoList)); // 할일 삭제 API 호출
            // window.location.reload();
        },[],


    );

    // 할일 체크 함수
    const onToggle = useCallback(
        todo => {
            const todoData = {
                ...todo,
                todoStatus: todo.todoStatus,
                memberNo: decodedToken.MemberNo,
                todoNo:todo.todoNo,
                checked:todo.checked
            };
            dispatch(callUpdateToggleAPI(todoData));
        },[dispatch, callUpdateToggleAPI, decodedToken.MemberNo],
    );

    // 더블클릭시 내용 수정 함수
    const onUpdate = useCallback(
        todo => {
            const editedText = prompt('수정할 내용을 입력하세요', todo.content);
            if (editedText !== null) {
                const todoData = {
                    content: editedText,
                    memberNo: decodedToken.MemberNo,
                    todoNo:todo.todoNo,

                };
                console.log(" onUpdate todoNo {}" , todo.todoNo);
                console.log(" onUpdate todoData {}" , todoData);
                console.log(" onUpdate todos.content {}" , editedText);
                dispatch(callUpdateTodoAPI(todoData));
            }

        },[],
    );




    return(
        <div className="popup" style={{opacity:"1", transform:"scaleX(1)"}}>
            {/*{ todoData.data && todoData.data.map( todo => (*/}
            <React.StrictMode>
            <TodoTemplate todos={todos} key={todos.id}>
                <TodoInsert onInsert={onInsert}/>
                <TodoList todos={todos} onRemove={ onRemove } onToggle={onToggle} onUpdate={onUpdate}/>
            </TodoTemplate>
            </React.StrictMode>
            {/*))}*/}

        </div>
    )

}

export default TodoApp;
