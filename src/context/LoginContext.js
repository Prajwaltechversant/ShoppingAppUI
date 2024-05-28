import { View, Text } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const LoginContextAPI = createContext()

export default function LoginContext({ children }) {

    const [isLogged, setIsLogged] = useState("")
    
    return (
        <LoginContextAPI.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </LoginContextAPI.Provider>
    )
}