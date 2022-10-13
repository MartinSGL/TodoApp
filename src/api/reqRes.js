import axios from "axios";

export const reqResApi = axios.create({
    baseURL: 'http://192.168.100.12:5001/api/v1/todos'
})