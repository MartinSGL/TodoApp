import React, { useContext } from 'react'
import { View,ActivityIndicator, StyleSheet } from 'react-native'
import { TodoContext } from '../contexts/TodoContext'

const Loader = () => {

    const {isLoading,changeLoading} = useContext(TodoContext)

    return (
            isLoading 
            ? 
            <View style={loaderStyle.conatiner}>
                <ActivityIndicator size={200} color={'black'}/>
            </View>
            : <></>
    )
}

const loaderStyle = StyleSheet.create({
    conatiner:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor:'white',
        opacity:0.8,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Loader