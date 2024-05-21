import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Main from './src/screens/stacks/Main'
import ScreenContextProvider from './src/context/ScreenContextProvider'
import DeleteProductContext from './src/context/DeleteProductContext'
import PopupContext from './src/context/PopupContext'

export default function App() {
  return (
    <ScreenContextProvider>
      <PopupContext>
      <DeleteProductContext>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </DeleteProductContext>
      </PopupContext>
    </ScreenContextProvider>


  )
}