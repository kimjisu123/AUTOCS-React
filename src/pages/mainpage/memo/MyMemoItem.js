
const MyMemoItem  = ({ memo, onUpdate, onRemove }) => {
    return (
        <>
            <input
                type="checkbox"
                onClick={() => onUpdate(memo.id)}
                onDoubleClick={memo.done}
                readOnly={true}

            />
            {/*메모 수정 활성화로 바꿔야함.*/}
            <span style={{textDecoration: memo.done? 'line-through' : 'none'}}>{memo.text}</span>
            <button onClick={() => onRemove(memo.id)}>삭제</button>
        </>
    );
};

export default MyMemoItem;
