import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { createContext } from "react";



export const KeyChainContext = createContext()




export default function KeyChainContextProvider({ children }) {
    const [inKeyChain, setInKeyChain] = useState('')

    const getUserCred = async()=>{
        const userCred = await AsyncStorage.getAllKeys()
    }
    return (
        <KeyChainContext.Provider value={{ inKeyChain, setInKeyChain }}>
            {children}
        </KeyChainContext.Provider>
    )
}