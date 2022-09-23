import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './src/navigator/TabNavigator';
import { TodoProvider } from './src/contexts/TodoContext';
import Loader from './src/components/Loader';

const App = () => {
  return (
      <NavigationContainer>
        <TodoProvider>
          <BottomTab/>
          <Loader/>
        </TodoProvider>         
      </NavigationContainer>
  )
}

export default App