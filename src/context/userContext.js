import { View, Text } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'

export const UserContextAPI = createContext()

export default function UserContext({ children }) {

    const [user, setUser] = useState("")

    return (
        <UserContextAPI.Provider value={{ user, setUser }}>
            {children}
        </UserContextAPI.Provider>
    )
}



