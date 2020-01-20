import * as types from '../actions/Types';
import {strings} from '../utils/Strings';
import {GET_EMPLOYEE_LIST} from "../actions/Types";
import {ADD_NEW_RECORD} from "../actions/Types";
import {debug} from "react-native-reanimated";

const initialState = {
    //employeeList: [],
    response: null,
    error: null,
};


const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEE_LIST:
            console.log('payload-->>', action.payload.data.data.length);


            if (action.payload/* && action.payload.data && action.payload.data.code === 200*/) {
                const employeeList = action.payload.data;
                return {
                    ...state,
                    employeeList,

                };
            } else {
                return {
                    ...state,
                };
            }
        /* if (action.statusCode) {
             if (action.statusCode === 200) {
                 return {
                     ...state, response: action.response, error: null
                 };
             } else if (action.statusCode === 400) {
                 return {
                     ...state, response: null, error: strings.ERROR_400
                 };
             } else if (action.statusCode === 401) {
                 return {
                     ...state, response: null, error: strings.ERROR_401
                 };
             } else if (action.statusCode === 429) {
                 return {
                     ...state, response: null, error: strings.ERROR_429
                 };
             } else {
                 return {...state, response: null, error: strings.ERROR};
             }
         } else {
             return {...state, response: null, error: strings.ERROR};

         }*/

        case ADD_NEW_RECORD:
            debugger
            console.log('payload-->>', action.payload.status);
            if (action.payload/* && action.payload.data && action.payload.data.code === 200*/) {
                const addNewEmployee = action.payload.data;
                let previousEmployee = state.employeeList.data.data;

                let newRecord = Object.fromEntries(
                    // convert to array, map, and then fromEntries gives back the object
                    Object.entries(addNewEmployee).map(([key, value]) => ["employee_"+key,value])
                );
                console.log("--",JSON.stringify(previousEmployee.data))

                previousEmployee.push(newRecord)

                debugger
                return {
                    ...state,
                    addNewEmployee,

                };
            } else {
                return {
                    ...state,
                };
            }
        case types.FAILURE:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default HomeReducer;
