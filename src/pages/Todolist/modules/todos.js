import { createAction, handleActions } from 'redux-actions';


// 모듈 만들기

/* 초기상태 설정 */
const initialState = {
    input:'',
    todos:[
        {
            id: 1,
            text: '할일1',
            done: true

        },
        {
            id: 2,
            text: '할일2',
            done: false

        },
    ]
};

/* 액션타입 정의하기  */
export const CHANGE_INPUT = 'todo/CHANGE_INPUT'; // 인풋 값 변경
export const INSERT = 'todo/INSERT'; // 새로운 TODO등록
export const TOGGLE = 'todo/TOGGLE'; // TODO체크등록해제
export const REMOVE = 'todo/REMOVE'; // TODO제거

export const changeInput = createAction ( CHANGE_INPUT, input => input);

let id= 3;  // 사전에 객체 두개를 미리 넣어둠 으로 3시작 나중에 수정!
export const insert = createAction(INSERT, text =>({
    id: id++, // insert가 호출 될 때마다 1씩 더해진다.
    text,
    done: false,

    //text를 넣으면 todo객채를 반환시킴
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction (REMOVE,id => id);

// 리듀서
const todos = handleActions({
        [CHANGE_INPUT]: (state, {payload:input}) => ({...state, input}),
        [INSERT]: (state, {payload:todo})=>({
            ...state,
            todos: state.todos.concat(todo),
        }),
        [TOGGLE]: (state , {payload:id}) => ({
            ...state,
            todos: state.todos.map(todo =>
                todo.id === id? {...todo, done: !todo.done} :todo),
        }),
        [REMOVE]: (state, {payload:id}) => ({
            ...state,
            todos: state.todos.filter(todo => todo.id !== id),
        }),
    },
    initialState
);
export default todos;