import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import LoginPage from '../Auth/LoginPage'
import SignupPage from '../Auth/SignupPage'
import SingleChat from '../Chat/SingleChat'
import AddPost from '../Pages/AddPost'
import TopNaviagtion from './TopNaviagtion'
import auth from '@react-native-firebase/auth';


const LoginedPage = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}

    >
      <Stack.Screen name='top' options={{ headerShown: false }} component={TopNaviagtion} />
      <Stack.Screen name='singlechat' options={{ headerShown: false }} component={SingleChat} />
      <Stack.Screen name='addpost' options={{ headerShown: false }} component={AddPost} />
    </Stack.Navigator >
  )
}
const IsNotLogined = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name='login' options={{ headerShown: false }} component={LoginPage} />
      <Stack.Screen name='signup' options={{ headerShown: false }} component={SignupPage} />
    </Stack.Navigator >
  )
}

const MainScreenStack = () => {
  const [user, setUser] = useState()
  const handleUser = (user) => {
    setUser(user)
  }

  useEffect(() => {
    const sub = auth().onAuthStateChanged((user) => {
      handleUser(user)
    })
  }, [])
  return (
    <>
      {!user ? <IsNotLogined /> : <LoginedPage />}

    </>
  )
}

export default MainScreenStack