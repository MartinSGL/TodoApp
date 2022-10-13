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
            // my way
            // let error:Homework = {_id:'',name:'error',status:'Done'}
            // let element:Homework = state.homeworks.find((el:Homework)=>el._id===action.payload) || error
            // let elements = state.homeworks.filter((el:Homework)=>el._id!==action.payload)

            // another possible way
            // let element = state.homeworks.find((el)=>el.id===action.payload)!
            // let element = state.homeworks.find((el)=>el.id===action.payload) as Homework
            // let elements = state.homeworks.filter((el)=>el.id!==action.payload)

            return {
                // ...elements,{...element,stutus:'Done'}
                homeworks:state.homeworks.map(el=>el._id===action.payload ? {...el,status:'Done'} :el)
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