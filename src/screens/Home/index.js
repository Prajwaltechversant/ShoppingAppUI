import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import SearchBar from '../../components/searchBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TopNavigation from '../../components/TopNavigation'
import ProductCard from '../../components/ProductCards'
import { ActivityIndicator } from 'react-native-paper'

export default function Home({navigation}) {


  const [data, setData] = useState()
  const getData = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const jsondata = await response.json()
    setData(jsondata.products)
  }

  useEffect(() => {
    getData()
    // console.log(navigation)

  }, [])
  return (
    <View style={styles.container}>
      <SearchBar />
      <TopNavigation />

      <View style={styles.contentContainer}>
        <FlatList
        
          data={data}
          renderItem={({ item }) => <ProductCard item={item}
          navigation={navigation}

          />}
          numColumns={2}
          ListEmptyComponent={<ActivityIndicator color='red' size={'large'} animating={true} />}
        />

      </View>

    </View>
  )
}