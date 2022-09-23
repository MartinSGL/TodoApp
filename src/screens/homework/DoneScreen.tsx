import React,{useContext} from 'react'
import { Text, View } from 'react-native'
import { Homework, TodoContext } from '../../contexts/TodoContext'
import { styles } from '../../theme/appTheme'

const RowDone = ({name}:Homework) => {
  return (
    <View>
      <View style={styles.rowTodoInProgress}>
        <Text style={{fontSize:20}}>{name}</Text>
        <Text style={{fontSize:25}}>✅</Text>
      </View>
      <View style={styles.hrTodoRow}/>
    </View>
  )
}

const DoneScreen = () => {
  const {todoState} = useContext(TodoContext)
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Work Done</Text>
      <View style={styles.hrHeader}/>

      {todoState.homeworks.length > 0 && todoState.homeworks.map((el)=>(
        el.status==='Done' &&
        <RowDone key={el.id.toString()} id={el.id} name={el.name} status={el.status}/>
      ))}

    </View>
  )
}

export default DoneScreen