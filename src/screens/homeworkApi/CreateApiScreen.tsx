import React, { useContext } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Error from '../../components/Error'
import { styles } from '../../theme/appTheme'
import { TodoContextApi } from '../../contexts/TodoContextApi';

const CreateApiScreen = () => {

  const {createHomework,name,error,setName} = useContext(TodoContextApi)

  return (
    <>
      <View style={styles.globalMargin}>
        <Text style={styles.title}>Create Task</Text>
        <View style={styles.hrHeader}/>
        <Image
          style={{width:200,height:200,alignSelf:'center'}}
          source={{uri:'https://cdn-icons-png.flaticon.com/512/2387/2387757.png'}}
        />

        <View>
          <TextInput 
            style={styles.inputCreate} 
            placeholder={'Write your task'}
            value={name}
            onChangeText={newText => setName(newText)}
          />
          <Error message={error}/>
          <TouchableOpacity 
            style={styles.TouchableOpacityCreate}
            onPress={createHomework}
          >
            
            <Text style={{textAlign:'center', color:'white',fontSize:20}}>
              Create
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </>
  )
}

export default CreateApiScreen