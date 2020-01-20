import axios from 'axios';
import { create } from 'apisauce'
import {API_HOST} from './constants';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const urlBuilder = (path) => {
    return `${API_HOST}/${path}`;
}

const API = {

        users: {


            getEmployeesList: () => {
                return axios.get(urlBuilder(`employees`))
                    .then((res) => {
                        return res;
                    })
                    .catch((err) => {
                        return err;
                    });
            },
           addNewEmployee: ( data) => {

                return axios.post(urlBuilder(`create`), data)
                    .then((res) => {
                        return res;
                    })
                    .catch((err) => {
                        return err;
                    });
            },
            deleteEmployee: ( id) => {

                return axios.delete(urlBuilder(`delete/${id}`))
                    .then((res) => {
                        return res;
                    })
                    .catch((err) => {
                        return err;
                    });
            },


        },
    }
;

module.exports = API;
