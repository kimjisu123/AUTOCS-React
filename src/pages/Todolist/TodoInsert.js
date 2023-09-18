import { MdAdd } from 'react-icons/md';
import styles from './TodoInsert.module.css';
import {useRef, useState} from "react";
import { useDispatch , useSelector } from 'react-redux';
import {decodeJwt} from "../../util/tokenUtils";
import {useNavigate} from "react-router-dom";
import swal from "sweetalert";


const TodoInsert = ({onInsert}) => {

    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const [ value , setValue ] = useState('');
    const dispatch = useDispatch();
    const memberTodoList = useSelector(state => state.todoReducer);
    const naviage = useNavigate();



    // input 입력 이벤트
    const inputRef = useRef(null);

    const onChange= (e) => {
        const inputValue = e.target.value;
            setValue(inputValue);

    };  // use콜백 및 사용해서 쓸데없이 함수를 반복해서 불러오지 않기 성능 최적화를 위해


    // 버튼 클릭 이벤트 ( onSubmit으로 한 이유는 클릭과 enter둘다 사용가능하도록 하기위해 씀. onKeyPress이벤트를 따로 작성하지 않아도 됨.
    const onSubmit =
        (e) => {

            if(value !== null && value.trim() !== ''){
                console.log("입력값 {}" , value);
                try {
                    // Todo 추가 API 호출
                    onInsert(value);
                    // 값 초기화
                    setValue('');
                } catch (error) {
                    // Todo 추가 실패 시 처리
                    console.error('Error adding Todo:', error);
                    swal("등록에 실패했습니다.");
                }
                e.preventDefault();
            } else {

                // 빈값을 입력했을때 알럿창과 입력창 포커스
                e.preventDefault();
                swal('값을 입력해주세요.').then(() => {
                    if (inputRef.current) {
                        inputRef.current.focus();
                    }});
            }

        };

    return (
        <form className={ styles.TodoInsert } onSubmit={ onSubmit }>
            {/*// form을 사용한 이유는 클릭과 엔터를 칠때 둘다 값이 들어가도록하기위해서 -> onPress코드를 또 입력하지 않아도됨. */}
            <input
                className={styles.todoinput}
                placeholder='할일을 입력하세요'
                value={ value }
                onChange={onChange}
                ref={inputRef} // ref 설정
            />

            <button type='submit'>
                <MdAdd />
            </button>
        </form>

    )
}
export default TodoInsert;