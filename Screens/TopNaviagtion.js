import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import Chat from '../Pages/Chat'
import BottomNavigation from './BottomNavigation'

const TopNaviagtion = () => {
    const Top = createMaterialTopTabNavigator()
    const [page, setPage] = useState(0)
    return (
        <>

            <Top.Navigator tabBar={() => null}>
                <Top.Screen component={BottomNavigation}
                    options={({ route }) => ({
                        headerShown: false,
                        tabBarStyle: ((route) => {
                            const routename = getFocusedRouteNameFromRoute(route)
                            
                            if (routename === 'landing' || routename === undefined) {
                                useEffect(() => {
                                    setPage(1)
                                }, [routename])
                            }
                            else {
                                useEffect(() => {
                                    setPage(0)
                                }, [routename])
                            }
                        })(route),
                    })} name='bottom' />
                {
                    page === 1 ? <Top.Screen component={Chat} options={{ headerShown: false, }} name='chat' /> : null
                }
            </Top.Navigator>

        </>
    )
}

export default TopNaviagtion