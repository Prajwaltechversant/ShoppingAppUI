import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Signin Page'
import Signup from '../Signup Page'

const Stack = createNativeStackNavigator()

export default function LoginStack() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name='Signup' component={Signup} />
            </Stack.Navigator>
        </>
    )
}