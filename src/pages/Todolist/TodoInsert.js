import { MdAdd } from 'react-icons/md';
import styles from './TodoInsert.module.css';
import {useCallback, useEffect, useState} from "react";
import {callGetEmployeeAPI} from "../../apis/MemberAPICalls";
import { useDispatch, useSelector } from 'react-redux';
import {callInsertTodoAPI} from "../../apis/TodoAPICalls";

const TodoInsert = ({onInsert}) => {
    const [ value , setValue ] = useState('');
    const dispatch = useDispatch();
    const memberData = useSelector(state => state.memberReducer);

    // 멤버정보 가지고 오기
    // useEffect(  ()=>{
    //     dispatch(callInsertTodoAPI());
    // }, []);



    // input 입력 이벤트
    const onChnage= useCallback(e => {
        setValue(e.target.value);
    },[]);  // use콜백 및 사용해서 쓸데없이 함수를 반복해서 불러오지 않기 성능 최적화를 위해


    // 버튼 클릭 이벤트 ( onSubmit으로 한 이유는 클릭과 enter둘다 사용가능하도록 하기위해 씀. onKeyPress이벤트를 따로 작성하지 않아도 됨.
    const onSubmit = useCallback(
        e=> {
            callInsertTodoAPI(value)
                .then(response => {
                    // Todo 추가 성공 시 추가 작업 수행
                    console.log('Todo added:', response);
                    const todoData = new FormData();
                    todoData.append(value);
                })
                .catch(error => {
                    // Todo 추가 실패 시 처리
                    console.error('Error adding Todo:', error);
                });
            setValue(''); // 값 초기화

        //submit이벤트는 브라우저 새로고침을 발생시킨다 이를 방지하기 위해 아래 함수를 호출시킨다.
            e.preventDefault();

        },[value],
    );




    return (
        <form className={ styles.TodoInsert } onSubmit={ onSubmit }>
            {/*// form을 사용한 이유는 클릭과 엔터를 칠때 둘다 값이 들어가도록하기위해서 -> onPress코드를 또 입력하지 않아도됨. */}
            <input
                className={styles.todoinput}
                placeholder='할일을 입력하세요'
                value={ value }
                onChange={onChnage}
            />

            <button type='submit'>
                <MdAdd />
            </button>
        </form>

    )
}
export default TodoInsert;