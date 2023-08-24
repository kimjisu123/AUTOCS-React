import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import store from './store';
import App from './App';
import { createRoot } from 'react-dom/client';
import { createStore } from "redux";
import rootReducer from "./modules";
import {devToolsEnhancer} from "redux-devtools-extension";

const store = createStore(rootReducer, devToolsEnhancer());


const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
