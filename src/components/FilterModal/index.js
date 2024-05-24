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
import { filterByBrand, filterByColor, filterByPrice, filterBySize, onRefresh } from '../../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { color } from '../AddProduct/Category';
import Animated, { ReduceMotion, useSharedValue, withSpring } from 'react-native-reanimated';
import coloPalette from '../../assets/Theme/coloPalette';


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
        else if (option === 'size') {
            const { size } = filterCondition
            dispatch(filterBySize(size))
        }
        else if (option === 'color') {
            const { color } = filterCondition
            dispatch(filterByColor(color))
        }


    }

    // animation to modal


    const slide = withSpring(0)

    return (
        <>
            <TouchableOpacity onPress={() => {
                setIsModalVisble(true)
                withSpring(slide.value, {
                    duration: 2000,
                    dampingRatio: 0.5,
                    stiffness: 130,
                    overshootClamping: false,
                    restDisplacementThreshold: 0.11,
                    restSpeedThreshold: 1.99,
                    reduceMotion: ReduceMotion.System,
                })

            }} >
                <Ionicons name='filter' size={30} color={coloPalette.light.primary} styles={styles.filtericon} />
            </TouchableOpacity>

            <Animated.View   >
                <Modal visible={isModalVisible} transparent={true} animationType='fade'

                //  supportedOrientations={['portrait']} // ios
                >

                    <View style={styles.modalContainer}>

                        <View style={styles.modalInner}>
                            <View style={styles.modalContent}>
                                <View style={styles.modalCloseBtn}>
                                    <IconButton
                                        icon='close'
                                        iconColor={'black'}
                                        size={20}
                                        onPress={() => setIsModalVisble(false)}
                                    />
                                </View>
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
                                    <TouchableOpacity  style={{ borderRadius: 50, borderWidth: 1,borderColor:coloPalette.light.primary, backgroundColor:coloPalette.light.primary}} onPress={() => dispatch(onRefresh())}>
                                        <Text style={{ color: coloPalette.light.tertiary, textAlign: 'center' }}>Clear All</Text>
                                    </TouchableOpacity>
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
                </Modal>
            </Animated.View>


        </>

    )
}