import { MdCheckBoxOutlineBlank , MdCheckBox , MdRemoveCircleOutline } from 'react-icons/md';
import './TodoListItem.css';


//  내가 입력한 할일 객체
const TodoListItem = () => {

    return (
        <div className="TodoListItem">
            <div className="checkbox">
                <MdCheckBoxOutlineBlank />
                <div className='text'>작성한 할일</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};
export default TodoListItem;