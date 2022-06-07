import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Chat from '../Pages/Chat'
import BottomNavigation from './BottomNavigation'

const MainScreenStack = () => {
    const Stack = createStackNavigator()
  return (
    <>
        <Stack.Navigator>
            <Stack.Screen name='bottom' options={{ headerShown:false }} component={BottomNavigation}/>
        </Stack.Navigator>
    </>
  )
}

export default MainScreenStack