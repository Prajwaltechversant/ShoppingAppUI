import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { categories } from '../AddProduct/Category'
import { useDispatch } from 'react-redux'
import { filterByCategory } from '../../redux/slices/productSlice'


export default function TopNavigation({setisClicked}) {
    // tabs.unshift('All Products')

    const tabs = categories
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <FlatList data={tabs} renderItem={({ item }) => <View style={{ width: 100, marginRight: 5 }}>
                <TouchableOpacity onPress={()=>{
                    // dispatch(filterByCategory(item))
                    setisClicked(item)
                    }}>
                    <Text style={styles.btn} >{item}</Text>
                </TouchableOpacity>
                {/* {
                    isClicked &&
                    <View style={{ backgroundColorcolor: 'yelow', width: 50, borderWidth: 10 }}></View>
                } */}
            </View>} horizontal={true} scrollEnabled={true}
                showsHorizontalScrollIndicator={false} />
        </View>
    )
}