import { Homework, TodoState } from '../contexts/TodoContext';

type TodoAction = 
    {type:'create', payload:string} |
    {type:'done', payload:number}

export const todoReducer = (state:TodoState,action:TodoAction):TodoState =>{
    switch (action.type) {
        case 'create':
            return {
                homeworks:[
                    ...state.homeworks,
                    {
                        id:(state.homeworks.length > 0
                         ? state.homeworks[state.homeworks.length-1].id +1
                         : 1),
                        name:action.payload,
                        status:'InProgress'
                    }
                ]
            }
        case 'done':{
            let error:Homework = {id:-1,name:'error',status:'Done'}
            let element:Homework = state.homeworks.find((el:Homework)=>el.id===action.payload) || error
            let elements = state.homeworks.filter((el:Homework)=>el.id!==action.payload)

            return {
                homeworks:[
                    ...elements,
                    {...element,status:'Done'}
                ]
            }
        }
        default:
            return state
    }
}