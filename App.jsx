import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Main from './src/screens/stacks/Main'
import ScreenContextProvider from './src/context/ScreenContextProvider'
import DeleteProductContext from './src/context/DeleteProductContext'
import PopupContext from './src/context/PopupContext'
import LoginContext from './src/context/LoginContext'
import CountryDataContext from './src/context/CountryDataContext'
import UserContext from './src/context/userContext'

export default function App() {
  return (
    <ScreenContextProvider>
      <LoginContext>
        <UserContext>
        <CountryDataContext>
          <PopupContext>
            <DeleteProductContext>
              <NavigationContainer>
                <Main />
              </NavigationContainer>
            </DeleteProductContext>
          </PopupContext>
        </CountryDataContext>
        </UserContext>
      </LoginContext>
    </ScreenContextProvider>


  )
}