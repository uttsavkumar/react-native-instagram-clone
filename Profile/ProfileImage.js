import { Image, View } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProfileTags from '../Profile/ProfileTags'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMI from 'react-native-vector-icons/MaterialIcons'

const Tab = createMaterialTopTabNavigator()

const ProfileTab = () => {
    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 1.5 }}>
                    <View style={{ backgroundColor: 'white' }}>
                        <Image alt='img' source={require('../images/shoe5.png')} height={130} width={119} />
                    </View>
                    <View style={{ backgroundColor: 'white' }}>
                        <Image alt='img' source={require('../images/shoe5.png')} height={130} width={119} />
                    </View>
                    <View style={{ backgroundColor: 'white' }}>
                        <Image alt='img' source={require('../images/shoe5.png')} height={130} width={119} />
                    </View>
                </View>
            </View>
        </>
    )
}
const ProfileImage = () => {
    return (
        <>
            <Tab.Navigator >
                <Tab.Screen name='images' options={{
                    tabBarStyle: { backgroundColor: 'black' },
                    tabBarIndicatorStyle: { backgroundColor: 'white' },
                    tabBarIcon: ({ focused }) => (focused ? <IconMCI name='grid' size={26} color='white' /> : <IconMCI name='grid' size={26} color='grey' />),
                    tabBarShowLabel: false,

                }} component={ProfileTab} />
                <Tab.Screen name='tags' options={{
                    tabBarStyle: { backgroundColor: 'black' },
                    tabBarIndicatorStyle: { backgroundColor: 'white' },
                    tabBarIcon: ({ focused }) => (focused ? <IconMI name='person-pin' size={26} color='white' /> : <IconMI name='person-pin' size={26} color='grey' />),
                    tabBarShowLabel: false,

                }} component={ProfileTags} />
            </Tab.Navigator>
        </>
    )
}
const style = StyleSheet.create({

})
export default ProfileImage