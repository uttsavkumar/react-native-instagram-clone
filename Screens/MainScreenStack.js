import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SingleChat from '../Chat/SingleChat'
import TopNaviagtion from './TopNaviagtion'

const MainScreenStack = () => {
    const Stack = createStackNavigator()
  return (
    <>
        <Stack.Navigator
         screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
        >
            <Stack.Screen name='top' options={{ headerShown:false }} component={TopNaviagtion}/>
            <Stack.Screen name='singlechat' options={{ headerShown:false }} component={SingleChat}/>
        </Stack.Navigator>
    </>
  )
}

export default MainScreenStack