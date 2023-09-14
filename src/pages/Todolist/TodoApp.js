import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import {useCallback, useRef, useState, useContext, useEffect} from "react";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    callDeleteTodoAPI, callGetMemberTodoAPI,
    callInsertTodoAPI,
    callUpdateTodoAPI,
    callUpdateToggleAPI
} from "../../apis/TodoAPICalls";
import {decodeJwt} from "../../util/tokenUtils";
import Modal from "react-modal";
import swal from 'sweetalert';



const TodoApp = ( ) => {

    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const dispatch = useDispatch();
    const memberTodoList = useSelector(state => state.todoReducer);
    const [todos, setTodos ] = useState([{

        todoNo: "",
        content: "",
        todoStatus: "",
        memberNo: "",
        url: ""
    }]);

    useEffect(() => {
        const decodedToken = decodeJwt(
            window.localStorage.getItem('accessToken')
        );
        if (decodedToken) {
            dispatch(callGetMemberTodoAPI(decodedToken.MemberNo));
        }
        console.log('memberTodoList ', memberTodoList);
        setTodos(memberTodoList);

    }, [todos]);

    const currentDate = new Date();
    // 시간 부분을 모두 0으로 설정
    currentDate.setHours(0, 0, 0, 0);
    // 원하는 형식으로 날짜 포맷팅
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

    // 입력 값 전달.
    const onInsert =
        (value) => {

            const todoData = {
                ...todos,
                todoNo: null,
                content: value,
                todoStatus: "N",
                regDate: formattedDate,
                memberNo: decodedToken.MemberNo,
                url: null
            };

            try {

                // Todo 추가 API 호출
                dispatch(callInsertTodoAPI(todoData));

                setTodos({
                    ...memberTodoList,
                    memberNo: decodedToken.MemberNo,
                    content: value,

                });
                // Todo 추가 성공 시 추가 작업 수행
                // window.location.reload();   //  입력이 잘안되므로 새로고침하려면 이거 풀고하자
                // 값 초기화
            } catch (error) {
                // Todo 추가 실패 시 처리
                console.error('Error adding Todo:', error);
            }

        };

    //  할일 지우기 함수 filter 사용
    const onRemove = (memberTodoList) => {
            setTodos({
                ...memberTodoList,
                memberNo: memberTodoList.memberNo
            });
            dispatch(callDeleteTodoAPI(memberTodoList)); // 할일 삭제 API 호출

        };

    // 할일 체크 함수
    const onToggle = (memberTodoList) => {
            setTodos ( {
                ...memberTodoList,
                todoStatus: memberTodoList.todoStatus,
                memberNo: decodedToken.MemberNo,
                todoNo:memberTodoList.todoNo,
                checked:memberTodoList.checked
            });
            dispatch(callUpdateToggleAPI(memberTodoList));
        };

    // 더블클릭시 내용 수정 함수
    const onUpdate = (memberTodoList) => {
            const editedText = swal("수정할 내용을 입력해주세요:", {
                content: "input",
            })
                .then((value) => {
                    if(value !== null && value !== " "){
                    swal("수정이 완료 되었습니다.");
                    const todoData = {
                        ...memberTodoList,
                        content: value,
                        memberNo: decodedToken.MemberNo,
                        todoNo:memberTodoList.todoNo,
                    };
                    console.log(" onUpdate value {}" , value);
                    dispatch(callUpdateTodoAPI(todoData));
                    setTodos(todoData);
                    } else {
                        swal("입력된 값이 없습니다.");
                    }
                });
        };




    return(
        <div className="popup" style={{opacity:"1", transform:"scaleX(1)"}}>
            {/*{ todoData.data && todoData.data.map( todo => (*/}
            <React.StrictMode>
            <TodoTemplate>
                <TodoInsert onInsert={onInsert}/>
                <TodoList todos={memberTodoList} onRemove={ onRemove } onToggle={onToggle} onUpdate={onUpdate}/>
            </TodoTemplate>
            </React.StrictMode>
            {/*))}*/}

        </div>
    )

}

export default TodoApp;
