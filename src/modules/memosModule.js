// import { createActions, handleActions } from 'redux-actions';
//
//
// //초기값설정
// const initialState = {
//     input:'',
//     memos:[
//         {
//             id :4,
//             text: '메모1',
//             done:true
//         },
//         {
//             id :5,
//             text: '메모2',
//             done:true
//         }
//     ]
// };
//
// export const POST_MEMO = 'memo/POST_MEMO';
// export const ADD_INSERT = 'memo/ADD_INSERT';
// export const P0ST_UPDATE = 'memo/P0ST_UPDATE';
// export const POST_REMOVE = 'memo/POST_REMOVE';
//
//
//
// //액션 ================================================================================
// export const changeInput = input => ({
//     type:POST_MEMO,
//     input
// });
//
// let id = 3; // 지정 인덱스
//
// //메모 입력
// export const insert = text => ({
//     type: ADD_INSERT,
//     memo: {
//         id:id++,
//         text,
//     }
// });
//
//
// // 메모 수정 액션
// export const update = id => ({
//     type: P0ST_UPDATE,
//     id
// });
//
//
// //메모 지우기
// export const remove = id => ({
//     type: POST_REMOVE,
//     id
// })
//
// // 리듀서 ==================================================================================================================
//
// export function memosModule(state = initialState, action ) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input
//             };
//         case INSERT:
//             return {
//                 ...state,
//                 memos: state.memos.concat(action.memo)
//             };
//         case UPDATE:
//             return {
//                 ...state,
//                 memos: state.memos.map(memo =>
//                 memo.id === action.id? {...memo , done: !memo.done} : memo)
//             };
//         case POST_REMOVE:
//             return {
//                 ...state,
//                 memos: state.memos.filter(memo => memo.id !== action.id)
//             };
//         default:
//             return state;
//     }
// }
