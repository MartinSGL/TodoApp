import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerContentComponentProps, DrawerItem } from '@react-navigation/drawer';
import { TabLocal } from './TabLocal';
import { TabApi } from './TabApi';
import { Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
        drawerContent={props => <MenuInterno {...props} />}
    >
        <Drawer.Screen name="LocalApp" component={TabLocal} />
        <Drawer.Screen name="ApiApp" component={TabApi} /> 
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const MenuInterno = ({navigation}:DrawerContentComponentProps) => {
  return (
      <DrawerContentScrollView
      >
          {/* avatar container */}
          <View style={styles.avatarContainer}>
              <Image
                  source={{
                      uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMT4HyTAjKI_NyjA0c6r0jGBHFyRT0-Djm0V5vfhQGLppmMj84fr_J3xcbr4xkyQy_GQ0&usqp=CAU'
                  }}
                  style={styles.avatar}
              />
          </View>

          {/* menu options */}
          <View style={styles.menuContainer}>
              <TouchableOpacity 
                  style={styles.menuBoton}
                  onPress={()=>navigation.navigate('LocalApp')}
              >
                  <Text style={styles.menuTexto}>
                      <Icon name="book-reader" size={20} color={colores.primary} />    LocalApp
                  </Text>     
              </TouchableOpacity>
              <TouchableOpacity 
                  style={styles.menuBoton}
                  onPress={()=>navigation.navigate('ApiApp')}
              >
                  <Text style={styles.menuTexto}>
                      <Icon name="globe" size={20} color={colores.primary} />    ApiApp
                  </Text>     
              </TouchableOpacity>
          </View>

      </DrawerContentScrollView>
  )
}