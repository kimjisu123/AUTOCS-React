import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    // 엄격모드 해제 - 미지
    // <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    // </React.StrictMode>
);