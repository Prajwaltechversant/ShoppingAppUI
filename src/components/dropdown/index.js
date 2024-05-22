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
                    else{
                        if(product){
                            if (value === 'brand') {
                                          setProduct({...product, brand:selectedItem})
                            }
                            else if (value === 'size') {
                                setProduct({...product, size:selectedItem})

    
                            }
                            else if (value === 'color') {
                                setProduct({...product, color:selectedItem})
                            }
 
                            else if (value === 'category') {
                                setProduct({...product, category:selectedItem})

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
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            paddingHorizontal: 12,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: 8,
                        }} >
                            <Text style={{ color: 'black', fontSize: 20 }} >{item}</Text>
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
        borderWidth: 0.3

    },
    dropdownContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})