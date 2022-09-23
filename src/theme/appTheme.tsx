import { StyleSheet, TouchableOpacity } from 'react-native';

export const colores = {
    primary:'#5856D6',
    danger:'red',
    success:'green',
    warning:'orange',
    secondary:'gray',
    dark:'black'
}

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20,
        marginTop:20,
        flex:1
    },
    title:{
        fontSize:30,
        textAlign:'center'
    },
    hrHeader:{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical:20
    },
    rowTodoInProgress:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:15
    },
    hrTodoRow:{
        borderBottomColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width:'90%',
        alignSelf:'center'
    },
    inputCreate:{
        marginTop:20,
        borderColor:colores.secondary,
        borderWidth:2,
        borderRadius:10,
        textAlign:'center',
        fontSize:20,
        paddingVertical:10
    },
    TouchableOpacityCreate:{
        marginTop:20,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:5,
        backgroundColor:colores.success
    }
});