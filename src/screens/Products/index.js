import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import Right from 'react-native-vector-icons/AntDesign'
import ButonFooter from '../../components/ProductPageFooter'
import Add from '../../components/AddProduct'
export default function Product({ route }) {
  const [item, setItem] = useState()
  const [images, setimages] = useState([])


  const [mainImage, setMainImage] = useState(item?.productImagesUri[0])
  useEffect(() => {
    setItem(route.params.item.item)
    setimages(route.params.item.item.productImagesUri)
  }, [route.params])
  // console.log(images, 'akak')
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ScrollView style={styles.container}>

        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.itemName}>{item?.title}</Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.loremText}>{item?.brand}</Text>
            <Text style={styles.loremText}>{item?.category}</Text>

          </View>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image src={mainImage ? mainImage : item?.productImagesUri[0]} style={{ width: '100%', height: 200 }} />
        </TouchableOpacity>

        {/* Product images */}

        <View style={styles.moreContent}>
          <View>
            <View >
              <FlatList
                data={images}
                horizontal={true}
                renderItem={({ item }) =>
                  <TouchableOpacity onPress={() => setMainImage(item)}>
                    <Image source={{ uri: item }} style={styles.imagesArray}
                      alt='No fdata'
                    />
                  </TouchableOpacity>
                }
                ListEmptyComponent={<Text>Loading....</Text>}
              />

            </View>
          </View>
          <View>
            <Text style={styles.price}>${item?.price}</Text>
            <Text style={styles.loremText}>lorem lopesum lorem lorem lorem</Text>

            <View style={styles.priceFooter} >
              <Text style={styles.loremText}>{item?.stock}</Text>
              <View>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.loremText}>More Options</Text>
                  <Right name='right' color='blue' size={15} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{ color: '#FE9900' }}> Estimated delivery time : 48 hours</Text>
          </View>
          <View >
            <Text style={{ textAlign: 'left', color: 'black', marginVertical: 20, fontSize: 20, fontWeight: '700' }}>About this Item</Text>
            <View style={styles.descriptionContainer}>
              <Text style={styles.loremText}>
                {item?.description}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ position: 'absolute', bottom: 5, alignSelf: 'center' }}>
        <ButonFooter />
      </View>

      <Modal visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <Image source={{ uri: mainImage }} width={'100%'} height={'100%'} />
        </View>
      </Modal>
    </>
  )
}