import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import NativeStack from './NativeStack'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginContextAPI } from '../../context/LoginContext'
import LoginStack from './LoginStack';
import { useSelector } from 'react-redux';
import SplashScreen from '../splashscreen';
import { RealmProvider, createRealmContext } from '@realm/react';
import { Task, config } from '../../REALM/Schema/taskSchema';

export default function Main() {
  const [token, setToken] = useState(false)
  const { isLogged } = useContext(LoginContextAPI)
  const [isLoading, setisloading] = React.useState(true)

  // console.log(isLogged)
  const data = useSelector((state) => state.userData)
  AsyncStorage.getItem('perist:root').then((res) => {
    const b = JSON.parse(res)
    console.log(b, "aas")
  })
  const checkIsLogged = async () => {
    const response = await AsyncStorage.getItem('isLogged')
    if (response) {
      setToken(true)
    } else {
      setToken(false)
    }
    setisloading(false)

  }
  useEffect(() => {
    checkIsLogged()
  }, [isLogged])
  if (isLoading) {
    return (
      <SplashScreen />
    )
  }


  return (
    <>
      {
        !token ?
          <LoginStack />
          :
          <RealmProvider schema={[Task]} schemaVersion={3}>
            <NativeStack />
          </RealmProvider>
      }
    </>
  )
}