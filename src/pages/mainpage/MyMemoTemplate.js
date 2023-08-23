
import { connect } from "react-redux";
import {changeInput, insert, remove, update } from "./modules/myMemo";
import MyMemoAPP from "./MyMemoAPP";


const MyMemoTemplate = ({
                       input,
                       memos,
                       changeInput,
                       insert,
                       update,
                       remove,
                   }) => {

    return (
            <MyMemoAPP
                input={input}
                memos={memos}
                onChangeInput={changeInput}
                onInsert={insert}
                onUpDate={update}
                onRemve={remove}
            />
    )
}
export default connect(
    ({memos}) => ({
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

