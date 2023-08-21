import { MdAdd } from 'react-icons/md';
import styles from './TodoInsert.module.css';
import {useCallback, useState} from "react";


const TodoInsert = ({onInsert}) => {
    const [ value , setValue ] = useState('');

    // input 입력 이벤트
    const onChnage= useCallback(e => {
        setValue(e.target.value);
    },[]);  // use콜백 및 사용해서 쓸데없이 함수를 반복해서 불러오지 않기 성능 최적화를 위해


    // 버튼 클릭 이벤트 ( onSubmit으로 한 이유는 클릭과 enter둘다 사용가능하도록 하기위해 씀. onKeyPress이벤트를 따로 작성하지 않아도 됨.
    const onSubmit = useCallback(
        e=> {
            onInsert(value);
            setValue(''); // 값 초기화

        //submit이벤트는 브라우저 새로고침을 발생시킨다 이를 방지하기 위해 아래 함수를 호출시킨다.
            e.preventDefault();

        },[onInsert,value],
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