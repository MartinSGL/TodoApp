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

            // let element = state.homeworks.find((el)=>el.id===action.payload)!
            // let element = state.homeworks.find((el)=>el.id===action.payload) as Homework
            // let elements = state.homeworks.filter((el)=>el.id!==action.payload)

            return {
                homeworks:state.homeworks.map(el=>el.id===action.payload ? {...el,status:'Done'} :el)
            }
        }
        default:
            return state
    }
}