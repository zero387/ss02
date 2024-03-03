import { combineReducers, createStore } from 'redux';
import { litData } from './reducer/Congviec';  
const rootReducer = combineReducers({ litData });
export const litData2 = createStore(rootReducer);  
