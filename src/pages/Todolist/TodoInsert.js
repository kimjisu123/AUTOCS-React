import { MdAdd } from 'react-icons/md';
import styles from './TodoInsert.module.css';
import {useCallback, useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {callGetMemberTodoAPI, callInsertTodoAPI} from "../../apis/TodoAPICalls";
import {decodeJwt} from "../../util/tokenUtils";




const TodoInsert = ({onInsert}) => {

    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const [ value , setValue ] = useState('');
    const dispatch = useDispatch();
    const memberTodoList = useSelector(state => state.todoReducer);

    // 멤버정보 가지고 오기
    useEffect(() => {

        console.log("decodedToken.MemberNo1 {}",decodedToken.MemberNo);

    }, []);


    // input 입력 이벤트
    const onChange= useCallback(e => {
        const inputValue = e.target.value.trim();
        if (inputValue === '') {
            alert("값을 입력하세요");
        } else {
            setValue(inputValue);
            console.info(inputValue);
        }
    },[]);  // use콜백 및 사용해서 쓸데없이 함수를 반복해서 불러오지 않기 성능 최적화를 위해


    // 버튼 클릭 이벤트 ( onSubmit으로 한 이유는 클릭과 enter둘다 사용가능하도록 하기위해 씀. onKeyPress이벤트를 따로 작성하지 않아도 됨.
    const onSubmit = useCallback(
        async e=> {

            if(e !== null){

                try {
                    console.table("초기값211111 {}",value);
                    // Todo 추가 API 호출
                    onInsert(value);
                    // 값 초기화
                    setValue('');
                } catch (error) {
                    // Todo 추가 실패 시 처리
                    console.error('Error adding Todo:', error);
                }
                e.preventDefault();
            } else {
                document.getElementById('inputElement').focus();
            }

        },
        [onInsert, value]
    );




    return (
        <form className={ styles.TodoInsert } onSubmit={ onSubmit }>
            {/*// form을 사용한 이유는 클릭과 엔터를 칠때 둘다 값이 들어가도록하기위해서 -> onPress코드를 또 입력하지 않아도됨. */}
            <input
                className={styles.todoinput}
                placeholder='할일을 입력하세요'
                value={ value }
                onChange={onChange}
            />

            <button type='submit'>
                <MdAdd />
            </button>
        </form>

    )
}
export default TodoInsert;