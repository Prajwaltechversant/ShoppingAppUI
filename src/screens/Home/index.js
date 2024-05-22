import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import SearchBar from '../../components/searchBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TopNavigation from '../../components/TopNavigation'
import ProductCard from '../../components/ProductCards'
import { ActivityIndicator } from 'react-native-paper'
import Add from '../../components/AddProduct'
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct } from '../../redux/slices/productSlice'

export default function Home({ navigation }) {
  const [searchStatus, setSearchStatus] = useState(false)

  const [searchResults, setSearchresults] = useState([])

  const dispatch = useDispatch()

  // const screenContext = useScreenContext()

  // const screenStyles = styles(screenContext,
  //   screenContext[screenContext.windowisPortrait ? 'windoWidth' : 'windoHeight'],
  //   screenContext[screenContext.windowisPortrait ? 'windowHeight' : 'windowWidth']
  // )


  // let sample = products[0].uri


  const searchProductS = (item) => {
    console.log("query",item)
    if (item.trim() !== '') {
      dispatch(searchProduct(item))
      setSearchStatus(true)
    }
    else {
      setSearchresults([])
    }
  }
  const searchresult = useSelector(state => state.products.searchItems)
  useEffect(() => {
    setSearchresults(searchresult)
  }, [searchresult])
  console.log(searchResults, 'filtering...')

  const data = useSelector(state => state.products.allProducts)
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <SearchBar searchProductS={searchProductS}  />
        <TopNavigation />
      </View>
      <View style={styles.contentContainer}>
       {
       searchResults.length>0 ?
       <FlatList
          data={searchResults}
          renderItem={({ item }) => (
            <ProductCard item={item} navigation={navigation} />
          )}
          numColumns={2}
          ListEmptyComponent={
            <Text style={{color:'red'}}>No data found</Text>
          }
        />

        :
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ProductCard item={item} navigation={navigation} />
          )}
          numColumns={2}
          ListEmptyComponent={
            <ActivityIndicator color='red' size={'large'} animating={true} />
          }
        />
        }
      </View>

      <View style={styles.addContainer}>
        <Add />
      </View>
    </View>
  )
}
