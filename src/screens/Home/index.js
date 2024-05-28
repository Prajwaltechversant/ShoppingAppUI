import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import SearchBar from '../../components/searchBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopNavigation from '../../components/TopNavigation';
import ProductCard from '../../components/ProductCards';
import {ActivityIndicator} from 'react-native-paper';
import Add from '../../components/AddProduct';
import {useDispatch, useSelector} from 'react-redux';
import {
  onRefresh,
  searchProduct,
  setFilterItems,
} from '../../redux/slices/productSlice';
import NoData from '../../components/nodata';
import CardSkelton from '../../components/card-skelton';

export default function Home({navigation}) {
  const [searchStatus, setSearchStatus] = useState(false);

  const [searchResults, setSearchresults] = useState([]);
  const [isLoading, setIsLoadin] = useState(true);

  const dispatch = useDispatch();

  // const screenContext = useScreenContext()

  // const screenStyles = styles(screenContext,
  //   screenContext[screenContext.windowisPortrait ? 'windoWidth' : 'windoHeight'],
  //   screenContext[screenContext.windowisPortrait ? 'windowHeight' : 'windowWidth']
  // )

  const [data, setData] = useState([]);
  const [reFilter, setRefilter] = useState(false);
  const [isClicked, setisClicked] = useState('');

  const searchProductS = item => {
    console.log('query', item);
    if (item.trim() !== '') {
      dispatch(searchProduct(item));
      setSearchStatus(true);
    } else {
      setSearchresults([]);
    }
  };
  const searchresult = useSelector(state => state.products.searchItems);
  // const filterArray = useSelector(state => state.products.searchItems)
  useEffect(() => {
    setSearchresults(searchresult);
  }, [searchresult]);

  const allData = useSelector(state => state.products.allProducts);
  useEffect(() => {
    setData(allData);
    setIsLoadin(false)
  }, [allData]);
  useEffect(() => {
    if (searchresult.length > 0 && !isClicked) {
      dispatch(onRefresh());
    }
  }, [isClicked, searchresult]);

  const displayByCategory = () => {
    if (isClicked && isClicked === 'All Products') {
      setSearchresults([]);
      dispatch(setFilterItems(allData));
    } else {
      const categoryData = data?.filter(item => item.category === isClicked);
      console.log(categoryData);
      if (categoryData.length > 0) {
        setSearchresults(categoryData);
        setIsLoadin(false)
        dispatch(setFilterItems(categoryData));
      } else {
        setSearchresults([]);
      }
    }
  };
  useEffect(() => {
    displayByCategory();
  }, [isClicked]);

  if (isLoading) {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <SearchBar searchProductS={searchProductS} />
            <TopNavigation setisClicked={setisClicked} />
          </View>
          <View style={styles.contentContainer}>
            <FlatList
              data={Array(10)}
              renderItem={({item}) => <CardSkelton />}
              numColumns={2}
            />
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <SearchBar searchProductS={searchProductS} />
        <TopNavigation setisClicked={setisClicked} />
      </View>
      <View style={styles.contentContainer}>
        {searchResults?.length > 0 ? (
          <FlatList
            data={searchResults}
            renderItem={({item}) => (
              <ProductCard item={item} navigation={navigation} />
            )}
            numColumns={2}
            ListEmptyComponent={<NoData />}
            // refreshing={true}
            // onRefresh={data}
          />
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ProductCard item={item} navigation={navigation} />
            )}
            numColumns={2}
            ListEmptyComponent={
              <ActivityIndicator color="red" size={'large'} animating={true} />
            }
            // refreshing={true}

            // onRefresh={useS}
          />
        )}
      </View>

      <View style={styles.addContainer}>
        <Add />
      </View>
    </View>
  );
}
