const CHANGE_INPUT = 'memo/CHANGE_INPUT';
const INSERT = 'memo/INSERT';
const UPDATE = 'memo/UPDATE';
const REMOVE = 'memo/REMOVE';


//액션 ================================================================================
export const changeInput = input => ({
    type:CHANGE_INPUT,
    input
});

let id = 3; // 지정 인덱스

//메모 입력
export const insert = text => ({
    type: INSERT,
    memo: {
        id:id++,
        text,
    }
});


// 메모 수정 액션
export const update = id => ({
    type: UPDATE,
    id
});


//메모 지우기
export const remove = id => ({
    type: REMOVE,
    id
})

// 리듀서 ==================================================================================================================

const initialState = {
    input:'',
    memos:[
        {
            id :1,
            text: '메모1',
            done:true
        },
        {
            id :2,
            text: '메모2',
            done:true
        }
    ]
};

function memos(state = initialState, action ) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case INSERT:
            return {
                ...state,
                memos: state.memos.concat(action.memo)
            };
        case UPDATE:
            return {
                ...state,
                memos: state.memos.map(memo =>
                memo.id === action.id? {...memo ,done: !memo.done} :memo)
            };
        case REMOVE:
            return {
                ...state,
                memos:state.memos.filter(memo => memo.id !== action.id)
            };
        default:
            return state;
    }
}
export default memos;