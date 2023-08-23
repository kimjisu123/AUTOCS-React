import MyMemoItem from "./MyMemoItem";

const MyMemoList = ({
        input,  //입력텍스트
        memos,  // 목록이 들어있는 객체
        onChangeInput,
        onInsert,
        onUpdate,
        onRemove,
    }) => {
        const onSubmit = e => {
            e.preventDefault();  // form의 새로고침 방지
            onInsert(input);
            onChangeInput(''); // 등록후 인풋 초기화
        };
        const onChange = e => onChangeInput(e.target.value);
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input value={input} onchange={{onChange}}/>
                    <button type="submit">등록</button>
                </form>
                <div>
                    {memos.map( memo => (
                        <MyMemoItem
                            todo={memo}
                            key={memo.id}
                            onUpdate={onUpdate}
                            onRemove={onRemove}
                        />
                        ))}
                </div>
            </div>
        );
    };
export default MyMemoList;