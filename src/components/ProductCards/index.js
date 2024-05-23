import { ImageBackground, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './style'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import Star from 'react-native-vector-icons/FontAwesome'

import Icon from 'react-native-vector-icons/FontAwesome'
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/slices/productSlice';
import { DeleteProductContextAPI } from '../../context/DeleteProductContext';
import { PopupContextAPI } from '../../context/PopupContext';
import Popup from '../popup';
export default function ProductCard({ item, navigation }) {
    // console.log("navigation", item)
    const [isLoading, setIsLoading] = useState(false)

    const { deleteProductStatus, setDeleteProductStatus } = useContext(DeleteProductContextAPI)
    const { modalVisible, setModalVisible } = useContext(PopupContextAPI)

    // console.log(deleteProduct)
    const getIsloading = () => {
        if (item) {
            setIsLoading(true)
        } else {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getIsloading()
    }, [item])
    const dispatch = useDispatch()


    const handleDelete = () => {
        setModalVisible(true)
        if (deleteProductStatus) {
            dispatch(deleteProduct(item.title))
        }
    }
    return (
        <Card style={styles.container} onPress={() => {
            navigation.navigate('Product', {
                item: { item }
            })
        }}>

            <Card.Cover style={styles.cardImage} source={{ uri: item.productImagesUri[0] }}
            />
            <TouchableOpacity style={styles.trashIcon}
                onPress={handleDelete}
            >
                <Icon name='trash' size={20} color='red' />
            </TouchableOpacity>
            <Card.Content style={styles.cardContent}>

                <View style={styles.cardContentView}>

                    <View>
                        <Text style={styles.text}>{item.discount}%</Text>
                        {/* <Text style={styles.text}>lorem</Text> */}
                    </View>
                    <View>
                        <View>
                            <Icon name='heart' size={20} style={styles.likebtn} />
                            {/* <Text style={styles.text}>wdwqdwqd</Text> */}
                        </View>
                    </View>
                </View>
            </Card.Content>

            <Card.Actions >
                <View style={styles.cardActions}>
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.brand}</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'right' }}>${item.price}</Text>
                        <View style={styles.rating}>
                            <Star name='star' color='red' size={15} />
                            <Star name='star' color='red' size={15} />
                            <Star name='star' color='red' size={15} />
                            <Star name='star' color='red' size={15} />
                        </View>

                    </View>
                </View>

            </Card.Actions>
            <Popup />
        </Card>
    )
}