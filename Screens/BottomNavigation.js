import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Landing from '../Pages/Landing'
import Search from '../Pages/Search'
import Reel from '../Pages/Reel'
import Profile from '../Pages/Profile'
import Activity from '../Pages/Activity'
import IconO from 'react-native-vector-icons/Octicons'
import IconF from 'react-native-vector-icons/Feather'
import IconMI from 'react-native-vector-icons/MaterialIcons'
import IconFA from 'react-native-vector-icons/FontAwesome'
import IconA from 'react-native-vector-icons/AntDesign'
import { Avatar,Image } from 'native-base'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

const BottomTab = createBottomTabNavigator()
const BottomNavigation = () => {
  return (
    <>

      <BottomTab.Navigator sceneContainerStyle={{ borderTop: 0, elevation: 0 }}>

        <BottomTab.Screen name='landing' options={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (focused ? <IconMI name='home-filled' size={29} color='white' /> : <IconO name='home' size={25} color='white' />),

          tabBarStyle: ((route) => {
            const routename = getFocusedRouteNameFromRoute(route)
            
            if (routename === 'chat') {
              return { display: 'none' }
            }
            else {
              return { backgroundColor: 'black', elevation: 0, borderTopWidth: .3, borderTopColor: '#8c8c8c94' }
            }
          })(route),

        })} component={Landing}
        />


        <BottomTab.Screen name='search' options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (focused ? <IconFA size={25} name='search' color='white' /> : <IconF name='search' size={25} color="white" />),
          tabBarStyle: { backgroundColor: 'black',elevation: 0, borderTopWidth: .3, borderTopColor: '#8c8c8c94' }
        }} component={Search} />


        <BottomTab.Screen name='reel' options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (focused ? <Image source={require('../images/reelfilled.png')} style={{width:25,height:25}} alt="reel"/> : <Image source={require('../images/reels.png')} style={{width:25,height:25}} alt="reel"/>),
          tabBarStyle: { backgroundColor: 'black' }
        }} component={Reel} />


        <BottomTab.Screen name='activity' options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (focused ? <IconA name='heart' size={25} color="white" /> : <IconF name='heart' size={25} color='white' />),
          tabBarStyle: { backgroundColor: 'black' }
        }} component={Activity} />


        <BottomTab.Screen name='profile' options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
          (focused ? <Avatar style={{ height: 33, width: 33, borderWidth: 2, borderColor: 'white' }} source={require('../images/img.jpg')} />
            : <Avatar style={{ height: 30, width: 30 }} source={require('../images/img.jpg')} />),
          tabBarStyle: { backgroundColor: 'black' }
        }} component={Profile} />

      </BottomTab.Navigator>
    </>
  )
}

export default BottomNavigation