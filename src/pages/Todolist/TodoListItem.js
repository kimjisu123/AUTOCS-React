import { MdCheckBoxOutlineBlank , MdCheckBox , MdRemoveCircleOutline } from 'react-icons/md';
import './TodoListItem.css';
import cn from 'classnames';  // 조건부 스타일링을 위 해 classnames를 사용함.


//  내가 입력한 할일 객체
const TodoListItem = ({todo, onRemove, onToggle }) => {
    const { id, text , checked } = todo;
    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                { checked? <MdCheckBox /> : <MdCheckBoxOutlineBlank/>}
                <div className='text'>{ text }</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};
export default TodoListItem;