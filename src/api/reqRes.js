import axios from "axios";

export const reqResApi = axios.create({
    baseURL: 'http://10.0.104.62:5001/api/v1/todos'
})