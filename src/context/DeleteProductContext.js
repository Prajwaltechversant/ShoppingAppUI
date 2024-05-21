import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'
// import { useScreenContext } from './ScreenContextProvider'


export const DeleteProductContextAPI = createContext()

export default function DeleteProductContext({ children }) {

    const [deleteProductStatus, setDeleteProductStatus] = useState(false)
    return (
        <DeleteProductContextAPI.Provider value={{ deleteProductStatus, setDeleteProductStatus }}>
            {children}
        </DeleteProductContextAPI.Provider>
    )
}