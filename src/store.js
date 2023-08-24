import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './modules';
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;