import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import MainScreenStack from './Screens/MainScreenStack'

const App = () => {
  return (
    <>
    <NativeBaseProvider>
      <NavigationContainer>
        <MainScreenStack/>
      </NavigationContainer>
    </NativeBaseProvider>
    </>
  )
}

export default App