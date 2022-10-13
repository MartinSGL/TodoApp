import React,{useContext, useEffect} from 'react'
import { ScrollView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Homework, TodoContextApi } from '../../contexts/TodoContextApi';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colores, styles } from '../../theme/appTheme'

const RowDone = ({_id,name}:Homework) => {
  const {confirmDeleteHomework}  = useContext(TodoContextApi)
  return (
    <View>
      <View style={styles.rowTodoInProgress}>
        <Text style={{fontSize:20}}>✅ {name}</Text>
        <TouchableOpacity onPress={()=>confirmDeleteHomework(_id)}>  
          <Icon name='trash-alt' size={20} color={colores.danger}/>
        </TouchableOpacity>
      </View>
      <View style={styles.hrTodoRow}/>
    </View>
  )
}

const DoneApiScreen = () => {
  const {todoState,getData} = useContext(TodoContextApi)

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Task Done</Text>
      <View style={styles.hrHeader}/>
      <ScrollView>
        {todoState.homeworks.length > 0 && todoState.homeworks.map((el)=>(
          el.status==='Done' &&
          <RowDone key={el._id} _id={el._id} name={el.name} status={el.status}/>
        ))}
      </ScrollView>
    </View>
  )
}

export default DoneApiScreen