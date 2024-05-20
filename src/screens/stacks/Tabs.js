import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Home'
import Orders from '../Orders'
import Cart from '../Cart'
import HomeIcon from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Tab = createBottomTabNavigator()

export default function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} options={{
                headerShown: false, tabBarIcon: ({ focused, color, size }) => {
                    return (
                        <HomeIcon name='home' color='black' size={30} />
                    )
                },
                tabBarActiveBackgroundColor:'#C0BDC6',
                tabBarActiveTintColor:'red', tabBarInactiveTintColor:'#EBE7F7'
                
            }}  />
            <Tab.Screen name='Order' component={Orders}   options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return (
                        <HomeIcon name='shopping-bag' color='black' size={30} />
                    )
                },tabBarActiveBackgroundColor:'#C0BDC6',
                tabBarActiveTintColor:'red', tabBarInactiveTintColor:'#EBE7F7'
            }} />
            <Tab.Screen name='Cart' component={Cart}  options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return (
                        <HomeIcon name='shopping-cart' color='black' size={30} />
                    )
                }, tabBarActiveBackgroundColor:'#C0BDC6',
                tabBarActiveTintColor:'red', tabBarInactiveTintColor:'black',
            }} />
        </Tab.Navigator>
    )
}