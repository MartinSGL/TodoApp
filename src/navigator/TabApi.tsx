import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView} from 'react-native';
import { TodoProviderApi } from '../contexts/TodoContextApi';
import InProgressApiScreen from '../screens/homeworkApi/InProgressApiScreen';
import CreateApiScreen from '../screens/homeworkApi/CreateApiScreen';
import DoneApiScreen from '../screens/homeworkApi/DoneApiScreen';
import LoaderApi from '../components/LoaderApi';

const Tab = createBottomTabNavigator();

export const TabApi = () => {

  return ( 
    <TodoProviderApi>
      <SafeAreaView style={{flex:1}}>
          <Tab.Navigator
            sceneContainerStyle={{
              backgroundColor: 'white',
            }}
            screenOptions={({route})=>({
              headerShown:false,
              tabBarActiveTintColor: colores.success,
              tabBarStyle: {
                borderTopColor: colores.success,
                height:80,
                borderTopWidth: 0,
                elevation: 0,
              },
              tabBarLabelStyle: {
                fontSize: 20
              },
              headerShow:false,
              // tabBarLabelPosition:'beside-icon',
              tabBarShowLabel:false,
              tabBarIcon:({color})=>{
                let icoName:string=''
                switch(route.name){
                  case 'create':
                    icoName = 'plus-circle'
                    break
                  case 'inprogress':
                    icoName = 'spinner'
                    break
                  case 'done':
                    icoName = 'tasks'
                    break
                }
                return <Icon name={icoName} size={20} color={color} />
            }})}>
        <Tab.Screen name="create" options={{title:'Create'}} component={CreateApiScreen} />
        <Tab.Screen name="inprogress" options={{title:'InProgress'}} component={InProgressApiScreen} />
        <Tab.Screen name="done" options={{title:'Done'}} component={DoneApiScreen} />
        </Tab.Navigator> 
      </SafeAreaView>
      <LoaderApi/> 
    </TodoProviderApi>
    
  );
}