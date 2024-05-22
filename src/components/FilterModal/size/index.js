import { View, Text } from 'react-native'
import React from 'react'
import { size } from '../../AddProduct/Category'
import styles from './style'
import Dropdown from '../../dropdown'
export default function SizeFilter({ setFilterCondition, filterCondition, setProduct, product }) {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Filter By size</Text>
    
        {/* <Text style={{color:'black', marginTop:10, fontSize:15}}> Select Category</Text> */}
        <View style={styles.dropDown}>
        <Dropdown  data={size} value={'size'} setFilterCondition={setFilterCondition} filterCondition={filterCondition} product={product} setProduct={setProduct}  />
    
        </View>
      </View>
    )
}