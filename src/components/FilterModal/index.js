import { View, Text, Modal, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { IconButton } from 'react-native-paper';
import { Divider } from 'react-native-paper';
import PriceFilter from './Price'
import { Button } from 'react-native-paper';
import BrandFilter from './brand'
import SizeFilter from './size'
import ColorFilter from './color'
import { filterByBrand, filterByColor, filterByPrice, filterBySize } from '../../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { color } from '../AddProduct/Category';


export default function FilterModal() {

    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisble] = useState(false)

    const [filterOption, setFilterOption] = useState({
        price: true,
        brand: false,
        size: false,
        color: false
    })

    const [filterOptionScreen, setFilterOptionScreen] = useState('price')

    const [filterCondition, setFilterCondition] = useState({
        price: {
            p1: '',
            p2: '',
        },
        brand: '',
        size: '',
        color: ''

    })
    const handleFilter = (option) => {
        console.log(option, 'agagag')


        if (option === 'price') {
            // Alert.alert(option, 'options')
            const { p1, p2 } = filterCondition.price
            if (p1 || p2) {
                console.log(p1, p2)
                dispatch(filterByPrice(filterCondition.price))
                setIsModalVisble(false)
            }
            else {
                console.log("try again later....")
            }
        }
        else if (option === 'brand') {
            const { brand } = filterCondition
            // console.log(brand,'here')
            dispatch(filterByBrand(brand))
            setIsModalVisble(false)

        }
        else if(option==='size'){
            const {size} = filterCondition
            dispatch(filterBySize(size))
        }
        else if(option==='color'){
            const {color} = filterCondition
            dispatch(filterByColor(color))
        }

    }

    // console.log("filter in", filterCondition);
    // const searchresult = useSelector(state => state.products.searchItems)
    // console.log(searchresult, 'ajajhah')
    return (
        <>
            <TouchableOpacity onPress={() => setIsModalVisble(true)} >
                <Ionicons name='filter' size={30} color={'#D20103'} styles={styles.filtericon} />
            </TouchableOpacity>

            <Modal visible={isModalVisible} transparent={true} animationType='slide'>

                <View style={styles.modalContainer}>
                    <View style={styles.modalCloseBtn}>
                        <IconButton
                            icon='close'
                            iconColor={'black'}
                            size={20}
                            onPress={() => setIsModalVisble(false)}
                        />
                    </View>
                    <View style={styles.modalInner}>
                        <View style={styles.modalContent}>

                            {/* left content */}
                            <View style={styles.filterMenu}>
                                {/* <View>
                                    <TouchableOpacity style={styles.filterMenuOption}>
                                        <Text style={styles.filterMenuText}>Price</Text>
                                    </TouchableOpacity>
                                    <Divider bold={true} />
                                    <TouchableOpacity style={styles.filterMenuOption}>
                                        <Text style={styles.filterMenuText}>Brand</Text>
                                    </TouchableOpacity>
                                    <Divider bold={true} />
                                </View> */}
                                <FlatList
                                    data={Object.keys(filterOption)}
                                    renderItem={({ item }) => <TouchableOpacity style={styles.filterMenuOption}
                                        onPress={() => setFilterOptionScreen(item)}
                                    >
                                        <Text style={styles.filterMenuText}>{item}</Text>
                                    </TouchableOpacity>
                                    }
                                />
                            </View>

                            {/* right content */}
                            <View style={styles.filterContainer}>
                                {
                                    filterOptionScreen === 'brand' ?
                                        <>
                                            <BrandFilter setFilterCondition={setFilterCondition} filterCondition={filterCondition} />
                                            <View style={styles.btnContainer}>
                                                <Button icon='close' mode="outlined" buttonColor='white' textColor='black' rippleColor={'#918e87'} style={{ alignSelf: 'center', marginBottom: 20 }} onPress={() => setIsModalVisble(false)}>
                                                    Cancel
                                                </Button>
                                                <Button mode="contained" buttonColor='black' style={{ alignSelf: 'center', marginBottom: 20 }} onPress={() => handleFilter('brand')}>
                                                    Appy Filter
                                                </Button>
                                            </View>
                                        </>
                                        :
                                        filterOptionScreen === 'size' ?
                                            <>
                                                <SizeFilter setFilterCondition={setFilterCondition} filterCondition={filterCondition} />
                                                <View style={styles.btnContainer}>
                                                    <Button icon='close' mode="outlined" buttonColor='white' textColor='black' rippleColor={'#918e87'} style={{ alignSelf: 'center', marginBottom: 20 }} onPress={() => setIsModalVisble(false)}>
                                                        Cancel
                                                    </Button>
                                                    <Button mode="contained" buttonColor='black' style={{ alignSelf: 'center', marginBottom: 20 }} onPress={() => handleFilter('size')}>
                                                        Appy Filter
                                                    </Button>
                                                </View>
                                            </>
                                            : filterOptionScreen === 'color' ?
                                                <>
                                                    <ColorFilter setFilterCondition={setFilterCondition} filterCondition={filterCondition} />
                                                    <View style={styles.btnContainer}>
                                                        <Button icon='close' mode="outlined" buttonColor='white' textColor='black' rippleColor={'#918e87'} style={{ alignSelf: 'center', marginBottom: 20 }} onPress={() => setIsModalVisble(false)}>
                                                            Cancel
                                                        </Button>
                                                        <Button mode="contained" buttonColor='black' style={{ alignSelf: 'center', marginBottom: 20 }} onPress={() => handleFilter(filterOptionScreen)}>
                                                            Appy Filter
                                                        </Button>
                                                    </View>
                                                </>
                                                :
                                                <>
                                                    <PriceFilter setFilterCondition={setFilterCondition} filterCondition={filterCondition} />
                                                    <View style={styles.btnContainer}>
                                                        <Button icon='close' mode="outlined" buttonColor='white' textColor='black' rippleColor={'#918e87'} style={{ alignSelf: 'center', marginBottom: 20 }} onPress={() => setIsModalVisble(false)}>
                                                            Cancel
                                                        </Button>
                                                        <Button mode="contained" buttonColor='black' style={{ alignSelf: 'center', marginBottom: 20 }} onPress={() => handleFilter(filterOptionScreen)}>
                                                            Appy Filter
                                                        </Button>
                                                    </View>
                                                </>
                                }



                            </View>

                        </View>


                    </View>

                </View>
            </Modal></>

    )
}