import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'


export const PopupContextAPI = createContext()
export default function PopupContext({ children }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <PopupContextAPI.Provider value={{ modalVisible, setModalVisible }}>
            {children}
        </PopupContextAPI.Provider>
    )
}