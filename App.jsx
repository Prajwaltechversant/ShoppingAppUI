import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Main from './src/screens/stacks/Main'

export default function App() {
  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  )
}