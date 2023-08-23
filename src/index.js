import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { createRoot } from 'react-dom/client';
import { devToolsEnhancer} from "redux-devtools-extension";
import {createStore} from "redux";
import rootReducer from "./modules";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
// const store = createStore(rootReducer, devToolsEnhancer())

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
