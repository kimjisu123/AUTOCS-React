import MyMemoItem from "./MyMemoItem";
import MyMemoList from "./MyMemoList";


const MyMemoAPP = (  input,
                     memos,
                     changeInput,
                     insert,
                     update,
                     remove,) => {

    return (

        <>
                <MyMemoItem input={input}
                            memos={memos}
                            onChangeInput={changeInput}
                            onInsert={insert}
                            onUpDate={update}
                            onRemve={remove}/>
                <MyMemoList input={input}
                            memos={memos}
                            onChangeInput={changeInput}
                            onInsert={insert}
                            onUpDate={update}
                            onRemve={remove}/>
        </>
    )
}
export default MyMemoAPP;
