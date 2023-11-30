import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Activity from '../screens/Activity'
import Profile from '../screens/Profile'

const BottomTab = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({ focused }) => {
                    let tabIcon

                    switch (route.name) {
                        case 'Home':
                            tabIcon = focused
                                ? require('../../assets/icons/home-focused.png')
                                : require('../../assets/icons/home-unfocused.png')
                            break
                        case 'Search':
                            tabIcon = focused
                                ? require('../../assets/icons/search-focused.png')
                                : require('../../assets/icons/search-unfocused.png')
                            break
                        case 'Activity':
                            tabIcon = focused
                                ? require('../../assets/icons/activity-focused.png')
                                : require('../../assets/icons/activity-unfocused.png')
                            break
                        case 'Profile':
                            tabIcon = focused
                                ? require('../../assets/icons/profile-focused.png')
                                : require('../../assets/icons/profile-unfocused.png')
                            break
                    }

                    return <Image source={tabIcon} />
                }
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Activity" component={Activity} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default BottomTab
