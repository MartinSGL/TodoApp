import React from 'react'
import { Text, View } from 'react-native'

type ErrorProps = {
    message:string
}

const Error = ({message=''}:ErrorProps) => {
  return (
    <View>
        {message!=='' &&
        <Text style={{color:'red',fontSize:20,marginRight:20}}>{message}</Text>
        }
    </View>
  )
}

export default Error