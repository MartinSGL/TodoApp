import { Homework, TodoState } from '../contexts/TodoContextApi';

type TodoAction = 
    {type:'get', payload:Homework[]} |
    {type:'create', payload:Homework} |
    {type:'done', payload:string} |
    {type:'delete', payload:string} 

export const todoReducer = (state:TodoState,action:TodoAction):TodoState =>{
    switch (action.type) {
        case 'get':
            return {
                homeworks:action.payload
            }
        case 'create':
            return {
                homeworks:[
                    ...state.homeworks,action.payload
                ]
            }
        case 'done':{
            let error:Homework = {_id:'',name:'error',status:'Done'}
            let element:Homework = state.homeworks.find((el:Homework)=>el._id===action.payload) || error
            let elements = state.homeworks.filter((el:Homework)=>el._id!==action.payload)

            return {
                homeworks:[
                    ...elements,
                    {...element,status:'Done'}
                ]
            }
        }

        case 'delete':{
            let elements = state.homeworks.filter((el:Homework)=>el._id!==action.payload)
            return {
                homeworks:elements
            }
        }
        default:
            return state
    }
}