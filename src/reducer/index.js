import { combineReducers } from 'redux'
import HomeReducer from "./HomeReducer";

const reducers = combineReducers({
    HomeReducer: HomeReducer,
})

export default reducers;
