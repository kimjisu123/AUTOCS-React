import { connect } from "react-redux";
import { changeInput, insert, remove, update } from "../../../modules/memosModule";
import MyMemoList from "./MyMemoList";


const MyMemoTemplate = ({
                       input,
                       memos,
                       changeInput,
                       insert,
                       update,
                       remove,
                   }) => {

    return (
        <>
            <MyMemoList
                input={input}
                memos={memos}
                onChangeInput={changeInput}
                onInsert={insert}
                onUpDate={update}
                onRemve={remove}
            />
        </>
    );
};
export default connect(
    (memos) => ({
        input: memos.input,
        memos: memos.memos,

    }),
    {
        changeInput,
        insert,
        update,
        remove,

    },

)(MyMemoTemplate);

