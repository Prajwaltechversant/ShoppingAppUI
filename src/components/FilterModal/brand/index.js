import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Dropdown from '../../dropdown'

import { brand } from '../../AddProduct/Category'
export default function BrandFilter({ setFilterCondition, filterCondition,setProduct, product }) {
    console.log(filterCondition, 'att')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Filter By Brand</Text>

      {/* <Text style={{color:'black', marginTop:10, fontSize:15}}> Select Category</Text> */}
      <View style={styles.dropDown}>
      <Dropdown  data={brand} value={'brand'} setFilterCondition={setFilterCondition} filterCondition={filterCondition} product={product} setProduct={setProduct}   />

      </View>
    </View>
  )
}