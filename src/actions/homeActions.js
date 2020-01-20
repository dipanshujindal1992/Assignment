import {  users } from '../api/api';
import {ADD_NEW_RECORD, DELETE_RECORD, GET_EMPLOYEE_LIST} from "./Types";


export function getEmployeesList() {
    return {
        type: GET_EMPLOYEE_LIST,
        payload: users.getEmployeesList()
    }
}
export function addNewEmployee( data) {
    return {
        type: ADD_NEW_RECORD,
        payload: users.addNewEmployee(data)
    }
}
export function deleteEmployee( data) {
    return {
        type: DELETE_RECORD,
        payload: users.deleteEmployee(data)
    }
}
