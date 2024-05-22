import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { color } from '../../AddProduct/Category'
import Dropdown from '../../dropdown'
export default function ColorFilter({ setFilterCondition, filterCondition, setProduct, product }) {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Filter By Color</Text>

    {/* <Text style={{color:'black', marginTop:10, fontSize:15}}> Select Category</Text> */}
    <View style={styles.dropDown}>
    <Dropdown  data={color} value={'color'} setFilterCondition={setFilterCondition} filterCondition={filterCondition} product={product} setProduct={setProduct}  />

    </View>
  </View>
  )
}