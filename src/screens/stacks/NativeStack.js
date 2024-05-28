import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from './Tabs'
import Product from '../Products'
import { IconButton, MD3Colors } from 'react-native-paper';
import Entry from '../entry'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Stack = createNativeStackNavigator()
export default function NativeStack() {

  // console.log(navigation)

  const [show, setShow] = useState(false)

  return (


    <>
        <Stack.Navigator >
          <Stack.Screen name='Entry' component={Entry} options={{headerShown:false}} />
          <Stack.Screen name='Tabs' component={Tabs} options={{
            title: 'John ',
            headerRight: () => (
              <Text style={{ color: 'red', fontSize: 20 }} onPress={()=>AsyncStorage.removeItem('isLogged')}>
                usa
              </Text>
            ),
          }}
          />
          <Stack.Screen name='Product' component={Product}
            options={{
              headerRight: () => {
                return (
                  <View style={{ flexDirection: 'row' }}>
                    <IconButton
                      icon="heart"
                      iconColor="red"
                      size={20}
                      onPress={() => navigation.navigate('Cart')}
                    />
                    <IconButton
                      icon="cart"
                      iconColor="green"
                      size={20}
                      onPress={() => console.log('Pressed')}
                    />
                  </View>
                )
              }
            }}
          />
        </Stack.Navigator> 
    </>

  )
}