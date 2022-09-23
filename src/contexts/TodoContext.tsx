import React,{ createContext, useReducer, useState } from "react"
import { todoReducer } from "../reducers/todoReducer"

export interface TodoState {
    homeworks:Homework[]
}
export interface Homework {
    id:number 
    name:string
    status:'InProgress' | 'Done'
}

export const initialTodoState:TodoState = {
    homeworks:[
        {id:1,name:'Study React Native',status:'InProgress'},
        {id:2,name:'Study MERN Stack',status:'InProgress'},
        {id:3,name:'Storybook component documentation',status:'Done'},
    ]
}

export interface TodoConextProps {
    todoState:TodoState
    createHomework:(name:string) => void
    doneHomework:(id:number) => void
    isLoading:boolean,
    changeLoading:(loading:boolean)=>void
}

export const TodoContext = createContext({} as TodoConextProps)

export const TodoProvider = ({children}:any) =>{

    const [todoState, dispatch] = useReducer(todoReducer, initialTodoState)
    const [isLoading, setIsLoading] = useState(false)

    const createHomework = (name:string) =>{
        dispatch({type:'create',payload:name})
    }

    const doneHomework = (id:number) =>{
        dispatch({type:'done',payload:id})
    }

    const changeLoading = (loading:boolean) =>{
        setIsLoading(loading)
    }

    const data:TodoConextProps = {todoState,createHomework,doneHomework,isLoading,changeLoading}

    return (
        <TodoContext.Provider value={data}>
            {children}
        </TodoContext.Provider>
    )
}