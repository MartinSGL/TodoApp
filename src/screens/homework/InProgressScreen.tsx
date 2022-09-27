import CheckBox from '@react-native-community/checkbox'
import React, { useContext } from 'react'
import { Text, View, Alert } from 'react-native'
import { TodoContext } from '../../contexts/TodoContext'
import { styles } from '../../theme/appTheme'
import { Homework } from '../../contexts/TodoContext'

const RowInProgress = ({name,id}:Homework) => {
  const {doneHomework,changeLoading} = useContext(TodoContext)

  const done = () => {
    changeLoading(true)
      setTimeout(()=>{
        doneHomework(id)
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

      },1500)
  }

  return (
    <View>
      <View style={styles.rowTodoInProgress}>
        <Text style={{fontSize:20}}>{name}</Text>
        <CheckBox onChange={done}/>
      </View>
      <View style={styles.hrTodoRow}/>
    </View>
  )
}

const InProgressScreen = () => {

  const {todoState} = useContext(TodoContext)

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Task InProgress</Text>
      <View style={styles.hrHeader}/>

      {todoState.homeworks.length > 0 && todoState.homeworks.map((el)=>(
        el.status==='InProgress' &&
        <RowInProgress key={el.id.toString()} id={el.id} name={el.name} status={el.status}/>
      ))}

    </View>
  )
}

export default InProgressScreen