import CheckBox from '@react-native-community/checkbox'
import React, { useContext, useEffect} from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { Homework, TodoContextApi } from '../../contexts/TodoContextApi';

const RowInProgress = ({name,_id}:Homework) => {
  const {doneHomework} = useContext(TodoContextApi)

  return (
    <View>
      <View style={styles.rowTodoInProgress}>
        <Text style={{fontSize:20}}>{name}</Text>
        <CheckBox onChange={()=>doneHomework(_id)}/>
      </View>
      <View style={styles.hrTodoRow}/>
    </View>
  )
}

const InProgressApiScreen = () => {

  const {todoState,getData} = useContext(TodoContextApi)

  useEffect(()=>{
    getData()
  },[])
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Task InProgress</Text>
      <View style={styles.hrHeader}/>

     {todoState.homeworks.length > 0 && todoState.homeworks.map((el)=>(
        el.status==='InProgress' &&
        <RowInProgress key={el._id} _id={el._id} name={el.name} status={el.status}/>
      ))} 

    </View>
  )
}

export default InProgressApiScreen