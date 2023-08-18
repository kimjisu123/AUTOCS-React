import TodolistCSS from './Todos.module.css';
import { useState } from 'react';

// todos 컴포넌트 와 TodoItem 컴포넌트 두개를 한곳에 같이 넣음   (2개 )
// 해야할일을 추가 , 체크 삭제 가능한 목록 컴포넌트로 만든다!!

import todos from "../modules/todos";

// 투두 입력 체크 삭제 컴포넌트
const TodoItem = ({ todos, onToggle, onRemove }) => {

    return (
        <div>
            <input
                type="checkbox"
                onClick={() => onToggle(todos.id)}
                checked={todos.done}
                readOnly={true}
            />
            {/* 할일 텍스트 */}
            <span style={{textDecoration : todos.done? 'line-through' :' none'}}>
                {todos.text}
                </span>
            {/*삭제 버튼 */}
            <button onClick={ () => onRemove(todos.id)}>삭제</button>
        </div>
    );
};


// 투두리스트 등록 컴포넌트

const Todos = ({

                      input,    // 인풋에 입력되는 텍스트
                      todos,    // 할일 목록이 들어있는 객체
                      onChangeInput,
                      onInsert,
                      onToggle,
                      onRemove,
                  }) => {

    const onSubmit = e => {
        e.preventDefault(); // 내용확인
        onInsert(input);
        onChangeInput(''); // 등록 후 인풋 초기화
    };
    const onChange = e => onChangeInput(e.target.value);

    return (

        <div className='todo-list'>
            <form onSubmit={onSubmit} className='todo-form'>
                <input value={input} onChange={onChange} />
                <button type="submit">등록</button>{/* 등록 버튼 나중에 비동기화 해야하기때문에 form을 바꿈.*/}
            </form>
            <div>
                {/*생성되는 todo목록 */}
                { todos && todos.map(todo =>(
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    );

};
export default Todos;
