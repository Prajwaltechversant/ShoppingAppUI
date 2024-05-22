import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { RadioButton } from 'react-native-paper';
import { useSelector } from 'react-redux';


export default function PriceFilter({ setFilterCondition, filterCondition , setProduct, product}) {
    const [checked, setChecked] = React.useState('');
    //    console.log(n1, "n1")
    // console.log(filterCondition,"jjj")
    const handleOnPress = (n1, n2,) => {

        const price = filterCondition.price

        // console.log(price)
        if (n1 && !n2) {
            setChecked('n1')
            price.p1 = n1
            price.p2 = null
            setFilterCondition({ ...filterCondition, price: price })
            // filterCondition
        } else if (n1 && n2) {
            setChecked('n2')
            // console.log(`${n1}= n1, n2:${n2}`)

            price.p1 = n1
            price.p2 = n2
            setFilterCondition({ ...filterCondition, price: price })
        }
        else {
            setChecked('n3')
            price.p1 = null
            price.p2 = n2
            setFilterCondition({ ...filterCondition, price: price })
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton
                        value='n1'
                        status={checked === 'n1' ? 'checked' : 'unchecked'}
                        onPress={() => handleOnPress(500)}
                        color='black'
                    />
                    <Text style={styles.text}>Below Rs.500</Text>

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton
                        value="n2"
                        status={checked === 'n2' ? 'checked' : 'unchecked'}
                        onPress={() => handleOnPress(500, 1000)}
                        color='black'
                    />
                    <Text style={styles.text}>500-1000</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton
                        value="n3"
                        status={checked === 'n3' ? 'checked' : 'unchecked'}
                        onPress={() => handleOnPress('', 1000)}
                        color='black'
                    />
                    <Text style={styles.text}>Above 1000</Text>
                </View>
            </View>
        </View>
    )
}