import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { brand, color } from '../AddProduct/Category';
// import categories from '../AddProduct/Category';

// const categories = ['casual', 'formal']
export default function Dropdown({ data, value, setFilterCondition, filterCondition, setProduct, product }) {

    const [selected, setSelected] = useState('')
    return (

        <View style={styles.container}>
            <SelectDropdown
                data={data}
                onSelect={(selectedItem, index) => {
                    if (filterCondition) {
                        if (value === 'brand') {
                            setFilterCondition({ ...filterCondition, brand: selectedItem })

                        }
                        else if (value === 'size') {
                            setFilterCondition({ ...filterCondition, size: selectedItem })
                            // if (product) {

                            // }

                        }
                        else if (value === 'color') {
                            setFilterCondition({ ...filterCondition, color: selectedItem })
                            // if (product) {

                            // }
                        }
                        else if (value === 'category') {
                            setFilterCondition({ ...filterCondition, category: selectedItem })
                            // if (product) {

                            // }
                        }


                    }
                    else {
                        if (product) {
                            if (value === 'brand') {
                                setProduct({ ...product, brand: selectedItem })
                            }
                            else if (value === 'size') {
                                setProduct({ ...product, size: selectedItem })


                            }
                            else if (value === 'color') {
                                setProduct({ ...product, color: selectedItem })
                            }

                            else if (value === 'category') {
                                setProduct({ ...product, category: selectedItem })

                            }
                        }
                    }

                    // setSelected(selectedItem)

                }}
                renderButton={(selectedItem, isOpened) => {
                    // console.log(selectedItem)
                    return (
                        <View style={styles.container}>
                            <Text style={{ color: 'black', fontSize: 16, justifyContent: 'center', padding: 10, alignItems: 'center', width: '100%' }}>
                                {selectedItem ? selectedItem : `Select ${value}`}
                            </Text>

                        </View>
                    );
                }}
                renderItem={(item,) => {
                    return (
                        <View style={{}}>
                            <View style={{
                                width: '100%',
                                flexDirection: 'row',
                                paddingHorizontal: 12,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingVertical: 8,
                                gap: 5,
                            }} >
                                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }} >{item}</Text>
                                {value === 'color' &&
                                    <View style={{ backgroundColor: item, width: 20, height: 20, borderRadius: 50}}>
                                    </View>

                                }
                            </View>
                        </View>
                    );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',


    },
    dropdownContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 
        marginTop:60
    }
})