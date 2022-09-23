import React, { useContext, useState } from 'react'
import { Image,Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Error from '../../components/Error'
import { TodoContext } from '../../contexts/TodoContext'
import { styles } from '../../theme/appTheme'

const CreateScreen = () => {

  const [name, setName] = useState('')
  const [error,setError] = useState('')
  const {createHomework,changeLoading} = useContext(TodoContext)

  const saveHomework = () =>{
    if(name!==''){
      setError('')
      changeLoading(true)
      setTimeout(()=>{
        createHomework(name)
        setName('')
        changeLoading(false)

        Alert.alert(
          "Information",
          "The homework was saved successfuly",
          [
            {
              text: "Ok",
              onPress: () => console.log('ok'),
              style: "cancel",
            },
          ],
        )


      },1500)
    }else{
      setError('The homework field is empty')
    }
  }

  return (
    <>
      <View style={styles.globalMargin}>
        <Text style={styles.title}>Create Homework</Text>
        <View style={styles.hrHeader}/>
        <Image
          style={{width:200,height:200,alignSelf:'center'}}
          source={{uri:'https://cdn-icons-png.flaticon.com/512/2387/2387757.png'}}
        />

        <View>
          <TextInput 
            style={styles.inputCreate} 
            placeholder={'Write you homework'}
            value={name}
            onChangeText={newText => setName(newText)}
          />
          <Error message={error}/>
          <TouchableOpacity 
            style={styles.TouchableOpacityCreate}
            onPress={()=>saveHomework()}
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

export default CreateScreen