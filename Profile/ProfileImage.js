import { Icon, Text } from 'native-base'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProfileTags from '../Profile/ProfileTags'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMI from 'react-native-vector-icons/MaterialIcons'

const Tab = createMaterialTopTabNavigator()

const ProfileTab = () => {
    return (
        <>
        <Text>Image</Text>
        </>
    )
}
const ProfileImage = () => {
    return (
        <>
            <Tab.Navigator >
                <Tab.Screen name='images'  options={{ 
                    tabBarStyle:{backgroundColor:'black'},
                    tabBarIndicatorStyle:{backgroundColor:'white'},
                    tabBarIcon:() => {return <IconMCI name='view-dashboard-variant-outline' size={26} color='white'/>},
                    tabBarShowLabel: false,

                 }} component={ProfileTab} />
                <Tab.Screen name='tags'options={{ 
                    tabBarStyle:{backgroundColor:'black'},
                    tabBarIndicatorStyle:{backgroundColor:'white'},
                    tabBarIcon:() => {return <IconMI name='person-pin' size={26} color='white'/>},
                    tabBarShowLabel: false,

                 }}  component={ProfileTags} />
            </Tab.Navigator>
        </>
    )
}

export default ProfileImage