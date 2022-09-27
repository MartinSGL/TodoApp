import React,{ createContext, useReducer, useState } from "react"
import { Alert } from "react-native"
import { reqResApi } from "../api/reqRes"
import { todoReducer } from "../reducers/todoReducerApi"

export interface TodoState {
    homeworks:Homework[]
}
export interface Homework {
    _id:string 
    name:string
    status:'InProgress' | 'Done'
}

export const initialTodoState:TodoState = {
    homeworks:[]
}

export interface TodoConextProps {
    todoState:TodoState
    createHomework:() => void
    doneHomework:(_id:string) => void
    isLoading:boolean
    changeLoading:(loading:boolean)=>void
    getData:()=>void
    error:string
    name:string
    setName: (name:string)=>void
    deleteHomework:(_id:string)=>void
    confirmDeleteHomework:(_id:string)=>void
}

export const TodoContextApi = createContext({} as TodoConextProps)

export const TodoProviderApi = ({children}:any) =>{

    const [todoState, dispatch] = useReducer(todoReducer, initialTodoState)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [name, setName] = useState('')

    const getData = async () => {
        try {
            let res = await reqResApi.get(`/`)
            if(res.data){
                dispatch({type:'get',payload:res.data})
            }
        } catch (error) {
            console.log(error)
        }
    }

    const createHomework = async () =>{
        try {
            if(name!==''){
                setError('')
                changeLoading(true)
                let res = await reqResApi.post('/',data)
                if(res.data){
                    dispatch({type:'create',payload:res.data})
                }
                setName('')
                changeLoading(false)
          
                Alert.alert(
                  "Information",
                  "The task was saved successfuly",
                  [
                    {
                      text: "Ok",
                      onPress: () => console.log('ok'),
                      style: "cancel",
                    },
                  ],
                )
          
            }else{
                setError('Task field is empty')
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const doneHomework = async (_id:string) =>{
        try {
            changeLoading(true)
            let res = await reqResApi.put(`/${_id}`)
            if(res.data){
                dispatch({type:'done',payload:_id})
            }
            changeLoading(false)

            Alert.alert(
                "Information",
                "The task was done successfuly",
                [
                  {
                    text: "Ok",
                    onPress: () => console.log('ok'),
                    style: "cancel",
                  },
                ],
              )
        } catch (error) {
            console.log(error)
        }
    }

    const confirmDeleteHomework =  (_id:string) =>{
        Alert.alert(
            "Information",
            "Are you sure to delete this task?",
            [
              {
                text: "Cancel",
                onPress: () => console.log('canceled'),
                style: "cancel",
              },
              {
                text: "Ok",
                onPress: () => deleteHomework(_id),
                style: "cancel",
              },
            ],
          )
    }

    const deleteHomework = async (_id:string) =>{
        try {
            changeLoading(true)
            let res = await reqResApi.delete(`/${_id}`)
            if(res.data){
                dispatch({type:'delete',payload:_id})
            }
            changeLoading(false)

            Alert.alert(
                "Information",
                "Task deleted successfully",
                [
                  {
                    text: "Ok",
                    onPress: () => console.log('ok'),
                    style: "cancel",
                  },
                ],
              )

        } catch (error) {
            console.log(error)
        }
    }

    const changeLoading = (loading:boolean) =>{
        setIsLoading(loading)
    }

    const data:TodoConextProps = {
        getData,
        todoState,
        createHomework,
        doneHomework,
        isLoading,
        changeLoading,
        error,
        name,
        setName,
        deleteHomework,
        confirmDeleteHomework
    }

    return (
        <TodoContextApi.Provider value={data}>
            {children}
        </TodoContextApi.Provider>
    )
}