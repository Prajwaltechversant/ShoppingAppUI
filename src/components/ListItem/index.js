import { View, Text, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './style'
import { CountryDataContextAPI } from '../../context/CountryDataContext'
export default function ListItem({ setModalVisible, item, setCountryData, value, setStateData }) {

  // const [status, setStatus] = useState(false)
  // console.log("saa")
  // console.log(item);
  const { location,setLocation } = useContext(CountryDataContextAPI);

  const handlePress = () => {
    setModalVisible(false);
    if (value === "country") {
      setCountryData(item);
      setLocation((prevLocation) => ({ ...prevLocation, country: item }));
    } else {
      setStateData(item);
      setLocation((prevLocation) => ({ ...prevLocation, state: item }));
    }
    // console.log(location)
  }; return (
    <>
      <Pressable style={styles.container} onPress={handlePress} >
        <Text style={styles.text}>
          {item.name}
        </Text>
      </Pressable>

    </>
  )
}