import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import rootReducer from "./pages/Todolist/modules";
import { Provider } from 'react-redux';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSITON__ && window.__REDUX_DEVTOOLS_EXTENSITON__()
);  // combineReducer로 여러개를 한꺼번에 묶은 Reducer

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
