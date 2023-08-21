import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';

const TodoInsert = () => {

    return (
        <form className="TodoInsert">
            {/*// form을 사용한 이유는 클릭과 엔터를 칠때 둘다 값이 들어가도록하기위해서 -> onPress코드를 또 입력하지 않아도됨. */}
            <input placeholder='할일을 입력하세요'/>
            <button type='submit'>
                <MdAdd />
            </button>
        </form>

    )
}
export default TodoInsert;