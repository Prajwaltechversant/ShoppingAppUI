import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'


export const CountryDataContextAPI = createContext()

export default function CountryDataContext({ children }) {

    const [location, setLocation] = useState({
        country: "",
        state: ""
    })
    // console.log(location)
    return (
        <CountryDataContextAPI.Provider value={{ location, setLocation }}>
            {children}
        </CountryDataContextAPI.Provider>
    )
}